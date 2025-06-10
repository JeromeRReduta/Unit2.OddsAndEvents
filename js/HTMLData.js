export default class HTMLData {
  #header;
  #bank;
  #odds;
  #evens;
  #numStorage;

  constructor(numStorage) {
    this.#numStorage = numStorage;
    this.#header = this.#generateHeader();
    this.#bank = this.#generateNumList("Bank", "bank");
    this.#odds = this.#generateNumList("Odds", "odds");
    this.#evens = this.#generateNumList("Evens", "evens");
  }

  get #nums() {
    return this.#numStorage;
  }

  #generateHeader() {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const input = document.createElement("input");
    const addNum = document.createElement("button");
    const sort1 = document.createElement("button");
    const sortAll = document.createElement("button");
    header.append(h1, div);
    div.append(p, input, addNum, sort1, sortAll);
    input.id = "input";
    header.id = "header";
    h1.textContent = "ODDS & EVENTS";
    p.textContent = "Add a number to the bank:";
    addNum.textContent = "Add";
    addNum.id = "add-button";
    sort1.textContent = "Sort 1";
    sort1.id = "sort-1-button";
    sortAll.textContent = "Sort All";
    sortAll.id = "sort-all-button";
    input.inputMode = "text";
    return header;
  }

  #generateNumList(title, id) {
    const list = document.createElement("div");
    const h1 = document.createElement("h1");
    const nums = document.createElement("div"); // TODO: make this a bar, not just text
    list.append(h1, nums);
    h1.textContent = title;
    nums.textContent = [];
    nums.id = id;
    return list;
  }

  appendTo(element) {
    [this.#header, this.#bank, this.#odds, this.#evens].forEach((section) =>
      element.append(section)
    );
  }

  addToBank(num) {
    this.#nums.add(num);
    this.#renderArr("bank", this.#nums.bank);
  }

  sort1() {
    this.#nums.sort1();
    this.#renderArr("bank", this.#nums.bank);
    this.#renderSet("odds", this.#nums.odds);
    this.#renderSet("evens", this.#nums.evens);
  }

  sortAll() {
    this.#nums.sortAll();
    this.#renderArr("bank", this.#nums.bank);
    this.#renderSet("odds", this.#nums.odds);
    this.#renderSet("evens", this.#nums.evens);
  }

  #renderArr(id, arr) {
    document.getElementById(id).textContent = arr.sort((a, b) => a - b);
  }
  #renderSet(id, set) {
    this.#renderArr(id, Array.from(set));
  }
}
