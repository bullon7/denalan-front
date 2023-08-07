import { WhatsApp, WhatshotOutlined } from "@material-ui/icons";
import logoNegro from "../data/SodaPDF-converted-F99D55AE-D025-46D8-8BFE-5F203C5846D6-removebg-preview.png";
import "../styles/components/Header.css";
import { Link } from "react-router-dom";
import { Carousel } from "./Carousel";

export const Header = () => {
  return (
    <>
      <div className="container-fluid text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Casa Tinta Roja 1</h1>
            </div>
            <div className="col-12 col-sm-2">
              <Link to={"/"}>
                <img src={logoNegro} alt="" className="img-vertical w-100" />
              </Link>
            </div>
            <div className="col-12 col-sm-8">
              <Carousel />

              <h4 className="numero-wpp">
                <WhatsApp className="boton-wpp"></WhatsApp>+54 9 2267520604
              </h4>
            </div>
            <div className="col-12 col-sm-2">
              <h1>COSITAS</h1>
            </div>
            <div className="col ">
              <p className="d-inline-block texto-desc">
                Es una casa caracterizada por la *exclusividad* familiar, con
                capacidad de hasta 10 personas. Ubicada en zona sur de la Ciudad
                de Villa Gesell, zona muy tranquila ideal para descansar en
                familia
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
