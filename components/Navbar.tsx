"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const getStyle = (path: string) => ({
    color: pathname === path ? "#facc15" : "white",
    textDecoration: "none",
    fontWeight: pathname === path ? "700" : "500",
    cursor: "pointer",
    transition: "all 0.2s ease",

    borderBottom:
      pathname === path ? "2px solid #facc15" : "2px solid transparent",
    paddingBottom: "4px",
  });

  return (
    <nav
      style={{
        padding: "1rem 2rem",
        background: "#1f2937",
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
      }}
    >
      <Link
        href="/"
        style={getStyle("/")}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      >
        Home
      </Link>

      <Link
        href="/quienes-somos"
        style={getStyle("/quienes-somos")}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      >
        Quiénes somos
      </Link>

      <Link
        href="/proyectos"
        style={getStyle("/proyectos")}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      >
        Proyectos
      </Link>

      <Link
        href="/galeria"
        style={getStyle("/galeria")}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      >
        Galería
      </Link>

      <Link
        href="/contacto"
        style={getStyle("/contacto")}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      >
        Contacto
      </Link>
    </nav>
  );
}
