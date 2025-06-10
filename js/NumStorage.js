export default class NumStorage {
  #bank;
  #odds;
  #evens;

  constructor() {
    this.#bank = [];
    console.log("constructor", this.#bank);
    this.#odds = new Set();
    this.#evens = new Set();
  }

  get bank() {
    return this.#bank;
  }

  get odds() {
    return this.#odds;
  }

  get evens() {
    return this.#evens;
  }

  /* Precondition: Requires a sanitized, non-NaN input */
  add(num) {
    this.bank.push(num);
  }

  sort1() {
    if (this.bank.length === 0) {
      console.error("NumStorage: Attempting to pull from empty array");
      return;
    }
    const num = this.bank.shift();
    const category = num % 2 === 0 ? this.evens : this.odds;
    category.add(num);
  }

  sortAll() {
    const length = this.bank.length;
    for (let i = 0; i < length; i++) {
      this.sort1();
    }
  }

  toString() {
    return ` {
        bank: ${this.bank}
        odds: ${this.odds}
        evens: ${this.evens}
    }
    `;
  }
}
