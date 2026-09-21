import Link from "next/link";

export default function Ekstrakurikuler() {
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
              className="text-slate-500 hover:text-[#12345b] transition"
            >
              Sejarah
            </Link>

            <Link
              href="/ekstrakurikuler"
              className="relative text-[#12345b] font-semibold py-2
              after:absolute after:left-0 after:right-0 after:-bottom-[4px]
              after:h-[2px] after:bg-[#d9a900]"
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

        <div className="absolute inset-0">
          <img
            src="/image/homepage/gedung.jpeg"
            alt="Gedung SMK Taruna Bhakti Depok"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[#0b2545]/75"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">

          <h1 className="text-2xl md:text-4xl font-bold text-[#d9a900] mb-3">
            Ekstrakurikuler SMK Taruna Bhakti Depok
          </h1>

          <p className="text-[8px] md:text-[11px] text-slate-200">
            Jejak sejarah panjang penuh prestasi, pengabdian tiada henti, dan dedikasi
            mendidik bangsa sejak tahun 1965
          </p>

        </div>
      </section>


      {/* ================= EKSTRAKURIKULER ================= */}
      <section className="bg-slate-50 py-12 md:py-16 px-5">

        <div className="max-w-6xl mx-auto">

          {/* JUDUL */}
          <div className="text-center mb-12">

            <span className="text-[7px] md:text-[9px]
              font-bold tracking-widest uppercase
              text-[#d19a00] block mb-2">
              DOKUMENTASI VISUAL
            </span>

            <h2 className="text-xl md:text-3xl
              font-bold text-[#12345b]">
              Potret Ekstrakurikuler Smk Taruna Bhakti
            </h2>

            <p className="text-[8px] md:text-[11px]
              text-slate-400 mt-2 max-w-2xl mx-auto">
              Sekilas gambaran kehidupan belajar, eksplorasi minat bakat,
              kreativitas seni, serta tradisi luhur yang dirayakan bersama.
            </p>

          </div>


          {/* ================= GRID ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


            {/* ================= PADUS ================= */}
            <div className="bg-white rounded-xl overflow-hidden">

              <div className="relative h-[190px] md:h-[190px] overflow-hidden">

                <img
                  src="/image/homepage/padus.jpeg"
                  alt="padus"
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="px-4 py-3">

                <h3 className="text-[10px] md:text-xs
                  font-semibold text-[#12345b] mb-2">
                  padus
                </h3>

                <p className="text-[7px] md:text-[9px]
                  text-slate-500 leading-relaxed">
                  Harmoni, satu kekeluargaan! 🎶 Di balik suara yang
                  selaras, ada latihan keras, canda tawa, dan kekompakan
                  yang selalu bikin betah di setiap prosesnya.
                </p>

              </div>

            </div>


            {/* ================= BULUTANGKIS ================= */}
            <div className="bg-white rounded-xl overflow-hidden">

              <div className="relative h-[190px] md:h-[190px] overflow-hidden">

                <img
                  src="/image/homepage/bulutangkis.jpeg"
                  alt="bulutangkis"
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="px-4 py-3">

                <h3 className="text-[10px] md:text-xs
                  font-semibold text-[#12345b] mb-2">
                  bulutangkis
                </h3>

                <p className="text-[7px] md:text-[9px]
                  text-slate-500 leading-relaxed">
                  Mengawali latihan dengan doa dan semangat penuh untuk
                  hasil terbaik! 🏸 Menjaga fokus, mengasah teknik, dan
                  membangun stamina demi memberikan performa maksimal di
                  setiap pertandingan ke depan.
                </p>

              </div>

            </div>


            {/* ================= ROHIS ================= */}
            <div className="bg-white rounded-xl overflow-hidden">

              <div className="relative h-[190px] md:h-[190px] overflow-hidden">

                <img
                  src="/image/homepage/rohis.jpeg"
                  alt="rohis"
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="px-4 py-3">

                <h3 className="text-[10px] md:text-xs
                  font-semibold text-[#12345b] mb-2">
                  rohis
                </h3>

                <p className="text-[7px] md:text-[9px]
                  text-slate-500 leading-relaxed">
                  Kumpul lagi, latihan lagi! 🎶 Setiap latihan Rohis kali
                  ini makin seru karena kita lagi nyiapin tim marawis/hadroh nih.
                </p>

              </div>

            </div>


            {/* ================= FUTSAL ================= */}
            <div className="bg-white rounded-xl overflow-hidden">

              <div className="relative h-[190px] md:h-[190px] overflow-hidden">

                <img
                  src="/image/homepage/futsal.jpeg"
                  alt="futsal"
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="px-4 py-3">

                <h3 className="text-[10px] md:text-xs
                  font-semibold text-[#12345b] mb-2">
                  futsal
                </h3>

                <p className="text-[7px] md:text-[9px]
                  text-slate-500 leading-relaxed">
                  Balik lagi ke lapangan buat asah taktik dan fisik! ⚽
                  Mulai dari latihan dribbling, operan pendek, sampai
                  taktik bermain, semuanya dilatih habis demi performa
                  tim yang makin solid.
                </p>

              </div>

            </div>


            {/* ================= PENCAK SILAT ================= */}
            <div className="bg-white rounded-xl overflow-hidden">

              <div className="relative h-[190px] md:h-[190px] overflow-hidden">

                <img
                  src="/image/homepage/pencaksilat.jpeg"
                  alt="pencak silat"
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="px-4 py-3">

                <h3 className="text-[10px] md:text-xs
                  font-semibold text-[#12345b] mb-2">
                  pencak silat
                </h3>

                <p className="text-[7px] md:text-[9px]
                  text-slate-500 leading-relaxed">
                  pencak Silat telah mengikuti pertandingan PSHT CUP Ke-9.
                </p>

              </div>

            </div>


            {/* ================= PASKIBRA ================= */}
            <div className="bg-white rounded-xl overflow-hidden">

              <div className="relative h-[190px] md:h-[190px] overflow-hidden">

                <img
                  src="/image/homepage/paskibra.jpeg"
                  alt="paskibra"
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="px-4 py-3">

                <h3 className="text-[10px] md:text-xs
                  font-semibold text-[#12345b] mb-2">
                  paskibra
                </h3>

                <p className="text-[7px] md:text-[9px]
                  text-slate-500 leading-relaxed">
                  sedang melaksanakan upacara bendera merah putih pada
                  tanggal 17 agustus
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0b2545] text-white
        py-9 px-5 border-t-2 border-[#d9a900]">

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
              tetap menjunjung nilai-nilai luhur bangsa.
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