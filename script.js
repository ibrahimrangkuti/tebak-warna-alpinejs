const delay = (milliseconds = 700) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const game = () => {
  return {
    cards: [
      {
        color: "red",
        isFlipped: false,
        cleared: false,
      },
      {
        color: "green",
        isFlipped: false,
        cleared: false,
      },
      {
        color: "blue",
        isFlipped: false,
        cleared: false,
      },
      {
        color: "yellow",
        isFlipped: false,
        cleared: false,
      },
      {
        color: "red",
        isFlipped: false,
        cleared: false,
      },
      {
        color: "green",
        isFlipped: false,
        cleared: false,
      },
      {
        color: "blue",
        isFlipped: false,
        cleared: false,
      },
      {
        color: "yellow",
        isFlipped: false,
        cleared: false,
      },
    ],
    get flippedCards() {
      return this.cards.filter((card) => card.isFlipped);
    },
    get remainingCards() {
      return this.cards.filter((card) => !card.cleared);
    },
    async flipCard(card) {
      // buka atau tutup kartu
      card.isFlipped = !card.isFlipped;

      // cek ketika sudah ada 2 kartu terbuka dan cek warna nya
      if ((this.flippedCards.length = 2)) {
        if (this.flippedCards[0].color === this.flippedCards[1].color) {
          await delay();
          this.flippedCards.forEach((card) => (card.cleared = true));

          // cek apakah kartu sudah hilang semua
          if ((this.remainingCards.length = 0)) {
            alert("You won!");
          }
        }

        // tutup semua kartu setelah pengecekan
        await delay();
        this.flippedCards.forEach((card) => (card.isFlipped = false));
      }
    },
  };
};
