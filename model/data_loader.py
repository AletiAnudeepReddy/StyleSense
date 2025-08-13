import os
import pandas as pd
from PIL import Image
from torch.utils.data import Dataset

class DeepFashionDataset(Dataset):
    def __init__(self, img_dir, annotations_file, transform=None):
        self.img_dir = img_dir
        self.annotations = pd.read_csv(annotations_file)
        self.transform = transform

        # Keep only rows where image file exists
        valid_rows = []
        for _, row in self.annotations.iterrows():
            img_name = str(row[0]).strip()
            if not os.path.splitext(img_name)[1]:  # no extension
                img_name += ".jpg"
            img_path = os.path.join(self.img_dir, img_name)
            if os.path.exists(img_path):
                valid_rows.append([img_name, row[1]])  # label still text for now
        self.annotations = pd.DataFrame(valid_rows, columns=["image", "label"])

        # Map string labels to integer class IDs
        unique_labels = sorted(self.annotations["label"].unique())
        self.label_to_id = {label: idx for idx, label in enumerate(unique_labels)}
        self.annotations["label_id"] = self.annotations["label"].map(self.label_to_id)

    def __len__(self):
        return len(self.annotations)

    def __getitem__(self, idx):
        img_name = self.annotations.iloc[idx]["image"]
        label_id = self.annotations.iloc[idx]["label_id"]
        img_path = os.path.join(self.img_dir, img_name)

        image = Image.open(img_path).convert("RGB")
        if self.transform:
            image = self.transform(image)
        return image, label_id
