import { defineStore } from "pinia";

import testfiles from "@/assets/test.json";

const STORE_NAME = "top";

// Перемешать массив для игры
function shuffle(targetArray) {
  var result = [];
  for (var index in targetArray) {
    var item = targetArray[index];
    result.push(item);
  }

  var j, x, i;
  for (i = result.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = result[i];
    result[i] = result[j];
    result[j] = x;
  }

  return result;
}

export const useTopStore = defineStore(STORE_NAME, {
  state: () => ({
    currentGame:
      localStorage.getItem("currentGame") === null
        ? shuffle(testfiles)
        : JSON.parse(localStorage.getItem("currentGame")),
    firstHalf:
      localStorage.getItem("firstHalf") === null
        ? []
        : JSON.parse(localStorage.getItem("firstHalf")),
    secondHalf:
      localStorage.getItem("secondHalf") === null
        ? []
        : JSON.parse(localStorage.getItem("secondHalf")),
    nextRound:
      localStorage.getItem("nextRound") === null
        ? []
        : JSON.parse(localStorage.getItem("nextRound")),
    roundSize:
      localStorage.getItem("roundSize") === null
        ? 0
        : localStorage.getItem("roundSize"),
    roundNumber:
      localStorage.getItem("roundNumber") === null
        ? 1
        : localStorage.getItem("roundNumber"),
    isRoundStart:
      localStorage.getItem("isRoundStart") === null
        ? false
        : localStorage.getItem("isRoundStart"),
    winner:
      localStorage.getItem("winner") == null
        ? null
        : JSON.parse(localStorage.getItem("winner"))
  }),

  actions: {
    saveState() {
      localStorage.setItem("currentGame", JSON.stringify(this.currentGame));
      localStorage.setItem("firstHalf", JSON.stringify(this.firstHalf));
      localStorage.setItem("secondHalf", JSON.stringify(this.secondHalf));
      localStorage.setItem("nextRound", JSON.stringify(this.nextRound));
      localStorage.setItem("roundSize", this.roundSize);
      localStorage.setItem("roundNumber", this.roundNumber);
      localStorage.setItem("isRoundStart", this.isRoundStart);
      localStorage.setItem("winner", JSON.stringify(this.winner));
    },

    startRound() {
      this.firstHalf = this.currentGame.slice(0, this.currentGame.length / 2);
      this.secondHalf = this.currentGame.slice(this.currentGame.length / 2);

      this.nextRound = []
      this.roundSize = this.currentGame.length / 2;
      this.roundNumber = 1;
      
      this.winner = null;
      
      this.isRoundStart = true;

      this.saveState();
    },

    updateArray(option) {
      if (option == 1) {
        this.nextRound.push(this.firstHalf[0]);
      } else {
        this.nextRound.push(this.secondHalf[0]);
      }

      this.firstHalf.shift();
      this.secondHalf.shift();

      if (this.firstHalf.length == 0 || this.secondHalf.length == 0) {

        if (this.nextRound.length == 1) {

          this.winner = this.nextRound[0];

        } else {
          this.nextRound = shuffle(this.nextRound);

          this.firstHalf = this.nextRound.slice(0, this.nextRound.length / 2);
          this.secondHalf = this.nextRound.slice(this.nextRound.length / 2);

          this.roundNumber = 1;
          this.roundSize = this.nextRound.length / 2;

          this.nextRound = [];
        }

      } else {
        this.roundNumber++;
      }

      

      this.saveState();
    },
  },
});
