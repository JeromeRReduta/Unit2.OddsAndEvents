export default class NumStorage {
  #bank = [];
  #odds = new Set();
  #evens = new Set();

  constructor() {}

  getBank() {
    return this.#bank;
  }

  getOdds() {
    return this.#asAscendingUniqueArray(this.#odds);
  }

  getEvens() {
    return this.#asAscendingUniqueArray(this.#evens);
  }

  #asAscendingUniqueArray(set) {
    return Array.from(set).sort((a, b) => a - b);
  }

  /* Precondition: Requires a sanitized, non-NaN input */
  add(num) {
    this.#bank.push(num);
  }

  sort1() {
    if (this.#bank.length === 0) {
      console.error("NumStorage: Attempting to pull from empty array");
      return;
    }
    const num = this.#bank.shift();
    const category = num % 2 === 0 ? this.#evens : this.#odds;
    category.add(num);
  }

  sortAll() {
    const length = this.#bank.length;
    for (let i = 0; i < length; i++) {
      this.sort1();
    }
  }

  toString() {
    return ` {
        bank: ${this.#bank}
        odds: ${this.#asAscendingUniqueArray(this.#odds)}
        evens: ${this.#asAscendingUniqueArray(this.#evens)}
    }
    `;
  }
}
