import torch
from torchvision import transforms, models
from PIL import Image
from data_loader import DeepFashionDataset

# ===== Config =====
MODEL_PATH = "models/style_sense_resnet50.pth"
IMG_PATH = "../dataset/selected_images/MEN-Denim-id_00000089-28_1_front.jpg"  # Change this to your test image path

# ===== Transform (same as training) =====
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406],
                         std=[0.229, 0.224, 0.225])
])

# ===== Load dataset to get label mapping =====
dataset = DeepFashionDataset(
    img_dir="../dataset/selected_images",
    annotations_file="../dataset/labels_front.csv",
    transform=transform
)
label_to_id = dataset.label_to_id
id_to_label = {v: k for k, v in label_to_id.items()}

# ===== Load model =====
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = models.resnet50(pretrained=False)
model.fc = torch.nn.Linear(model.fc.in_features, len(label_to_id))
model.load_state_dict(torch.load(MODEL_PATH, map_location=device))
model = model.to(device)
model.eval()

# ===== Predict =====
def predict_image(image_path):
    image = Image.open(image_path).convert("RGB")
    image = transform(image).unsqueeze(0).to(device)

    with torch.no_grad():
        outputs = model(image)
        _, predicted = outputs.max(1)
        category = id_to_label[predicted.item()]
    
    return category

# Run prediction
print(f"Predicted style: {predict_image(IMG_PATH)}")
