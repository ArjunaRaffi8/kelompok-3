"use client";

import Navbar from "../componen/Navbar";
import Footer from "../componen/Footer";

export default function TentangKami() {
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
            Tentang SMK Taruna Bhakti Depok
          </h1>

          <p
            style={{
              marginTop: "12px",
              color: "#ffffff",
              fontSize: "11px",
            }}
          >
            Mengenal lebih dekat visi luhur, nilai-nilai dasar, dan
            jajaran kepemimpinan kami
          </p>
        </div>
      </section>

      {/* ================= VISI & MISI ================= */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "32px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "270px 1fr",
            gap: "55px",
            alignItems: "center",
          }}
        >
          {/* VISI */}
          <div
            style={{
              backgroundColor: "#0b2948",
              border: "2px solid #d4a900",
              borderRadius: "7px",
              padding: "24px 20px",
              minHeight: "205px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                color: "#d4a900",
                fontSize: "8px",
                fontWeight: "bold",
                letterSpacing: "1.5px",
              }}
            >
              ARAH STRATEGIS
            </div>

            <h2
              style={{
                margin: "17px 0 14px",
                color: "#ffffff",
                fontFamily: "Georgia, serif",
                fontSize: "23px",
              }}
            >
              Visi Sekolah
            </h2>

            <div
              style={{
                width: "28px",
                height: "2px",
                backgroundColor: "#d4a900",
                marginBottom: "16px",
              }}
            />

            <p
              style={{
                margin: 0,
                color: "#ffffff",
                fontFamily: "Georgia, serif",
                fontSize: "11px",
                fontWeight: "bold",
                lineHeight: "1.6",
              }}
            >
              Menghasilkan lulusan yang kompeten dalam IPTEK DAN
              IMTAQ, serta mampu bersaing pada tingkat nasional
              dan global
            </p>
          </div>

          {/* MISI */}
          <div>
            <div
              style={{
                color: "#c49a16",
                fontSize: "8px",
                fontWeight: "bold",
                letterSpacing: "1.5px",
              }}
            >
              LANGKAH NYATA
            </div>

            <h2
              style={{
                margin: "15px 0 18px",
                color: "#0b2948",
                fontFamily: "Georgia, serif",
                fontSize: "23px",
              }}
            >
              Misi SMK Taruna Bhakti
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "11px",
              }}
            >
              <Misi nomor="1">
                Menumbuhkan semangat kreativitas, bersinergi dan
                kompetitif kepada seluruh warga sekolah
              </Misi>

              <Misi nomor="2">
                Melaksanakan kurikulum melalui pembelajaran dan penilaian
                berbasis kompetensi, Berbasis wirausaha, berwawasan
                lingkungan.dan berlandaskan kejujuran
              </Misi>

              <Misi nomor="3">
                Meningkatkan kualitas sumber daya manusia melalui sertifikasi
                Kompetensi Tingkat Nasional dan Internasional
              </Misi>

              <Misi nomor="4">
                Mengembangkan potensi peserta didik melalui kegiatan
                Minat dan Bakat dan pembinaan kedisiplinan
              </Misi>

              <Misi nomor="5">
                Menerapkan layanan prima dalam pengelolaan sekolah
                melalui Sistem Manajeman Mutu
              </Misi>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NILAI-NILAI LUHUR ================= */}
      <section
        style={{
          backgroundColor: "#f5f7f9",
          padding: "55px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "920px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "34px",
            }}
          >
            <div
              style={{
                color: "#c49a16",
                fontSize: "9px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              BUDAYA SEKOLAH
            </div>

            <h2
              style={{
                margin: 0,
                color: "#0b2948",
                fontFamily: "Georgia, serif",
                fontSize: "29px",
              }}
            >
              Nilai-Nilai Luhur Kami
            </h2>

            <p
              style={{
                margin: "13px 0 0",
                color: "#718096",
                fontSize: "10px",
              }}
            >
              Empat pilar utama kepribadian warga SMK Taruna Bhakti
              dalam berinteraksi sosial dan menuntut ilmu.
            </p>
          </div>

          {/* 4 CARD */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "17px",
            }}
          >
            <Nilai
              title="Integritas"
              text="Menjunjung kejujuran, moralitas akademis tinggi, tanggung jawab penuh, dan konsistensi perkataan dengan tindakan nyata."
            />

            <Nilai
              title="Inovasi"
              text="Terbuka terhadap perkembangan zaman, memicu pemikiran progresif kreatif, serta selalu mencari terobosan baru dalam belajar."
            />

            <Nilai
              title="Kolaborasi"
              text="Membangun sinergi harmonis antar siswa, guru, staff, orang tua, dan masyarakat luas guna sukses bersama."
            />

            <Nilai
              title="Keunggulan"
              text="Pantang menyerah demi mencapai level kualitas terbaik dalam seluruh proses belajar, mengajar, dan berkarya nyata.rah demi mencapai level kualitas terbaik dalam seluruh proses belajar, mengajar, dan berkarya nyata."
            />
          </div>
        </div>
      </section>

      {/* ================= GURU KEJURUAN ================= */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "20px 20px 55px",
        }}
      >
        <div
          style={{
            maxWidth: "920px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            <div
              style={{
                color: "#c49a16",
                fontSize: "7px",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              MANAJEMEN UNGGUL
            </div>

            <h2
              style={{
                margin: "10px 0",
                color: "#0b2948",
                fontFamily: "Georgia, serif",
                fontSize: "23px",
              }}
            >
              GURU KEJURUAN
            </h2>

            <p
              style={{
                color: "#718096",
                fontSize: "8px",
                margin: 0,
              }}
            >
              Pimpinan profesional berdedikasi tinggi yang mengawal
              perjalanan mutu pendidikan SMK Taruna Bhakti Depok
            </p>
          </div>

          {/* GRID GURU */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 280px)",
              gap: "18px",
              justifyContent: "center",
            }}
          >
            <Guru
              nama="Agung Setiawan, ST"
              jabatan="Kepala Program TKJ"
              foto="/image/tentang-kami/agung.jpeg"
              warna="#dce7ea"
            />

            <Guru
              nama="Sinta Nur Alifah, S.IKom"
              jabatan="Kejuruan Animasi"
              foto="/image/tentang-kami/sinta.jpeg"
              warna="#55b5f5"
            />

            <Guru
              nama="Nur Syafitri, S.IKom"
              jabatan="Kepala Program PSPT"
              foto="/image/tentang-kami/nur.jpeg"
              warna="#55b5f5"
            />

            <Guru
              nama="Miranda, S.Pd"
              jabatan="Kepala Program RPL"
              foto="/image/tentang-kami/miranda.jpeg"
              warna="#e2ddd7"
            />

            <Guru
              nama="Dharma Wahyu Nurhidayati, A.Md"
              jabatan="Kepala Program TEI"
              foto="/image/tentang-kami/dharma.jpeg"
              warna="#55b5f5"
            />

            <Guru
              nama="Yulfani Wulan Maulita, S.Ds"
              jabatan="Kepala Program DKV"
              foto="/image/tentang-kami/yulfani.jpeg"
              warna="#55b5f5"
            />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </main>
  );
}

/* ================= COMPONENT MISI ================= */

function Misi({ nomor, children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "9px",
      }}
    >
      <div
        style={{
          width: "16px",
          height: "16px",
          minWidth: "16px",
          borderRadius: "50%",
          border: "1px solid #d4a900",
          color: "#d4a900",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "7px",
          fontWeight: "bold",
        }}
      >
        {nomor}
      </div>

      <p
        style={{
          margin: 0,
          color: "#536273",
          fontSize: "8px",
          lineHeight: "1.6",
        }}
      >
        {children}
      </p>
    </div>
  );
}

/* ================= COMPONENT NILAI ================= */

function Nilai({ title, text }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #dfe5eb",
        borderRadius: "7px",
        height: "187px",
        padding: "22px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "35px",
          height: "35px",
          borderRadius: "5px",
          backgroundColor: "#092d4d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#d4a900",
          fontSize: "17px",
          fontWeight: "bold",
        }}
      >
        ♙
      </div>

      <h3
        style={{
          color: "#092d4d",
          fontFamily: "Georgia, serif",
          fontSize: "15px",
          margin: "13px 0 12px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: 0,
          color: "#718096",
          fontSize: "9px",
          lineHeight: "1.55",
        }}
      >
        {text}
      </p>
    </div>
  );
}

/* ================= COMPONENT GURU ================= */

function Guru({ nama, jabatan, foto, warna }) {
  return (
    <div
      style={{
        width: "280px",
        border: "1px solid #dfe5eb",
        borderRadius: "9px",
        overflow: "hidden",
        backgroundColor: "#d9d9d9",
      }}
    >
      {/* FOTO */}
      <div
        style={{
          width: "100%",
          backgroundColor: warna,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <img
          src={foto}
          alt={nama}
          style={{
            width: "75%",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* INFORMASI */}
      <div
        style={{
          padding: "10px",
          minHeight: "105px",
          boxSizing: "border-box",
          backgroundColor: "#d9d9d9",
        }}
      >
        <span
          style={{
            color: "#c49a16",
            fontSize: "7px",
            fontWeight: "bold",
          }}
        >
          {jabatan}
        </span>

        <h3
          style={{
            color: "#092d4d",
            fontFamily: "Georgia, serif",
            fontSize: "12px",
            margin: "5px 0",
          }}
        >
          {nama}
        </h3>

        <p
          style={{
            color: "#718096",
            fontSize: "7px",
            lineHeight: "1.5",
            margin: 0,
          }}
        >
          {nama} tercatat mengajar di SMK Taruna Bhakti (TB) Depok.
          Berdedikasi dalam memberikan pembelajaran dan membimbing peserta
          didik sesuai dengan bidang keahliannya.
        </p>
      </div>
    </div>
  );
}