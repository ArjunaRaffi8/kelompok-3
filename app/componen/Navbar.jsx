"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const menuStyle = {
    textDecoration: "none",
    color: "#536273",
    fontSize: "14px",
    padding: "34px 0 27px",
    position: "relative",
    fontWeight: "500",
  };

  const activeStyle = {
    ...menuStyle,
    color: "#092d4d",
  };

  const garisAktif = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: "#d4a900",
  };

  return (
    <header
      style={{
        width: "100%",
        height: "88px",
        background: "#ffffff",
        borderBottom: "3px solid #d9d9d9",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          height: "100%",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO DAN NAMA SEKOLAH */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <Image
            src="/image/homepage/logo.jpeg"
            alt="SMK Taruna Bhakti Depok"
            width={65}
            height={65}
            style={{
              objectFit: "contain",
            }}
          />

          <div>
            <h2
              style={{
                margin: 0,
                color: "#092d4d",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              SMK TARUNA BHAKTI DEPOK
            </h2>

            <span
              style={{
                display: "block",
                marginTop: "2px",
                color: "#c59d18",
                fontSize: "9px",
                letterSpacing: "0.8px",
              }}
            >
              UNGGUL & BERKARAKTER
            </span>
          </div>
        </Link>

        {/* MENU */}
        <nav
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
        >
          <Link
            href="/"
            style={pathname === "/" ? activeStyle : menuStyle}
          >
            Beranda
            {pathname === "/" && <span style={garisAktif} />}
          </Link>

          <Link
            href="/tentang-kami"
            style={
              pathname === "/tentang-kami"
                ? activeStyle
                : menuStyle
            }
          >
            Tentang
            {pathname === "/tentang-kami" && (
              <span style={garisAktif} />
            )}
          </Link>

          <Link
            href="/sejarah"
            style={
              pathname === "/sejarah"
                ? activeStyle
                : menuStyle
            }
          >
            Sejarah
            {pathname === "/sejarah" && (
              <span style={garisAktif} />
            )}
          </Link>

          <Link
            href="/ekstrakulikuler"
            style={
              pathname === "/ekstrakulikuler"
                ? activeStyle
                : menuStyle
            }
          >
            Ekstrakurikuler
            {pathname === "/ekstrakulikuler" && (
              <span style={garisAktif} />
            )}
          </Link>

          <Link
            href="/kontak"
            style={
              pathname === "/kontak"
                ? activeStyle
                : menuStyle
            }
          >
            Kontak
            {pathname === "/kontak" && (
              <span style={garisAktif} />
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}