"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#092d4d",
        color: "#ffffff",
        marginTop: 0,
      }}
    >
      {/* ================= FOOTER CONTENT ================= */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "45px 40px 35px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "50px",
          boxSizing: "border-box",
        }}
      >
        {/* BRAND */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "15px",
            }}
          >
            <Image
              src="/image/homepage/logo.jpeg"
              alt="SMK Taruna Bhakti"
              width={50}
              height={50}
              style={{
                objectFit: "contain",
              }}
            />

            <h2
              style={{
                margin: 0,
                fontFamily: "Georgia, serif",
                fontSize: "18px",
                color: "#ffffff",
              }}
            >
              SMK TARUNA BHAKTI
            </h2>
          </div>

          <p
            style={{
              margin: "0 0 22px",
              color: "#cbd5df",
              fontSize: "11px",
              lineHeight: "1.7",
            }}
          >
            Membangun generasi unggul yang berkarakter kuat,
            cerdas secara akademis, dan siap bersaing dalam
            skala global dengan tetap menjunjung nilai luhur bangsa.
          </p>

          <h4
            style={{
              margin: "0 0 8px",
              color: "#d4a900",
              fontSize: "10px",
              letterSpacing: "1px",
            }}
          >
            ALAMAT UTAMA
          </h4>

          <p
            style={{
              margin: 0,
              color: "#cbd5df",
              fontSize: "10px",
              lineHeight: "1.6",
            }}
          >
            Jalan Raya Pekapuran, RT 02/RW 07, Kelurahan Curug,
            Kecamatan Cimanggis, Kota Depok, Jawa Barat
          </p>
        </div>

        {/* TAUTAN CEPAT */}
        <div>
          <h4
            style={{
              margin: "0 0 18px",
              color: "#d4a900",
              fontSize: "10px",
              letterSpacing: "1px",
            }}
          >
            TAUTAN CEPAT
          </h4>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "11px",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#cbd5df",
                textDecoration: "none",
                fontSize: "10px",
              }}
            >
              Beranda
            </Link>

            <Link
              href="/tentang-kami"
              style={{
                color: "#cbd5df",
                textDecoration: "none",
                fontSize: "10px",
              }}
            >
              Tentang
            </Link>

            <Link
              href="/sejarah"
              style={{
                color: "#cbd5df",
                textDecoration: "none",
                fontSize: "10px",
              }}
            >
              Sejarah
            </Link>

            <Link
              href="/ekstrakulikuler"
              style={{
                color: "#cbd5df",
                textDecoration: "none",
                fontSize: "10px",
              }}
            >
              Ekstrakurikuler
            </Link>

            <Link
              href="/kontak"
              style={{
                color: "#cbd5df",
                textDecoration: "none",
                fontSize: "10px",
              }}
            >
              Kontak
            </Link>
          </div>
        </div>

        {/* JAM OPERASIONAL */}
        <div>
          <h4
            style={{
              margin: "0 0 18px",
              color: "#d4a900",
              fontSize: "10px",
              letterSpacing: "1px",
            }}
          >
            JAM OPERASIONAL
          </h4>

          <p
            style={{
              margin: "0 0 10px",
              color: "#cbd5df",
              fontSize: "10px",
            }}
          >
            Senin - Sabtu: 07:00 - 16:00
          </p>

          <p
            style={{
              margin: "0 0 22px",
              color: "#cbd5df",
              fontSize: "10px",
            }}
          >
            Minggu: Tutup
          </p>

          <h4
            style={{
              margin: "0 0 8px",
              color: "#d4a900",
              fontSize: "10px",
              letterSpacing: "1px",
            }}
          >
            LAYANAN TELEPON
          </h4>

          <strong
            style={{
              color: "#ffffff",
              fontSize: "12px",
            }}
          >
            (021) 555-1234
          </strong>
        </div>

        {/* HUBUNGI KAMI */}
        <div>
          <h4
            style={{
              margin: "0 0 18px",
              color: "#d4a900",
              fontSize: "10px",
              letterSpacing: "1px",
            }}
          >
            HUBUNGI KAMI
          </h4>

          <p
            style={{
              margin: "0 0 20px",
              color: "#cbd5df",
              fontSize: "10px",
            }}
          >
            info@SMKTARUNABHAKTI.sch.id
          </p>

          <div
            style={{
              display: "flex",
              gap: "9px",
            }}
          >
            <span
              style={{
                width: "28px",
                height: "28px",
                border: "1px solid #718096",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4a900",
                fontSize: "12px",
              }}
            >
              ◎
            </span>

            <span
              style={{
                width: "28px",
                height: "28px",
                border: "1px solid #718096",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4a900",
                fontSize: "11px",
              }}
            >
              ▶
            </span>

            <span
              style={{
                width: "28px",
                height: "28px",
                border: "1px solid #718096",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4a900",
                fontSize: "12px",
              }}
            >
              f
            </span>

            <span
              style={{
                width: "28px",
                height: "28px",
                border: "1px solid #718096",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4a900",
                fontSize: "11px",
              }}
            >
              𝕏
            </span>
          </div>
        </div>
      </div>

      {/* ================= FOOTER BOTTOM ================= */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.15)",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#9eafbd",
          fontSize: "9px",
          boxSizing: "border-box",
        }}
      >
        <span>
          © 2026 SMK TARUNA BHAKTI DEPOK. All rights reserved.
        </span>

        <span>
          Akreditasi A Unggul (98.4)
        </span>
      </div>
    </footer>
  );
}