import React from "react";
import { Link } from "react-router-dom";
import casaTintaRoja from "../data/Depto--136.jpg";
import departamentoDenalan from "../data/Depto--168.jpg";
import cabañaDenalan from "../data/Depto--160.jpg";
import logo from "../data/Logo,sin,fondiu.png";
import whatsapp from "../data/whatsapp.svg";
import facebook from "../data/Facebook.svg";
import instagram from "../data/Instagram.svg";
import imagenMar from "../data/mar-Villa-Gesell.jpg";
import "../styles/components/mainHead.css";

export const MainHead = () => {
  return (
    <div className="head">
      <div className="main">
        <Link to="/" className="">
          <img src={logo} mt-xl-2 mt-3 mb-xl-3 className="logo" alt="logo" />
        </Link>
        <h2 className="main-h2">Villa Gesell</h2>
        <img src={imagenMar} alt="" className="diseño-img-final" />
      </div>
      <div className="container-main">
        <Link to={"/casa-tinta-roja-1"}>
          <img
            src={casaTintaRoja}
            alt="Casa Tinta Roja 1"
            className="diseño-img primer-imagen"
          />
        </Link>
        <Link to={"/departamento"}>
          <img
            src={departamentoDenalan}
            alt="Departamento Denalan"
            className="diseño-img z"
          />
        </Link>
        <Link to={"/casa-tinta-roja-2"}>
          <img
            src={cabañaDenalan}
            alt="Casa Tinta Roja 2"
            className="diseño-img z"
          />
        </Link>
      </div>

      <div className="redes-sociales">
        <Link
          to={"https://api.whatsapp.com/send?phone=5492267520604"}
          target="_blank"
          className=""
        >
          <h3 className="h3-redes">+5492267520604</h3>
          <img
            src={whatsapp}
            alt="Whatsapp de Denalan Alquileres"
            className=""
          />
        </Link>
        <Link to={"/casa-tinta-roja-1"}>
          <h3 className="h3-redes">Deanalan Alquileres</h3>
          <img src={facebook} alt="" />
        </Link>
        <Link to={"https://www.instagram.com/denalanvg/"} target="_blank">
          <h3 className="h3-redes">@denalanalquileres</h3>
          <img src={instagram} alt="" />
        </Link>
      </div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
        <Link
          to={"https://api.whatsapp.com/send?phone=5492267520604"}
          target="_blank"
          className="redes"
          style={{ textDecoration: 'none' }}
        >
          <h3 className="h3-redes">+54 9 2267520604</h3>
          <img
            src={whatsapp}
            alt="Whatsapp de Denalan Alquileres"
            className="img-redes"
          />
        </Link>
        <Link to={"/casa-tinta-roja-1"} target="_blank" className="redes" style={{ textDecoration: 'none' }}>
          <h3 className="h3-redes">Deanalan Alquileres</h3>
          <img src={facebook} alt="Facebook - Denalan" className="img-redes"/>
        </Link>
        <Link
          to={"https://www.instagram.com/denalanvg/"}
          target="_blank"
          className="redes" style={{ textDecoration: 'none' }}
        >
          <h3 className="h3-redes">@denalanalquileres</h3>
          <img src={instagram} alt="Instagram - @denalanvg" className="img-redes"/>
        </Link>
      </footer>
    </div>
  );
};
