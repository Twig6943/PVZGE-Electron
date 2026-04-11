# Repackaging Guide

Follow these steps if you want to rebuild the app from its packaged form.

---

## 1. Get the `.asar` file
- **Mac:** Open the `.dmg` file with an archiver (like PeaZip) or use a dmg extractor.  
- **Linux:** Run the AppImage with:  
  ```bash
  ./AppName.AppImage --appimage-extract
  ```

---

## 2. Extract the `.asar`
Use [Asar Extractor](https://github.com/tylerlong/asar-extractor-app) to unpack the `.asar` file you found.

---

## 3. Clone the repo
Clone this repository, but **don’t include submodules**:
```bash
git clone https://github.com/Twig6943/PVZGE-Electron
```

---

## 4. Prepare directories
Inside the cloned repo:  
- Create a folder called `pvzge_web`  
- Inside `pvzge_web` create another folder called `docs`  

---

## 5. Copy game files
From your decompiled `.asar` contents:  
- Go to `out/renderer`  
- Move everything from there into the `docs` folder you just made  

---

## 6. Build the project
Install dependencies and build it:  
```bash
npm install
npm run build:win -- --publish=never
```
