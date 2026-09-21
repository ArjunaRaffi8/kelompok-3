"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-[#0b2545] text-white
      py-9 px-5 border-t-2 border-[#d9a900]"
    >

      <div
        className="max-w-6xl mx-auto
        grid grid-cols-2 md:grid-cols-4 gap-6
        text-[7px] md:text-[10px]"
      >

        {/* ================= KOLOM 1 ================= */}
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

          <h5 className="font-bold mb-1 text-amber-400">
            ALAMAT UTAMA
          </h5>

          <p className="text-slate-400 leading-relaxed">
            Jalan Raya Pekapuran, RT 02/RW 07, Kelurahan
            Curug, Kecamatan Cimanggis, Kota Depok,
            Jawa Barat
          </p>

        </div>


        {/* ================= KOLOM 2 ================= */}
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
                href="/ekstrakulikuler"
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


        {/* ================= KOLOM 3 ================= */}
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

          <p className="text-white font-bold">
            (021) 555-1234
          </p>

        </div>


        {/* ================= KOLOM 4 ================= */}
        <div>

          <h5 className="font-bold text-amber-400 mb-3">
            HUBUNGI KAMI
          </h5>

          <p className="text-slate-300 mb-3">
            info@smktarunabhakti.sch.id
          </p>

          <div className="flex gap-2">

            <span
              className="w-6 h-6 rounded-full
              bg-slate-800
              flex items-center justify-center
              text-slate-300
              hover:bg-amber-400
              hover:text-[#0b2545]
              cursor-pointer transition"
            >
              ◎
            </span>

            <span
              className="w-6 h-6 rounded-full
              bg-slate-800
              flex items-center justify-center
              text-slate-300
              hover:bg-amber-400
              hover:text-[#0b2545]
              cursor-pointer transition"
            >
              ▶
            </span>

            <span
              className="w-6 h-6 rounded-full
              bg-slate-800
              flex items-center justify-center
              text-slate-300
              hover:bg-amber-400
              hover:text-[#0b2545]
              cursor-pointer transition"
            >
              f
            </span>

            <span
              className="w-6 h-6 rounded-full
              bg-slate-800
              flex items-center justify-center
              text-slate-300
              hover:bg-amber-400
              hover:text-[#0b2545]
              cursor-pointer transition"
            >
              𝕏
            </span>

          </div>

        </div>

      </div>


      {/* ================= COPYRIGHT ================= */}
      <div
        className="max-w-6xl mx-auto mt-7 pt-4
        border-t border-slate-800
        flex flex-col md:flex-row
        justify-between items-center
        gap-2 text-[6px] md:text-[8px]
        text-slate-500"
      >

        <p>
          © 2026 SMK TARUNA BHAKTI DEPOK. All rights reserved.
        </p>

        <p>
          Akreditasi A Unggul (98.4)
        </p>

      </div>

    </footer>
  );
}