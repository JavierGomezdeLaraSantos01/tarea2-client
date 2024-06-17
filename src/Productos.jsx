// Productos.jsx

import React, { useState, useEffect } from "react";
import "./style.css"; 

function Productos() {
  const [productos, setProductos] = useState([]);
  const VITE_USERS = import.meta.env.VITE_USERS;

  useEffect(() => {
    const controller = new AbortController();
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      signal: controller.signal
    };

    fetch(VITE_USERS, options)
      .then(res => {return res.json();
      })
      .then(data => setProductos(data))
      .catch(err => console.error("Error al hacer la petición:", err))
      .finally(() => controller.abort());
  }, [VITE_USERS]);

  return (
    <div>
      {productos.map(producto => (
        <div key={producto.id}>
          {producto.id === 7 && (
            <div className="contenedor__imagenes">
              <img src="simbolomovil1.png" className="simbolomovil" alt="boton apple store" />
              <img src="movil1.png" className="movil1" alt="Imagen 2" />
              <img src="botonapplestore.png" className="botonapple" alt="Imagen 3" />
              <div className="contenedor__texto">
                <h2>Triage is first aid for your inbox. Everything you loved about the original Triage is back – only better. Download Triage 2 on the App Store today</h2>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Productos;
