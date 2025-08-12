import os
import pandas as pd
from PIL import Image
from torch.utils.data import Dataset

class DeepFashionDataset(Dataset):
    def __init__(self, img_dir, annotations_file, transform=None):
        self.img_dir = img_dir
        self.annotations = pd.read_csv(annotations_file)  # read CSV instead of TXT
        self.transform = transform

    def __len__(self):
        return len(self.annotations)

    def __getitem__(self, idx):
        img_name = self.annotations.iloc[idx, 0]  # first column: image file name
        label = self.annotations.iloc[idx, 1]     # second column: label
        img_path = os.path.join(self.img_dir, img_name)
        
        image = Image.open(img_path).convert("RGB")
        if self.transform:
            image = self.transform(image)
        return image, int(label)
