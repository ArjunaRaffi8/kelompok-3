import Link from "next/link";

export default function Sejarah() {
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
              className="text-slate-500 hover:text-[#12345b] transition"
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
              className="relative text-[#12345b] font-semibold py-2
              after:absolute after:left-0 after:right-0 after:-bottom-[4px]
              after:h-[2px] after:bg-[#d9a900]"
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
      <section className="relative w-full h-[200px] md:h-[260px] overflow-hidden">

        {/* GAMBAR GEDUNG */}
        <div className="absolute inset-0">
          <img
            src="/image/homepage/gedung.jpeg"
            alt="Gedung SMK Taruna Bhakti Depok"
            className="w-full h-full object-cover"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#0b2545]/75"></div>


        {/* TEXT HERO */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">

          <h1 className="text-2xl md:text-4xl font-bold text-[#d9a900] mb-3">
            Sejarah Smk Taruna Bhakti Depok
          </h1>

          <p className="text-[8px] md:text-[11px] text-slate-200">
            Jejak sejarah panjang penuh prestasi, pengabdian tiada henti, dan dedikasi
            mendidik bangsa sejak tahun 1965
          </p>

        </div>
      </section>


      {/* ================= TIMELINE ================= */}
      <section className="bg-slate-50 py-12 md:py-16 px-5">

        <div className="max-w-5xl mx-auto">

          {/* JUDUL */}
          <div className="text-center mb-8">

            <span className="text-[7px] md:text-[9px]
              font-bold tracking-widest uppercase
              text-[#d19a00] block mb-2">
              REKAM JEJAK
            </span>

            <h2 className="text-xl md:text-3xl font-bold text-[#12345b]">
              Milestone & Linimasa Sejarah
            </h2>

            <p className="text-[8px] md:text-[11px] text-slate-400 mt-2">
              Perjalanan berharga kami dalam membentuk jati diri institusi pendidikan
              terpercaya dari dekade ke dekade.
            </p>

          </div>


          {/* TIMELINE */}
          <div className="relative max-w-3xl mx-auto py-4">

            {/* GARIS TENGAH */}
            <div className="absolute left-1/2 top-0 bottom-0
              w-[2px] bg-[#eadb9a] -translate-x-1/2">
            </div>


            {/* ================= 2004 ================= */}
            <div className="relative grid grid-cols-2 gap-8 mb-6">

              <div className="flex justify-end">
                <div className="w-full max-w-[300px] bg-white
                  border border-slate-200 rounded-md p-4">

                  <h3 className="text-[11px] md:text-sm font-bold text-[#c99800] mb-1">
                    2004
                  </h3>

                  <h4 className="text-[9px] md:text-xs font-bold text-[#12345b] mb-3">
                    SMK Tarung Bhakti Didirikan
                  </h4>

                  <p className="text-[7px] md:text-[9px] text-slate-400 leading-relaxed">
                    SMK Taruna Bhakti Depok resmi didirikan pada 16
                    Juni 2004 di Cimanggis, Depok, dengan fokus awal
                    pada bidang Teknologi Informasi dan Komunikasi.
                  </p>

                </div>
              </div>

              <div></div>

              {/* TITIK */}
              <div className="absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                w-3 h-3 rounded-full bg-[#12345b]
                border-[3px] border-[#d9a900]">
              </div>

            </div>


            {/* ================= 2006 ================= */}
            <div className="relative grid grid-cols-2 gap-8 mb-6">

              <div></div>

              <div className="flex justify-start">
                <div className="w-full max-w-[300px] bg-white
                  border border-slate-200 rounded-md p-4">

                  <h3 className="text-[11px] md:text-sm font-bold text-[#c99800] mb-1">
                    2006
                  </h3>

                  <h4 className="text-[9px] md:text-xs font-bold text-[#12345b] mb-3">
                    Mulai Berkembang
                  </h4>

                  <p className="text-[7px] md:text-[9px] text-slate-400 leading-relaxed">
                    Sekolah mulai mengembangkan fasilitas dan sistem
                    pembelajaran untuk mendukung kebutuhan siswa
                    di bidang teknologi.
                  </p>

                </div>
              </div>

              {/* TITIK */}
              <div className="absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                w-3 h-3 rounded-full bg-[#12345b]
                border-[3px] border-[#d9a900]">
              </div>

            </div>


            {/* ================= 2009 ================= */}
            <div className="relative grid grid-cols-2 gap-8 mb-6">

              <div className="flex justify-end">
                <div className="w-full max-w-[300px] bg-white
                  border border-slate-200 rounded-md p-4">

                  <h3 className="text-[11px] md:text-sm font-bold text-[#c99800] mb-1">
                    2009
                  </h3>

                  <h4 className="text-[9px] md:text-xs font-bold text-[#12345b] mb-3">
                    Pengembangan Program Keahlian
                  </h4>

                  <p className="text-[7px] md:text-[9px] text-slate-400 leading-relaxed">
                    SMK Taruna Bhakti mulai memperluas bidang
                    keahlian dengan menghadirkan kompetensi yang
                    berkaitan dengan teknologi dan multimedia.
                  </p>

                </div>
              </div>

              <div></div>

              {/* TITIK */}
              <div className="absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                w-3 h-3 rounded-full bg-[#12345b]
                border-[3px] border-[#d9a900]">
              </div>

            </div>


            {/* ================= 2015 ================= */}
            <div className="relative grid grid-cols-2 gap-8 mb-6">

              <div></div>

              <div className="flex justify-start">
                <div className="w-full max-w-[300px] bg-white
                  border border-slate-200 rounded-md p-4">

                  <h3 className="text-[11px] md:text-sm font-bold text-[#c99800] mb-1">
                    2015
                  </h3>

                  <h4 className="text-[9px] md:text-xs font-bold text-[#12345b] mb-3">
                    Penguatan Pendidikan Berbasis Teknologi
                  </h4>

                  <p className="text-[7px] md:text-[9px] text-slate-400 leading-relaxed">
                    Pembelajaran dan fasilitas sekolah terus
                    dikembangkan agar semakin sesuai dengan
                    perkembangan teknologi dan kebutuhan industri.
                  </p>

                </div>
              </div>

              {/* TITIK */}
              <div className="absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                w-3 h-3 rounded-full bg-[#12345b]
                border-[3px] border-[#d9a900]">
              </div>

            </div>


            {/* ================= 2020 ================= */}
            <div className="relative grid grid-cols-2 gap-8 mb-6">

              <div className="flex justify-end">
                <div className="w-full max-w-[300px] bg-white
                  border border-slate-200 rounded-md p-4">

                  <h3 className="text-[11px] md:text-sm font-bold text-[#c99800] mb-1">
                    2020
                  </h3>

                  <h4 className="text-[9px] md:text-xs font-bold text-[#12345b] mb-3">
                    Adaptasi Pembelajaran Digital
                  </h4>

                  <p className="text-[7px] md:text-[9px] text-slate-400 leading-relaxed">
                    Sekolah mulai beradaptasi dengan penggunaan
                    teknologi digital dalam proses pembelajaran.
                  </p>

                </div>
              </div>

              <div></div>

              {/* TITIK */}
              <div className="absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                w-3 h-3 rounded-full bg-[#12345b]
                border-[3px] border-[#d9a900]">
              </div>

            </div>


            {/* ================= 2024 ================= */}
            <div className="relative grid grid-cols-2 gap-8 mb-6">

              <div></div>

              <div className="flex justify-start">
                <div className="w-full max-w-[300px] bg-white
                  border border-slate-200 rounded-md p-4">

                  <h3 className="text-[11px] md:text-sm font-bold text-[#c99800] mb-1">
                    2024
                  </h3>

                  <h4 className="text-[9px] md:text-xs font-bold text-[#12345b] mb-3">
                    20 Tahun SMK Taruna Bhakti
                  </h4>

                  <p className="text-[7px] md:text-[9px] text-slate-400 leading-relaxed">
                    SMK Taruna Bhakti telah berkembang selama 20
                    tahun dan terus meningkatkan kualitas pendidikan,
                    fasilitas, serta kompetensi siswa.
                  </p>

                </div>
              </div>

              {/* TITIK */}
              <div className="absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                w-3 h-3 rounded-full bg-[#12345b]
                border-[3px] border-[#d9a900]">
              </div>

            </div>


            {/* ================= SEKARANG ================= */}
            <div className="relative grid grid-cols-2 gap-8">

              <div className="flex justify-end">
                <div className="w-full max-w-[300px] bg-white
                  border border-slate-200 rounded-md p-4">

                  <h3 className="text-[11px] md:text-sm font-bold text-[#c99800] mb-1">
                    Sekarang
                  </h3>

                  <h4 className="text-[9px] md:text-xs font-bold text-[#12345b] mb-3">
                    Era Digital & Smart School
                  </h4>

                  <p className="text-[7px] md:text-[9px] text-slate-400 leading-relaxed">
                    SMK Taruna Bhakti terus mengembangkan pendidikan
                    berbasis teknologi dan keterampilan yang sesuai
                    dengan kebutuhan dunia kerja dan industri.
                  </p>

                </div>
              </div>

              <div></div>

              {/* TITIK */}
              <div className="absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                w-3 h-3 rounded-full bg-[#12345b]
                border-[3px] border-[#d9a900]">
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0b2545] text-white py-9 px-5 border-t-2 border-[#d9a900]">

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
              Membangun generasi unggul yang berkarakter kuat, cerdas,
              secara akademis, dan siap bersaing dalam skala global dengan
              tetap menjunjung nilai-nilai bangsa.
            </p>

            <h5 className="font-bold mb-1 text-slate-200">
              ALAMAT UTAMA
            </h5>

            <p className="text-slate-400 leading-relaxed">
              Jalan Raya Pekapuran RT 02/07, Kelurahan
              Curug, Kecamatan Cimanggis, Kota Depok,
              Jawa Barat.
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
              Senin - Sabtu: 07:00 - 16:00
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
            © 2026 SMK TARUNA BHAKTI DEPOK. All rights reserved.
          </p>

          <p>
            Akreditasi A Unggul (98,40)
          </p>

        </div>

      </footer>

    </div>
  );
}