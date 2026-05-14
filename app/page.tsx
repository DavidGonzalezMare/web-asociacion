"use client";

import Link from "next/link";

export default function Home() {
  const buttonStyle = {
    background: "#1f2937",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "500",
    display: "inline-block",
    marginTop: "0.5rem",
    transition: "all 0.2s ease",
  };

  const handleHover = (e: any) => {
    e.currentTarget.style.background = "#374151";
  };

  const handleOut = (e: any) => {
    e.currentTarget.style.background = "#1f2937";
  };

  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      
      {/* Título principal */}
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", fontWeight: "700" }}>
        Asociación
      </h1>

      {/* Introducción */}
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        Somos una asociación sin ánimo de lucro comprometida con la creación de
        productos artesanales y el desarrollo de proyectos para nuestra comunidad.
      </p>

      {/* Sección proyectos */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
          Proyectos
        </h2>
        <p>
          Trabajamos en distintas iniciativas que fomentan la creatividad, la
          inclusión y el apoyo a colectivos locales.
        </p>

        <Link
          href="/proyectos"
          style={buttonStyle}
          onMouseOver={handleHover}
          onMouseOut={handleOut}
        >
          Ver proyectos →
        </Link>
      </section>

      {/* Sección galería */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
          Productos
        </h2>
        <p>
          Descubre algunos de los productos que elaboramos y que forman parte de
          nuestras actividades.
        </p>

        <Link
          href="/galeria"
          style={buttonStyle}
          onMouseOver={handleHover}
          onMouseOut={handleOut}
        >
          Ver galería →
        </Link>
      </section>

      {/* Cierre */}
      <section>
        <h2 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
          Colabora con nosotros
        </h2>
        <p>
          Si quieres colaborar o saber más sobre nuestras actividades, no dudes
          en contactar con nosotros.
        </p>
      </section>

    </main>
  );
}