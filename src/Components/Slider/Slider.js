import React from 'react';
import Polo from "../../Polo.json";
import Fiat from "../../Fiat.json";
import Suran from "../../Suran.json";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function Slider() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
        {Polo && Polo.map((polo) => {  
            return <img src={polo.img} className="bd-placeholder-img" alt='img' key={polo.img}></img>
         })}
        </div>
        <div className="carousel-item">
        {Fiat && Fiat.map((Fiat) => {  
            return <img src={Fiat.img} className="Fiat" alt='img' key={Fiat.img}></img>
         })}
        </div>
        <div className="carousel-item">
        {Suran && Suran.map((suran) => {  
            return <img src={suran.img} className="bd-placeholder-img" alt='img' key={suran.img}></img>
         })}
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Slider
