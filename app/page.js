import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">

      {/* ================= NAVBAR ================= */}
      <header className="w-full h-[65px] bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto h-full px-5 flex items-center justify-between">

          {/* LOGO + NAMA SEKOLAH */}
          <div className="flex items-center gap-2">
            <img
              src="/image/homepage/logo.jpeg"
              alt="Logo SMK Taruna Bhakti"
              className="w-[48px] h-[48px] object-contain"
            />

            <div className="leading-tight">
              <h1 className="text-[11px] md:text-[14px] font-bold text-[#12345b]">
                SMK TARUNA BHAKTI DEPOK
              </h1>

              <p className="text-[5px] md:text-[7px] text-[#d19a00] tracking-wide">
                UNGGUL & BERKARAKTER
              </p>
            </div>
          </div>

          {/* MENU */}
          <nav className="flex items-center gap-4 md:gap-7 text-[7px] md:text-[11px]">

            <Link
              href="/"
              className="relative text-[#12345b] font-semibold py-2
              after:absolute after:left-0 after:right-0 after:-bottom-[4px]
              after:h-[2px] after:bg-[#d9a900]"
            >
              Beranda
            </Link>

            <Link
              href="/tentang-kami"
              className="text-slate-500 hover:text-[#12345b] transition"
            >
              Tentang
            </Link>

            <Link
              href="/sejarah"
              className="text-slate-500 hover:text-[#12345b] transition"
            >
              Sejarah
            </Link>

            <Link
              href="/ekstrakurikuler"
              className="text-slate-500 hover:text-[#12345b] transition"
            >
              Ekstrakurikuler
            </Link>

            <Link
              href="/kontak"
              className="text-slate-500 hover:text-[#12345b] transition"
            >
              Kontak
            </Link>

          </nav>
        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="relative w-full h-[330px] md:h-[430px] overflow-hidden bg-slate-900">

        {/* GAMBAR GEDUNG */}
        <div className="absolute inset-0">
          <img
            src="/image/homepage/gedung.jpeg"
            alt="Gedung SMK Taruna Bhakti Depok"
            className="w-full h-full object-cover"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-slate-900/45"></div>

        {/* TEXT HERO */}
        <div className="relative z-10 max-w-6xl mx-auto h-full px-6 flex items-center">

          <div className="max-w-[600px] text-white">

            <span className="inline-block mb-3 px-3 py-1 rounded-full
              bg-amber-400/20 border border-amber-300/30
              text-[8px] md:text-[10px] font-bold
              tracking-widest text-amber-300">
              AKREDITASI A UNGGUL
            </span>

            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              SMK Taruna Bhakti Depok
            </h1>

            <p className="text-sm md:text-lg text-amber-200 font-medium mb-3">
              Membangun Generasi Unggul, Berkarakter, dan Berprestasi
            </p>

            <p className="text-[10px] md:text-sm text-slate-200
              leading-relaxed max-w-xl">
              Selamat datang di institusi pendidikan terdepan yang mendidik 
              masa depan bangsa dengan keselarasan nilai moral luhur dan
              pencapaian akademik berkelas internasional.
            </p>

          </div>
        </div>
      </section>


      {/* ================= SAMBUTAN KEPALA SEKOLAH ================= */}
      <section className="max-w-6xl mx-auto py-12 md:py-16 px-5">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 items-center">

          {/* FOTO */}
          <div className="relative h-[230px] md:h-[300px]
            rounded-xl overflow-hidden">

            <img
              src="image/homepage/kepalasekolah.jpeg"
              alt="Sambutan Kepala Sekolah"
              className="w-full h-full object-cover"
            />

          </div>

          {/* TEXT */}
          <div>

            <span className="text-[8px] md:text-[10px]
              font-bold tracking-widest uppercase
              text-amber-600 block mb-2">
              SAMBUTAN KEPALA SEKOLAH
            </span>

            <h2 className="text-xl md:text-3xl
              font-bold text-slate-900 mb-4 leading-tight">
              Mempersiapkan Pemimpin Peradaban Masa Depan
            </h2>

            <blockquote
              className="text-[9px] md:text-sm
            text-slate-600 italic leading-relaxed
              mb-4"
        >
              "Pendidikan bukanlah sekadar mengisi wadah yang kosong, melainkan menyalakan api inspirasi dalam jiwa
              setiap anak didik. Di SMK TARUNA BHAKTI, kami berkomitmen penuh untuk mengasah potensi intelektual,
              spiritual, dan emosional secara seimbang demi melahirkan lulusan berdaya saing global yang berbakti pada Ibu Pertiwi."
            </blockquote>

            <h4 className="text-[10px] md:text-sm font-bold text-slate-900">
              Aina Novera, S.Pd., M.M.
            </h4>

            <p className="text-[8px] md:text-xs text-slate-500">
              Kepala Sekolah
            </p>

          </div>
        </div>
      </section>


      {/* ================= PROGRAM UNGGULAN ================= */}
      <section className="bg-slate-100 py-12 md:py-16 px-5">

        <div className="max-w-6xl mx-auto">

          {/* JUDUL */}
          <div className="text-center mb-8">

            <span className="text-[7px] md:text-[9px]
              font-bold tracking-widest uppercase
              text-amber-600 block mb-1">
              AKADEMIK & TALENTA
            </span>

            <h2 className="text-xl md:text-3xl font-bold text-slate-900">
              3 Program Unggulan Utama
            </h2>

            <p className="text-[8px] md:text-xs text-slate-500 mt-2">
              Pengembangan minat spesifik siswa dengan fasilitas 
              berstandar tinggi guna mengoptimalkan pencapaian luar biasa.
            </p>

          </div>


          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* CARD 1 */}
            <div className="bg-white rounded-xl p-3 shadow-sm
              hover:shadow-md transition">

              <div className="relative h-[135px] md:h-[170px]
                w-full rounded-lg overflow-hidden mb-3">

                <img
                  src="image/homepage/program1.jpeg"
                  alt="Banyak Praktik"
                  className="w-full h-full object-cover"
                />

              </div>

              <span className="text-[6px] md:text-[8px]
                font-bold tracking-wider uppercase
                text-amber-600 block mb-1">
                MENGASAH KETERAMPILAN
              </span>

              <h3 className="font-bold text-[11px] md:text-sm
                text-slate-900 mb-1">
                Banyak Praktik dan Proyek
              </h3>

              <p className="text-[7px] md:text-[10px]
                text-slate-600 leading-relaxed">
                Siswa tidak hanya mendapatkan materi teori, tetapi juga
                melakukan praktik dan mengerjakan berbagai proyek untuk
                meningkatkan kemampuan serta pengalaman.
              </p>

            </div>


            {/* CARD 2 */}
            <div className="bg-white rounded-xl p-3 shadow-sm
              hover:shadow-md transition">

              <div className="relative h-[135px] md:h-[170px]
                w-full rounded-lg overflow-hidden mb-3">

                <img
                  src="/image/homepage/program2.jpeg"
                  alt="Unggul di Bidang Teknologi"
                  className="w-full h-full object-cover"
                />

              </div>

              <span className="text-[6px] md:text-[8px]
                font-bold tracking-wider uppercase
                text-amber-600 block mb-1">
                DIGITAL
              </span>

              <h3 className="font-bold text-[11px] md:text-sm
                text-slate-900 mb-1">
                Unggul di Bidang Teknologi
              </h3>

              <p className="text-[7px] md:text-[10px]
                text-slate-600 leading-relaxed">
                SMK Taruna Bhakti Depok memiliki pembelajaran yang banyak
                berfokus pada teknologi dan keterampilan digital yang
                sesuai dengan perkembangan dunia saat ini.
              </p>

            </div>


            {/* CARD 3 */}
            <div className="bg-white rounded-xl p-3 shadow-sm
              hover:shadow-md transition">

              <div className="relative h-[135px] md:h-[170px]
                w-full rounded-lg overflow-hidden mb-3">

                <img
                  src="image/homepage/program3.jpeg"
                  alt="Akreditasi"
                  className="w-full h-full object-cover"
                />

              </div>

              <span className="text-[6px] md:text-[8px]
                font-bold tracking-wider uppercase
                text-amber-600 block mb-1">
                KOMITMEN
              </span>

              <h3 className="font-bold text-[11px] md:text-sm
                text-slate-900 mb-1">
                Akreditasi
              </h3>

              <p className="text-[7px] md:text-[10px]
                text-slate-600 leading-relaxed">
                SMK Taruna Bhakti Depok terakreditasi A, yang menunjukkan
                bahwa sekolah memiliki kualitas pendidikan yang baik dan
                telah memenuhi standar yang ditetapkan.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* ================= PRESTASI ================= */}
      <section className="max-w-6xl mx-auto py-12 md:py-16 px-5">

        {/* JUDUL */}
        <div className="text-center mb-8">

          <span className="text-[7px] md:text-[9px]
            font-bold tracking-widest uppercase
            text-amber-600 block mb-1">
            INFORMASI
          </span>

          <h2 className="text-xl md:text-3xl
            font-bold text-slate-900">
            PRESTASI SMK TARUNA BHAKTI DEPOK
          </h2>

          <p className="text-[8px] md:text-xs text-slate-500 mt-2">
            Dapatkan pembaruan berita seputar prestasi
          </p>

        </div>


        {/* PRESTASI CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* PRESTASI 1 */}
          <div className="bg-white rounded-xl p-3
            shadow-sm border border-slate-100
            hover:shadow-md transition">

            <div className="relative h-[135px] md:h-[170px]
              w-full rounded-lg overflow-hidden mb-3">

              <img
                src="/image/homepage/presentasi1.jpeg"
                alt="Rakha dan Balqis"
                className="w-full h-full object-cover"
              />

            </div>

            <span className="text-[6px] md:text-[8px]
              font-bold tracking-wider uppercase
              text-amber-600 block mb-1">
              APRESIASI NASA
            </span>

            <h3 className="font-bold text-[11px] md:text-sm
              text-slate-900 mb-1">
              RAKHA & BALQIS
            </h3>

            <p className="text-[7px] md:text-[10px]
              text-slate-600 leading-relaxed">
              Rakha dan Bilqis mendapat apresiasi dari NASA atas 
              prestasi dan karya mereka di bidang cyber security. 
              Pencapaian ini menjadi kebanggaan bagi SMK Taruna Bhakti Depok.
            </p>

          </div>


          {/* PRESTASI 2 */}
          <div className="bg-white rounded-xl p-3
            shadow-sm border border-slate-100
            hover:shadow-md transition">

            <div className="relative h-[135px] md:h-[170px]
              w-full rounded-lg overflow-hidden mb-3">

              <img
                src="/image/homepage/prestasi2.jpeg"
                alt="SISA"
                className="w-full h-full object-cover"
              />

            </div>

            <span className="text-[6px] md:text-[8px]
              font-bold tracking-wider uppercase
              text-amber-600 block mb-1">
              JUARA 2
            </span>

            <h3 className="font-bold text-[11px] md:text-sm
              text-slate-900 mb-1">
              SISA
            </h3>

            <p className="text-[7px] md:text-[10px]
              text-slate-600 leading-relaxed">
              Siswa SMK TARUNA BHAKTI mendapatkan juara dua tingkat
              Depok.
            </p>

          </div>


          {/* PRESTASI 3 */}
          <div className="bg-white rounded-xl p-3
            shadow-sm border border-slate-100
            hover:shadow-md transition">

            <div className="relative h-[135px] md:h-[170px] w-full rounded-lg overflow-hidden mb-3">

              <img
                src="/image/homepage/prestasi3.jpeg"
                alt="Renang"
                className="w-full h-full object-cover"
              />

            </div>

            <span className="text-[6px] md:text-[8px]
              font-bold tracking-wider uppercase
              text-amber-600 block mb-1">
              JUARA O2SN
            </span>

            <h3 className="font-bold text-[11px] md:text-sm
              text-slate-900 mb-1">
              Renang
            </h3>

            <p className="text-[7px] md:text-[10px]
              text-slate-600 leading-relaxed">
              * Juara 1 Renang gaya bebas Putra (50M)
              <br />
              * Juara 1 Renang gaya dada Putra (50M)
              <br />
              * Juara 1 Renang Gaya dada Putri (50M)
              <br />
              * Juara 2 Renang Gaya Bebas Putri (50M)
            </p>

          </div>

        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0b2545] text-white
        py-9 px-5 border-t border-slate-800">

        <div className="max-w-6xl mx-auto
          grid grid-cols-2 md:grid-cols-4 gap-6
          text-[7px] md:text-[10px]">

          {/* KOLOM 1 */}
          <div>

            <div className="flex items-center gap-2 mb-3">

              <img
                src="/image/homepage/logo.jpeg"
                alt="Logo"
                className="w-7 h-7 object-contain"
              />

              <span className="font-bold text-[9px] md:text-xs">
                SMK TARUNA BHAKTI
              </span>

            </div>

            <p className="text-slate-400 leading-relaxed mb-3">
              Membangun generasi unggul yang berkarakter kuat, cerdas 
              secara akademis, dan siap bersaing dalam skala global dengan 
              tetap menjunjung nilai luhur bangsa.
            </p>

            <h5 className="font-bold mb-1 text-amber-400">
              ALAMAT UTAMA
            </h5>

            <p className="text-slate-400 leading-relaxed">
              Jalan Raya Pekapuran, RT 02/RW 07, Kelurahan 
              Curug, Kecamatan Cimanggis, Kota Depok, 
              Jawa Barat
            </p>

          </div>


          {/* KOLOM 2 */}
          <div>

            <h5 className="font-bold text-amber-400 mb-3">
              TAUTAN CEPAT
            </h5>

            <ul className="space-y-2 text-slate-300">

              <li>
                <Link
                  href="/tentang-kami"
                  className="hover:text-amber-400"
                >
                  Profil Sekolah
                </Link>
              </li>

              <li>
                <Link
                  href="/kurikulum"
                  className="hover:text-amber-400"
                >
                  Kurikulum
                </Link>
              </li>

              <li>
                <Link
                  href="/fasilitas"
                  className="hover:text-amber-400"
                >
                  Fasilitas Belajar
                </Link>
              </li>

              <li>
                <Link
                  href="/ekstrakurikuler"
                  className="hover:text-amber-400"
                >
                  Ekstrakurikuler
                </Link>
              </li>

              <li>
                <Link
                  href="/ppdb"
                  className="hover:text-amber-400"
                >
                  Informasi PPDB
                </Link>
              </li>

            </ul>
          </div>


          {/* KOLOM 3 */}
          <div>

            <h5 className="font-bold text-amber-400 mb-3">
              JAM OPERASIONAL
            </h5>

            <p className="text-slate-300 mb-2">
              Senin - Sabtu: 07.00 - 16.00
            </p>

            <p className="text-slate-300 mb-3">
              Minggu: Tutup
            </p>

            <h5 className="font-bold text-amber-400 mb-1">
              LAYANAN TELEPON
            </h5>

            <p className="text-slate-300">
              (021) 555-1234
            </p>

          </div>


          {/* KOLOM 4 */}
          <div>

            <h5 className="font-bold text-amber-400 mb-3">
              HUBUNGI KAMI
            </h5>

            <p className="text-slate-300 mb-3">
              info@smktarunabhakti.sch.id
            </p>

            <div className="flex gap-2">

              <span className="w-6 h-6 rounded-full bg-slate-800
                flex items-center justify-center
                text-slate-300 hover:bg-amber-400
                hover:text-[#0b2545] cursor-pointer transition">
                ◎
              </span>

              <span className="w-6 h-6 rounded-full bg-slate-800
                flex items-center justify-center
                text-slate-300 hover:bg-amber-400
                hover:text-[#0b2545] cursor-pointer transition">
                ▶
              </span>

              <span className="w-6 h-6 rounded-full bg-slate-800
                flex items-center justify-center
                text-slate-300 hover:bg-amber-400
                hover:text-[#0b2545] cursor-pointer transition">
                f
              </span>

              <span className="w-6 h-6 rounded-full bg-slate-800
                flex items-center justify-center
                text-slate-300 hover:bg-amber-400
                hover:text-[#0b2545] cursor-pointer transition">
                𝕏
              </span>

            </div>

          </div>

        </div>


        {/* COPYRIGHT */}
        <div className="max-w-6xl mx-auto mt-7 pt-4
          border-t border-slate-800
          flex flex-col md:flex-row
          justify-between items-center
          gap-2 text-[6px] md:text-[8px]
          text-slate-500">

          <p>
            © 2026 SMK Taruna Bhakti Depok. All rights reserved.
          </p>

          <p>
            Akreditasi A Unggul (BAN-S/M)
          </p>

        </div>

      </footer>

    </div>
  );
}