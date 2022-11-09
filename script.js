const delay = (milliseconds = 700) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const game = () => {
  return {
    cards: [
      {
        color: "red",
        isFlipped: false,
        cleared: false,
        animate: "",
      },
      {
        color: "green",
        isFlipped: false,
        cleared: false,
        animate: "",
      },
      {
        color: "blue",
        isFlipped: false,
        cleared: false,
        animate: "",
      },
      {
        color: "yellow",
        isFlipped: false,
        cleared: false,
        animate: "",
      },
      {
        color: "red",
        isFlipped: false,
        cleared: false,
        animate: "",
      },
      {
        color: "green",
        isFlipped: false,
        cleared: false,
        animate: "",
      },
      {
        color: "blue",
        isFlipped: false,
        cleared: false,
        animate: "",
      },
      {
        color: "yellow",
        isFlipped: false,
        cleared: false,
        animate: "",
      },
    ].sort(() => Math.random() - 0.5),
    get flippedCards() {
      return this.cards.filter((card) => card.isFlipped);
    },
    get remainingCards() {
      return this.cards.filter((card) => !card.cleared);
    },
    async flipCard(card) {
      // hanya bisa buka 2 kartu
      if (this.flippedCards.length == 2) return;

      // buka atau tutup kartu
      card.isFlipped = !card.isFlipped;

      // cek ketika sudah ada 2 kartu terbuka dan cek warna nya
      if ((this.flippedCards.length = 2)) {
        if (this.flippedCards[0].color === this.flippedCards[1].color) {
          // beri animasi sebelum hilang
          this.flippedCards.forEach(
            (card) => (card.animate = "animate__animated animate__rubberBand")
          );
          await delay();
          this.flippedCards.forEach((card) => (card.cleared = true));

          // cek apakah kartu sudah hilang semua
          if (this.remainingCards.length == 0) {
            alert("You won!");
            location.reload();
          }
        }

        // beri animasi sebelum card ditutup kembali
        this.flippedCards.forEach(
          (card) => (card.animate = "animate__animated animate__shakeX")
        );

        // tutup semua kartu setelah pengecekan
        await delay();
        this.flippedCards.forEach((card) => (card.isFlipped = false));

        // hilangkan class animasi nya
        this.remainingCards.forEach((card) => (card.animate = ""));
      }
    },
  };
};
