"use client";

import Navbar from "../componen/Navbar";
import Footer from "../componen/Footer";

export default function Kontak() {

const handleSubmit = (e) => {
  e.preventDefault();

  const form = new FormData(e.target);

  const dataPesan = {
    nama: form.get("nama"),
    email: form.get("email"),
    subjek: form.get("subjek"),
    pesan: form.get("pesan"),
    tanggal: new Date().toLocaleString("id-ID"),
  };

  const pesanLama = JSON.parse(
    localStorage.getItem("pesanKontak") || "[]"
  );

  pesanLama.push(dataPesan);

  localStorage.setItem(
    "pesanKontak",
    JSON.stringify(pesanLama)
  );

  alert("Pesan berhasil disimpan!");

  e.target.reset();
};

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">

      {/* ================= NAVBAR ================= */}
      <Navbar />


      {/* ================= HERO ================= */}
      <section className="relative w-full h-[190px] md:h-[280px] overflow-hidden bg-slate-900">

        <div className="absolute inset-0">
          <img
            src="/image/homepage/gedung.jpeg"
            alt="Gedung SMK Taruna Bhakti"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-slate-900/65"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">

          <h1 className="text-3xl md:text-5xl font-bold text-[#d9a900] mb-4">
            Hubungi Kami
          </h1>

          <p className="text-[9px] md:text-sm text-slate-200">
            Ajukan pertanyaan, jadwalkan kunjungan kampus, atau jalin kolaborasi bersama SMK Taruna Bhakti
          </p>

        </div>
      </section>


      {/* ================= KONTAK ================= */}
      <section className="bg-slate-50 py-12 md:py-14 px-5">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ================= INFORMASI KONTAK ================= */}
          <div>

            <span
              className="text-[7px] md:text-[9px]
              font-bold tracking-widest uppercase
              text-amber-600 block mb-2"
            >
              LOKASI & KONTAK
            </span>

            <h2
              className="text-2xl md:text-3xl
              font-bold text-[#12345b] mb-3"
            >
              Terhubung dengan TB
            </h2>

            <p
              className="text-[8px] md:text-xs
              text-slate-500 leading-relaxed mb-6 max-w-md"
            >
              Kami siap melayani kebutuhan informasi akademis Anda dengan ramah
              dan transparan. Silakan hubungi kami melalui saluran berikut.
            </p>


            {/* ================= ALAMAT ================= */}
            <div
              className="bg-white border border-slate-200
              rounded-lg p-4 mb-3 flex items-center gap-4"
            >

              <div
                className="w-8 h-8 rounded-full bg-amber-50
                flex items-center justify-center text-amber-600"
              >
                📍
              </div>

              <div>

                <p
                  className="text-[6px] md:text-[8px]
                  font-bold text-amber-600 mb-1"
                >
                  ALAMAT SEKOLAH
                </p>

                <p className="text-[8px] md:text-[10px] text-slate-700">
                  Jalan Raya Pekapuran, RT 02/RW 07, Kelurahan Curug,
                  Kecamatan Cimanggis, Kota Depok, Jawa Barat
                </p>

              </div>

            </div>


            {/* ================= TELEPON ================= */}
            <div
              className="bg-white border border-slate-200
              rounded-lg p-4 mb-3 flex items-center gap-4"
            >

              <div
                className="w-8 h-8 rounded-full bg-amber-50
                flex items-center justify-center text-amber-600"
              >
                📞
              </div>

              <div>

                <p
                  className="text-[6px] md:text-[8px]
                  font-bold text-amber-600 mb-1"
                >
                  SALURAN TELEPON
                </p>

                <p className="text-[8px] md:text-[10px] text-slate-700">
                  (021) 555-1234 / (021) 555-5678
                </p>

              </div>

            </div>


            {/* ================= EMAIL ================= */}
            <div
              className="bg-white border border-slate-200
              rounded-lg p-4 mb-3 flex items-center gap-4"
            >

              <div
                className="w-8 h-8 rounded-full bg-amber-50
                flex items-center justify-center text-amber-600"
              >
                ✉️
              </div>

              <div>

                <p
                  className="text-[6px] md:text-[8px]
                  font-bold text-amber-600 mb-1"
                >
                  EMAIL RESMI
                </p>

                <p className="text-[8px] md:text-[10px] text-slate-700">
                  info@sman1nusantara.sch.id
                </p>

              </div>

            </div>


            {/* ================= JAM OPERASIONAL ================= */}
            <div
              className="bg-white border border-slate-200
              rounded-lg p-4 flex items-center gap-4"
            >

              <div
                className="w-8 h-8 rounded-full bg-amber-50
                flex items-center justify-center text-amber-600"
              >
                🕐
              </div>

              <div>

                <p
                  className="text-[6px] md:text-[8px]
                  font-bold text-amber-600 mb-1"
                >
                  JAM OPERASIONAL
                </p>

                <p className="text-[8px] md:text-[10px] text-slate-700">
                  Senin - Jumat, 07:00 - 16:00 WIB
                </p>

              </div>

            </div>

          </div>


          {/* ================= FORM ================= */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-slate-200
            rounded-xl p-6 md:p-8 shadow-sm"
          >

            <h2
              className="text-xl md:text-2xl
              font-bold text-[#12345b] mb-2"
            >
              Kirim Pesan Langsung
            </h2>

            <p
              className="text-[8px] md:text-[10px]
              text-slate-500 leading-relaxed mb-5"
            >
              Gunakan formulir di bawah untuk menyampaikan aspirasi atau pertanyaan
              Anda kepada pihak sekolah.
            </p>


            {/* ================= NAMA ================= */}
            <div className="mb-4">

              <label
                className="block text-[7px] md:text-[9px]
                font-bold text-slate-700 mb-2"
              >
                Nama Lengkap *
              </label>

              <input
                type="text"
                name="nama"
                placeholder="Contoh: Budi Gunawan"
                required
                className="w-full h-[36px] md:h-[40px]
                rounded border border-slate-200
                bg-slate-50 px-3
                text-[8px] md:text-[10px]
                outline-none focus:border-amber-500"
              />

            </div>


            {/* ================= EMAIL ================= */}
            <div className="mb-4">

              <label
                className="block text-[7px] md:text-[9px]
                font-bold text-slate-700 mb-2"
              >
                Alamat Email *
              </label>

              <input
                type="email"
                name="email"
                placeholder="Contoh: budi@email.com"
                required
                className="w-full h-[36px] md:h-[40px]
                rounded border border-slate-200
                bg-slate-50 px-3
                text-[8px] md:text-[10px]
                outline-none focus:border-amber-500"
              />

            </div>


            {/* ================= SUBJEK ================= */}
            <div className="mb-4">

              <label
                className="block text-[7px] md:text-[9px]
                font-bold text-slate-700 mb-2"
              >
                Subjek Pesan *
              </label>

              <input
                type="text"
                name="subjek"
                placeholder="Contoh: Pertanyaan PPDB 2026"
                required
                className="w-full h-[36px] md:h-[40px]
                rounded border border-slate-200
                bg-slate-50 px-3
                text-[8px] md:text-[10px]
                outline-none focus:border-amber-500"
              />

            </div>


            {/* ================= PESAN ================= */}
            <div className="mb-5">

              <label
                className="block text-[7px] md:text-[9px]
                font-bold text-slate-700 mb-2"
              >
                Pesan Anda *
              </label>

              <textarea
                name="pesan"
                placeholder="Ketikkan detail pertanyaan atau masukan Anda di sini..."
                required
                className="w-full h-[75px] md:h-[90px]
                rounded border border-slate-200
                bg-slate-50 px-3 py-3
                text-[8px] md:text-[10px]
                resize-none outline-none
                focus:border-amber-500"
              ></textarea>

            </div>


            {/* ================= BUTTON ================= */}
            <button
              type="submit"
              className="w-full h-[36px] md:h-[40px]
              rounded bg-[#0b2545]
              border border-amber-500
              text-white text-[8px] md:text-[10px]
              font-bold hover:bg-[#12345b]
              transition"
            >
              KIRIM PESAN
            </button>

          </form>

        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
}