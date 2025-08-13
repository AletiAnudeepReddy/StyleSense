import torch
import torch.nn as nn
import torch.optim as optim
from torchvision import transforms, models
from torch.utils.data import DataLoader, random_split
from data_loader import DeepFashionDataset
from tqdm import tqdm
from sklearn.metrics import accuracy_score
import os

# Create models directory
os.makedirs("models", exist_ok=True)

# Constants

BATCH_SIZE = 32
EPOCHS = 2
LR = 1e-4

# Data transforms
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406],
                         std=[0.229, 0.224, 0.225])
])

dataset = DeepFashionDataset(
    img_dir="../dataset/selected_images",
    annotations_file="../dataset/labels_front.csv",
    transform=transform
)
NUM_CLASSES = len(dataset.label_to_id)


# Split data
train_size = int(0.8 * len(dataset))
val_size = len(dataset) - train_size
train_ds, val_ds = random_split(dataset, [train_size, val_size])

train_loader = DataLoader(train_ds, batch_size=BATCH_SIZE, shuffle=True)
val_loader = DataLoader(val_ds, batch_size=BATCH_SIZE)

# Load pretrained ResNet50
model = models.resnet50(pretrained=True)
model.fc = nn.Linear(model.fc.in_features, NUM_CLASSES)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = model.to(device)

criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=LR)

# Validation function
def evaluate(loader):
    model.eval()
    y_true, y_pred = [], []
    with torch.no_grad():
        for images, labels in loader:
            images, labels = images.to(device), labels.to(device)
            outputs = model(images)
            preds = outputs.argmax(dim=1)
            y_true.extend(labels.cpu().numpy())
            y_pred.extend(preds.cpu().numpy())
    acc = accuracy_score(y_true, y_pred)
    return acc

# Training loop
for epoch in range(EPOCHS):
    model.train()
    train_loss = 0
    for images, labels in tqdm(train_loader, desc=f"Epoch {epoch+1}/{EPOCHS}"):
        images, labels = images.to(device), labels.to(device)
        optimizer.zero_grad()
        outputs = model(images)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()
        train_loss += loss.item()
    
    val_acc = evaluate(val_loader)
    print(f"Epoch {epoch+1}, Loss: {train_loss/len(train_loader):.4f} | Val Acc: {val_acc:.4f}")

# Save PyTorch .pth
torch.save(model.state_dict(), "models/style_sense_resnet50.pth")

# Save TorchScript .pt
example_input = torch.randn(1, 3, 224, 224).to(device)
traced_model = torch.jit.trace(model, example_input)
traced_model.save("models/style_sense_resnet50.pt")

print("✅ Training complete. Models saved in /models/")
