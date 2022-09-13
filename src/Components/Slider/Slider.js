import React from 'react'
import Polo from "../../Polo.json";
import Fiat from "../../Fiat.json";
import Suran from "../../Suran.json";

function Slider() {
  return (
    <div>
      <div class="slider">
    <ul>
        <li><div className="Slider"> 
         {Polo && Polo.map((polo) => {  
            return <img src={polo.img} className="polo"/>
         })}
          </div></li>
        <li><div className="Slider"> 
         {Fiat && Fiat.map((Fiat) => {  
            return <img src={Fiat.img} className="Fiat"/>
         })}
          </div></li>
        <li><div className="Slider"> 
         {Suran && Suran.map((suran) => {  
            return <img src={suran.img} className="Suran"/>
         })}
          </div></li>
    </ul>
</div>
    </div>
  )
}

export default Slider
