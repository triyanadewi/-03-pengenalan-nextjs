# Laporan Praktikum Pengenalan Next.js

|  | Pemrograman Berbasis Framework 2025 |
|--|--|
| NIM |  2241720206 |
| Nama |  Triyana Dewi Fatmawati |
| Kelas | TI - 3D |


## Langkah-langkah Praktikum
### A. Persiapan Lingkungan
1. Pastikan Node.js dan npm sudah terinstal di komputer Anda. Anda dapat memeriksanya dengan menjalankan perintah berikut di terminal atau command prompt: <br>
![Persiapan Lingkungan 1](img/prak1-1.png)

2. Buat direktori baru untuk proyek Next.js Anda 

3. Inisialisasi proyek Next.js dengan menjalankan perintah berikut: Perhatikan bahwa App Router belum digunakan <br>
![Persiapan Lingkungan 2](img/prak1-2.png)

4. Jalankan aplikasi Next.js
<br>
![Persiapan Lingkungan 3](img/prak1-3.png) <br>

    Aplikasi akan terbuka di browser pada alamat http://localhost:3000.<br>
    ![Hasil Persiapan Lingkungan](img/prak1-hasil.png)
---

### B. Membuat Halaman dengan Server-Side Rendering (SSR)
1. Buka file pages/index.tsx di text editor Anda. 

2. Ganti kode di dalamnya dengan kode berikut untuk membuat halaman sederhana: <br>
![SSR](img/prak2.png)

3. Simpan file dan lihat perubahan di browser. Anda akan melihat halaman utama dengan teks "Selamat Datang di Website Saya!". <br>
![Hasil SSR](img/prak2-hasil.png)

---

### C. Menggunakan Static Site Generation (SSG) 
1. Buat file baru di direktori pages dengan nama blog.js. 
2. Tambahkan kode berikut untuk membuat halaman blog dengan SSG: <br> 
![SSG](img/prak3.png)

3. Simpan file dan buka http://localhost:3000/blog di browser. Anda akan melihat daftar post yang diambil dari API eksternal. <br>
![Hasil SSG](img/prak3-hasil.png)

---

### D. Menggunakan Dynamic Routes 
1. Buat direktori baru di pages dengan nama blog. 

2. Buat file di dalam direktori blog dengan nama [slug].js 

3. Tambahkan kode berikut untuk membuat halaman dinamis berdasarkan slug: <br>
![Dynamic Routes](img/prak4.png)

4. Simpan file dan buka http://localhost:3000/blog/contoh-post di browser. Anda akan melihat halaman yang menampilkan slug dari URL. <br>
![Hasil Dynamic Routes](img/prak4-hasil.png)

---

### E. Menggunakan API Routes 
1. Pastikan terdapat direktori di pages dengan nama api. 

2. Buat file di dalam direktori api dengan nama products.js. 

3. Tambahkan kode berikut untuk membuat API route yang mengembalikan daftar produk: <br>
![Api Routes 1](img/prak5-1.png)

4. Buat file baru di pages dengan nama products.js untuk menampilkan daftar produk: <br>
![Api Routes 2](img/prak5-2.png)

5. Simpan file dan buka http://localhost:3000/products di browser. Anda akan melihat daftar produk yang diambil dari API route. <br>
![Hasil Api Routes](img/prak5-hasil.png)

---

### F. Menggunakan Link Component 
1. Buka file pages/index.tsx dan tambahkan modif dengan kode berikut untuk membuat link ke halaman lain: <br>
![Link Component 1](img/prak6-1.png)

2. Buat file baru di pages dengan nama about.js untuk halaman "Tentang Kami": <br>
![Link Component 2](img/prak6-2.png)

3. Simpan file dan buka http://localhost:3000 di browser. Klik link "Tentang Kami" untuk navigasi ke halaman tentang. <br>
![Hasil Link Component 1](img/prak6-hasil1.png) <br>
![Hasil Link Component 2](img/prak6-hasil2.png)

---

## Tugas
1. Buat halaman baru dengan menggunakan Static Site Generation (SSG) yang menampilkan daftar pengguna dari API https://jsonplaceholder.typicode.com/users. 
    > Kode Program: <br>
    > ![Kode Program Tugas 1](img/tugas1-kode.png) <br>
    > 
    > Hasil: <br>
    > ![Hasil Tugas 1](img/tugas1-hasil.png)

2. Implementasikan Dynamic Routes untuk menampilkan detail pengguna berdasarkan ID. 
    > Kode Program: <br>
    > ![Kode Program Tugas 2](img/tugas2-kode.png)
    >
    > Hasil: <br>
    > ![Hasil Tugas 2](img/tugas2-hasil.png)

3. Buat API route yang mengembalikan data cuaca dari API eksternal (misalnya, OpenWeatherMap) dan tampilkan data tersebut di halaman front-end. 
    > Kode Program: <br>
    > ![Kode Program Tugas 3 API](img/tugas3-kodeapi.png) <br>
    > ![Kode Program Tugas 3 Pages](img/tugas3-kodepages.png)
    >
    > Hasil: <br>
    > ![Hasil Tugas 3](img/tugas3-hasil1.png) <br>
    > ![Hasil Tugas 3](img/tugas3-hasil2.png)