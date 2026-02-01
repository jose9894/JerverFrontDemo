import { useState, useEffect } from "react";
import { GetAllPitas, GetAllPizzas } from "../services/ApiService";
import PizzaCard from "../components/PizzaCard";
import PitaCard from "../components/PitaCard";

import "../styles/MenuPage.css";

function Menu() {
const [pizzaData, setPizzaData] = useState([]);
const [pitaData, setPitaData] = useState([]);

useEffect(()=>{
async function getFoodData() {
    const pizza = await GetAllPizzas();
    if(pizza)setPizzaData(pizza);
    else console.log("Could Not Fetch Pizzas")

    const pita = await GetAllPitas();
    if(pita) setPitaData(pita);
    else console.log("Could Not Fetch Pitas")
}
    getFoodData();

},[])
    
  return (
    <div className="Menu-container">
      <div className="intro-container">
        <p>Her er vores Menu</p>
      </div>
      <div className="border">
        <div className="text-container">
          <p>Pizza</p>
        </div>
        <div className="card-container">
          <div className="card">
            {pizzaData.map((p,index)=>(<PizzaCard key={index} pizza={p}/>))}
          </div>
        </div>
        <div className="text-container">
          <p>Pita</p>
        </div>
         <div className="card-container">
          <div className="card">
            {pitaData.map((p,index)=>(<PitaCard key={index} pita={p}/>))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
