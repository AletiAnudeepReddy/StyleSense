import os
from PIL import Image
from torch.utils.data import Dataset

class DeepFashionDataset(Dataset):
    def __init__(self, img_dir, annotations_file, transform=None):
        self.img_dir = img_dir
        with open(annotations_file, 'r') as f:
            lines = f.readlines()[2:]  # skip header
        self.img_labels = [(l.split()[0], int(l.split()[1])) for l in lines]
        self.transform = transform

    def __len__(self):
        return len(self.img_labels)

    def __getitem__(self, idx):
        img_path, label = self.img_labels[idx]
        image = Image.open(os.path.join(self.img_dir, img_path)).convert("RGB")
        if self.transform:
            image = self.transform(image)
        return image, label
