"use client";

import { useState } from "react";

export default function Galeria() {
  const imagenes = ["bolso1.jpg", "bolso2.jpg", "bolso3.jpg", "bolso4.jpg"];

  const [imagenSeleccionada, setImagenSeleccionada] = useState<string | null>(
    null,
  );

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "1100px",
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {" "}
      <h1>Galería</h1>
      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          marginTop: "1rem",
        }}
      >
        {imagenes.map((img, index) => (
          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "0.5rem",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              textAlign: "center",
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-4px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <img
              src={`/galeria/${img}`}
              alt={`Producto ${index + 1}`}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              onClick={() => setImagenSeleccionada(img)}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />

            <p
              style={{
                marginTop: "0.5rem",
                fontSize: "0.9rem",
                fontWeight: "500",
              }}
            >
              Producto {index + 1}
            </p>
          </div>
        ))}
      </div>
      {/* MODAL */}
      {imagenSeleccionada && (
        <div
          onClick={() => setImagenSeleccionada(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={`/galeria/${imagenSeleccionada}`}
            alt="Imagen ampliada"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
            }}
          />
        </div>
      )}
    </div>
  );
}
