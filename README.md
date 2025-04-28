# Topik Proyek

Memprediksi Gesture Tangan Dalam Permainan Batu Gunting Kertas

---

## 📚 Pengantar

Proyek ini adalah aplikasi web yang mengintegrasikan model **RockPaperScissorsCNN** yang telah dilatih sebelumnya dalam bentuk file model **JSON** dan **BIN** untuk mengklasifikasikan gambar dari permainan Rock, Paper, Scissors. Proyek ini adalah Tugas 1 yang diberikan oleh Syanti Irviantina, S.Kom.,M.Kom .

[Link Video Penjelasan & Demo](https://mikroskilacid-my.sharepoint.com/:f:/g/personal/derick_tjoa_students_mikroskil_ac_id/EgmoxHhm9LJLuBKJYhJfUSgBHTCEtoQWFbHQKGdaJ63WCw?e=dru44c)

---

## 🧑‍🤝‍🧑 Anggota Kelompok

Kelompok : 1

- Anggota 1 : Derick Tjoa (231110498)
  Menjelaskan code pembuatan model dan training model pada file train_xnn.ipynb, Menghubungkan model ke web
- Anggota 2 : Justin Emerson Wijaya (231110357)
  Menjelaskan code visualisasi dan validasi model pada file train_xnn.ipynb, Mengedit video, mempercantik halaman website
- Anggota 3 : Daniel Pangihutan Siregar (231112256)
  Menjelaskan code import library dan pembuatan fungsi yang diperlukan serta code persiapaan data untuk model

---

## 🚀 Model

Model yang digunakan dalam proyek ini adalah **RockPaperScissorsCNN**, yang dikembangkan oleh [Alexandre Donciu-Julin](https://www.kaggle.com/models/alexandredj/rockpaperscissorscnn) di Kaggle. Model ini telah dilatih sebelumnya pada dataset permainan Rock, Paper, Scissors dan disediakan dalam format **JSON** dan **BIN** untuk digunakan dalam aplikasi web ini.

---

## 📊 Lisensi

Model ini dilisensikan di bawah **MIT License**.  
Lihat file [LICENSE](./LICENSE) untuk detail lebih lanjut tentang lisensi.

---

## ⚙️ Cara Menjalankan

1. **Clone repositori**:

   ```bash
   git clone https://github.com/dericktjoa/rock-paper-scissor.git
   cd rock-paper-scissor
   ```

2. **Buka di aplikasi web**:
   Setelah repositori berhasil di-clone, Anda dapat langsung membuka file index.html di browser Anda untuk melihat aplikasi web.

3. **Jalankan aplikasi web**:
   Jika aplikasi memerlukan server untuk dijalankan (misalnya menggunakan server statis atau back-end lain), pastikan untuk menjalankannya sesuai dengan pengaturan yang sudah ada di proyek. Jika tidak, cukup buka index.html untuk mengakses aplikasi.

---

## 📄 Struktur Proyek

```
my-project/
├── LICENSE                    # File lisensi
├── README.md                  # File ini
├── model_web/                 # Folder yang berisi model
│   ├── group1-shard1of10.bin  # File model dalam format BIN bagian ke 1
│   ├── group1-shard2of10.bin  # File model dalam format BIN bagian ke 2
│   ├── group1-shard3of10.bin  # File model dalam format BIN bagian ke 3
│   ├── group1-shard4of10.bin  # File model dalam format BIN bagian ke 4
│   ├── group1-shard5of10.bin  # File model dalam format BIN bagian ke 5
│   ├── group1-shard6of10.bin  # File model dalam format BIN bagian ke 6
│   ├── group1-shard7of10.bin  # File model dalam format BIN bagian ke 7
│   ├── group1-shard8of10.bin  # File model dalam format BIN bagian ke 8
│   ├── group1-shard9of10.bin  # File model dalam format BIN bagian ke 9
│   ├── group1-shard10of10.bin # File model dalam format BIN bagian ke 10
│   └── mode.json              # File model dalam format JSON
├── training_code/             # Folder untuk kode pelatihan model
│   ├── train_cnn.ipynb        # File ipynb untuk training model
├── index.css                  # File CSS untuk styling
├── index.html                 # File HTML untuk tampilan aplikasi web
└── script.js                  # File JavaScript untuk logika aplikasi
```

---

## 🙏 Acknowledgments

- Model **RockPaperScissorsCNN** dikembangkan oleh [Alexandre Donciu-Julin](https://www.kaggle.com/models/alexandredj/rockpaperscissorscnn) dan dilisensikan di bawah **MIT License**.
- Terima kasih kepada komunitas Kaggle atas menyediakan model dan sumber daya terbuka ini.

---
