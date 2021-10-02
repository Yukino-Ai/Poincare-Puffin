import { writable } from "svelte/store";

function createDeck() {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    add: (card) => {
      update(function (deck) {
        deck = [...deck, card];
        return deck;
      });
    },
    remove: (card) => {
      update(function (deck) {
        console.log(deck);
        const index = deck.findIndex((deckCard) => deckCard === card);
        console.log(index);
        deck = deck.slice(index);
        console.log(deck);
        return deck;
      });
    },
  };
}

export const deck = createDeck();
// export const clicks = writable(0);
