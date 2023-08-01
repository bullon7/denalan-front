import React from "react";
import { Link } from "react-router-dom";
import casaTintaRoja from "../data/Depto--136.jpg";
import departamentoDenalan from "../data/Depto--168.jpg";
import cabañaDenalan from "../data/Depto--160.jpg";
import "../styles/components/mainHead.css";

export const MainHead = () => {
  return (
    <div style={{backgroundColor: '#A88659'}}>
      <h1 className="titulo">DENALAN</h1>
      <h2 className="subtitulo">Alquileres</h2>
      <div className="container-main">
        <img src={casaTintaRoja} alt="" className="diseño-img primer-imagen" />
        <img src={departamentoDenalan} alt="" className="diseño-img z" />
        <img src={cabañaDenalan} alt="" className="diseño-img z" />
      </div>
      <div>
        <h4>Consultas al whatsapp</h4>
      </div>
      <div className="redes-sociales">
        <Link></Link>
        <Link></Link>
      </div>
    </div>
  );
};
