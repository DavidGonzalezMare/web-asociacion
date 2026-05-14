import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "auto",
        padding: "2rem",
        background: "#111827",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        {/* Marca */}
        <div>
          <h3>Asociación</h3>
          <p style={{ fontSize: "0.9rem" }}>
            Trabajamos por una comunidad más creativa e inclusiva.
          </p>
        </div>

 
        {/* Redes */}
        <div style={{ fontSize: "0.9rem" }}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Instagram
          </a>{" "}
          •{" "}
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Facebook
          </a>
        </div>
     </div>

      {/* Línea inferior */}
      <p
        style={{
          textAlign: "center",
          marginTop: "2rem",
          fontSize: "0.8rem",
          color: "#9ca3af",
        }}
      >
        © 2026 Asociación · Hecho con 💜✨
      </p>
    </footer>
  );
}