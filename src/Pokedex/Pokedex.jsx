import React, { PureComponent } from "react";
import Pokecard from "../Pokecard/Pokecard";
import "./Pokedex.css";

class Pokedex extends PureComponent {
  render() {
    const { isWinner, total, cards } = this.props;
    return (
      <div className={["Pokedex", isWinner ? "Pokedex-winner" : ""].join(" ")}>
        <h2>
          Total:
          {total}
        </h2>
        <div className="Pokedex-cards">
          {cards.map(card => (
            <Pokecard
              key={card.name}
              name={card.name}
              type={card.type}
              id={card.id}
              exp={card.base_experience}
            />
          ))}
        </div>
        {isWinner ? (
          <div>
            <h2>THIS HAND WINS!</h2>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Pokedex;
