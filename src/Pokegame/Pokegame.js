import React, { Component } from "react";
import Pokedex from "../Pokedex/Pokedex";
import { cards } from "../Utility";

class Pokegame extends Component {
  generateRandomArrays = (arr, count) => {
    let retArr = [
      {
        deck: [],
        total: 0,
        isWinner: false
      },
      {
        deck: [],
        total: 0,
        isWinner: false
      }
    ];
    retArr[0].deck = arr.slice();
    let i = 0;
    while (i < count) {
      const index = Math.floor(
        Math.random() * Math.floor(retArr[0].deck.length - 1)
      );
      const item = retArr[0].deck.slice(index, index + 1);
      retArr[1].deck.push(item[0]);
      retArr[0].deck.splice(index, 1);
      i++;
    }
    for (let j = 0; j < count; j++) {
      retArr[0].total += retArr[0].deck[j].base_experience;
      retArr[1].total += retArr[1].deck[j].base_experience;
    }
    if (retArr[0].total > retArr[1].total) {
      retArr[0].isWinner = true;
    } else {
      retArr[1].isWinner = true;
    }

    console.log(retArr);
    return retArr;
  };
  render() {
    const arrays = this.generateRandomArrays(cards, 4);
    return (
      <div>
      <div>
        <h1>Pokedex Game</h1>
      </div>
        {arrays.map(decks => {
          return (
            <Pokedex
              cards={decks.deck}
              total={decks.total}
              key={decks.deck[0].base_experience}
              isWinner={decks.isWinner}
            />
          );
        })}
      </div>
    );
  }
}

export default Pokegame;
