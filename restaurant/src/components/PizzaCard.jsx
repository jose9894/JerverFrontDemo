import "../styles/Models.css";

function PizzaCard({pizza}) {

  return (
    <div className="pizza-container">
        {pizza.price_child? (<div className="size-container">
            <p>Alm</p>
            <p>Børn</p>
        </div>) : null}
      <div>
        <div className="pizza-info">
        <div className="info-container">
          <p className="pizza-nr">{pizza.menu_number}.</p>
          <p className="pizza-name">{pizza.name}</p>
        </div>
        <div className="price-container">
          <p className="pizza-priceNorm">{pizza.price_standard},-</p>
          {pizza.price_child? (<p className="pizza-priceChild">{pizza.price_child},-</p>): null}
        </div>
        </div>
      </div>
      <div className="ingri-container">
      <p className="pizza-ingri">{pizza.ingredients.join(", ")}</p>
      </div>
    </div>
  );
}

export default PizzaCard;
