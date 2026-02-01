import "../styles/Models.css";

function PitaCard({pita}) {
  return (
    <div className="pita-container">
      <div className="pita-info">
          <p className="pita-nr">{pita.menu_number}.</p>
          <p className="pita-name">{pita.name}</p>
          </div>
          <p className="pita-price">{pita.price},-</p>
      </div>
  );
}

export default PitaCard;
