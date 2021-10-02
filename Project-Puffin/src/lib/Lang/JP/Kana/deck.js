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
        const index = deck.findIndex((deckCard) => deckCard === card);
        deck = deck.slice(index);
        return deck;
      });
    },
  };
}

export const deck = createDeck();
// export const clicks = writable(0);
