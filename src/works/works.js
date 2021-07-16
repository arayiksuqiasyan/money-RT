import React from "react";
import { useSelector } from "react-redux";

function Works() {
  const cards = useSelector((state) => state.mony.cards);
  return (
    <div className="works-section">
      <div className="works-section1">
        <h1>How to Work Money RT</h1>
        <span>
          Join ower 20 milion peaple who get the real exchange rate with
          Wise.We're on average 5x cheaper than leading UK high street banks.
        </span>
      </div>
      <div className="cards-container">
        {cards.map((card, i) => {
          return (
            <div className="card-fon" key={i}>
              <img src={card.logo} />
              <h2>{card.title}</h2>
              <span>{card.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Works;
