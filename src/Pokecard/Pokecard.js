import React, { Component } from "react";
import './Pokecard.css';

class Pokecard extends Component {

  generateId = id => {
    switch (id.toString().length) {
      case 1:
        return "00" + id;
      case 2:
        return "0" + id;
      default:
        return id;
    }
  }

  render() {
    const { name, id, type, exp } = this.props;
    const strId = this.generateId(id);
    const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${strId}.png`;
    return (
      <div className="Pokecard">
        <h2 className="Pokecard-item Pokecard-name">{name}</h2>
        <div className="Pokecard-item">
          <img className="Pokecard-img" src={url} />
        </div>
        <div className="Pokecard-item Pokecard-details">
          <div>
            <label>Type: </label> <span>{type}</span>
          </div>
          <div>
            <label>EXP: </label> <span>{exp}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokecard;
