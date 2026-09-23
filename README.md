========================================================================
WEB PROFILE SEKOLAH - SMK TARUNA BHAKTI DEPOK
========================================================================

Landing page dan platform informasi resmi untuk SMK Taruna Bhakti Depok,
dibuat modern menggunakan Next.js App Router, Tailwind CSS, serta integrasi
REST API backend berbasis Express.js dan Drizzle ORM.

Status : In Development
Stack  : Next.js | Tailwind CSS | Express.js | Drizzle ORM

------------------------------------------------------------------------
1. TENTANG PROJECT
------------------------------------------------------------------------

Website ini berfungsi sebagai media informasi digital resmi sekolah yang
menyajikan:

- Beranda / Home     : Banner utama, nilai keunggulan sekolah, dan informasi umum.
- Tentang Kami &     : Visi, misi, serta kilas balik perjalanan SMK Taruna
  Sejarah              Bhakti Depok.
- Ekstrakurikuler    : Informasi kegiatan dan wadah minat bakat siswa.
- Form Kontak        : Sarana komunikasi interaktif untuk pengunjung dan calon pendaftar.

------------------------------------------------------------------------
2. TECH STACK
------------------------------------------------------------------------

Layer          : Teknologi
------------------------------------------------------------------------
Frontend       : Next.js (App Router), React
Backend API    : Express.js, TypeScript
Styling        : Tailwind CSS, PostCSS
Database & ORM : Drizzle ORM, Supabase / MySQL
Asset Storage  : Cloudinary / Multer
Deployment     : Vercel

------------------------------------------------------------------------
3. STRUKTUR PROJECT
------------------------------------------------------------------------

web_profile_sekolah/
├── app/
│   ├── api/                 # API Routes (Next.js)
│   ├── ekstrakurikuler/     # Halaman Ekstrakurikuler
│   ├── kontak/              # Halaman Form Kontak
│   ├── sejarah/             # Halaman Sejarah Sekolah
│   ├── tentang-kami/        # Halaman Profil Sekolah
│   ├── favicon.ico
│   ├── globals.css          # Setup Tailwind & Custom Styling
│   ├── layout.js            # Main Layout (Navbar, Footer wrapper)
│   └── page.js              # Entry point / Halaman Beranda
│
├── componen/                # Reusable UI components (Header, Footer, Card, dll.)
├── config/                  # Konfigurasi variabel / API endpoint
├── lib/                     # Utilities & Helper functions
├── public/                  # Asset statis (Logo, Gambar, Ikon)
│   └── image/
├── drizzle.config.ts        # Konfigurasi Drizzle ORM
└── package.json

------------------------------------------------------------------------
4. GETTING STARTED
------------------------------------------------------------------------

--- Prasyarat ---
- Node.js >= 18.x
- npm / yarn / pnpm
- Service Backend Express.js / Database Supabase yang sudah aktif.

--- Instalasi ---
1. Clone repositori ini:
   git clone <URL_REPOSITORY_GITHUB_KAMU>
   cd web_profile_sekolah

2. Install dependency:
   npm install

--- Environment Variables ---
Buat file .env.local di root folder web_profile_sekolah:

   DATABASE_URL=your_database_connection_string
   NEXT_PUBLIC_API_URL=http://localhost:5000

--- Menjalankan Secara Lokal ---
Pastikan kamu sudah berada di direktori web_profile_sekolah, lalu jalankan:

   npm run dev

Buka http://localhost:3000 di browser kamu.

------------------------------------------------------------------------
5. GIT WORKFLOW
------------------------------------------------------------------------

Branch Model:
------------------------------------------------------------------------
master / main : Production-ready code. Hanya PM yang diperbolehkan merge.
develop       : Branch integrasi utama tempat penggabungan seluruh fitur.
feature/*     : Branch pengerjaan tugas/fitur spesifik (dibuat dari develop).

--- Aturan Workflow ---
1. Pengembangan Fitur:
   Buat branch baru dari develop:
     git checkout develop
     git pull origin develop
     git checkout -b feature/nama-fitur

2. Commit Message:
   Mengikuti konvensi pesan commit standar:
     feat     : penambahan fitur baru
     fix      : perbaikan bug/error
     style    : penataan UI / Tailwind CSS
     docs     : pembaruan dokumentasi README
     refactor : penataan ulang struktur kode

3. Penggabungan ke Develop:
     git checkout develop
     git pull origin develop
     git merge --no-ff feature/nama-fitur
     git push origin develop

------------------------------------------------------------------------
6. TEAM (KELOMPOK 3)
------------------------------------------------------------------------

Nama        : Peran
------------------------------------------------------------------------
Arjuna      : Project Manager (PM)
Kesya       : Frontend
Akram       : UI/UX Designer & QE
Nadia       : Backend

------------------------------------------------------------------------
7. LISENSI
------------------------------------------------------------------------

Proyek internal sekolah — SMK Taruna Bhakti Depok.
========================================================================
