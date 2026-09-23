"use client";

import Navbar from "../componen/Navbar";
import Footer from "../componen/Footer";

export default function Ekstrakurikuler() {
  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Navbar />

      {/* ================= HERO ================= */}
      <section
        style={{
          height: "250px",
          position: "relative",
          backgroundImage: 'url("/image/homepage/gedung.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(5, 35, 59, 0.72)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "0 20px",
          }}
        >
          <h1
            style={{
              margin: 0,
              color: "#d4a900",
              fontFamily: "Georgia, serif",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Ekstrakurikuler SMK Taruna Bhakti Depok
          </h1>

          <p
            style={{
              marginTop: "12px",
              color: "#ffffff",
              fontSize: "11px",
            }}
          >
            Berbagai kegiatan untuk mengembangkan minat, bakat,
            kreativitas, dan potensi peserta didik.
          </p>
        </div>
      </section>

      {/* ================= EKSTRAKURIKULER ================= */}
      <section
        style={{
          backgroundColor: "#f5f7f9",
          padding: "50px 20px 60px",
        }}
      >
        <div
          style={{
            maxWidth: "920px",
            margin: "0 auto",
          }}
        >
          {/* JUDUL */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "35px",
            }}
          >
            <div
              style={{
                color: "#c49a16",
                fontSize: "8px",
                fontWeight: "bold",
                letterSpacing: "1.5px",
                marginBottom: "10px",
              }}
            >
              KEGIATAN SISWA
            </div>

            <h2
              style={{
                margin: 0,
                color: "#0b2948",
                fontFamily: "Georgia, serif",
                fontSize: "27px",
              }}
            >
              Ekstrakurikuler
            </h2>

            <p
              style={{
                margin: "12px auto 0",
                color: "#718096",
                fontSize: "9px",
                maxWidth: "600px",
                lineHeight: "1.6",
              }}
            >
              Sekilas gambaran kegiatan siswa dalam mengembangkan
              minat, bakat, kreativitas, dan kebersamaan di SMK
              Taruna Bhakti Depok.
            </p>
          </div>

          {/* ================= GRID ================= */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "25px",
            }}
          >
            <Ekstra
              nama="Padus"
              foto="/image/ekstrakulikuler/padus.jpeg"
              deskripsi="Harmoni, satu kekeluargaan! Di balik suara yang selaras, ada latihan keras, canda tawa, dan kekompakan yang selalu bikin betah di setiap prosesnya."
            />

            <Ekstra
              nama="Bulutangkis"
              foto="/image/ekstrakulikuler/bulutangkis.jpeg"
              deskripsi="Mengawali latihan dengan doa dan semangat penuh untuk hasil terbaik. Menjaga fokus, mengasah teknik, dan membangun stamina demi memberikan performa maksimal."
            />

            <Ekstra
              nama="Rohis"
              foto="/image/ekstrakulikuler/rohis.jpeg"
              deskripsi="Kumpul lagi, latihan lagi! Setiap latihan Rohis makin seru karena mempersiapkan tim marawis dan hadroh."
            />

            <Ekstra
              nama="Futsal"
              foto="/image/ekstrakulikuler/futsal.jpeg"
              deskripsi="Latihan dribbling, operan pendek, taktik bermain, dan fisik dilakukan untuk membangun performa tim yang semakin solid."
            />

            <Ekstra
              nama="Pencak Silat"
              foto="/image/ekstrakulikuler/pencaksilat.jpeg"
              deskripsi="Pencak Silat telah mengikuti pertandingan PSHT CUP Ke-9."
            />

            <Ekstra
              nama="Paskibra"
              foto="/image/ekstrakulikuler/paskibra.jpeg"
              deskripsi="Kegiatan Paskibra dalam melaksanakan upacara bendera Merah Putih pada tanggal 17 Agustus."
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ================= COMPONENT EKSTRA ================= */

function Ekstra({ nama, foto, deskripsi }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #dfe5eb",
        borderRadius: "9px",
        overflow: "hidden",
      }}
    >
      <img
        src={foto}
        alt={nama}
        style={{
          width: "100%",
          height: "190px",
          objectFit: "cover",
          display: "block",
        }}
      />

      <div
        style={{
          padding: "17px 18px",
        }}
      >
        <div
          style={{
            color: "#c49a16",
            fontSize: "7px",
            fontWeight: "bold",
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "7px",
          }}
        >
          EKSTRAKURIKULER
        </div>

        <h3
          style={{
            color: "#092d4d",
            fontFamily: "Georgia, serif",
            fontSize: "15px",
            margin: "0 0 9px",
          }}
        >
          {nama}
        </h3>

        <p
          style={{
            color: "#718096",
            fontSize: "8px",
            lineHeight: "1.6",
            margin: 0,
          }}
        >
          {deskripsi}
        </p>
      </div>
    </div>
  );
}