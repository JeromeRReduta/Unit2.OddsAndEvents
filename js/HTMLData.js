export default class HTMLData {
  #header;
  #bank;
  #odds;
  #evens;

  constructor(numStorage) {
    this.#header = this.#generateHeader(numStorage);
    this.#bank = this.#generateNumList(numStorage, "Bank");
    this.#odds = this.#generateNumList(numStorage, "Odds");
    this.#evens = this.#generateNumList(numStorage, "Evens");
  }

  // TODO: add numStorage functionality

  #generateHeader(numStorage) {
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
    h1.textContent = "ODDS & EVENTS";
    p.textContent = "Add a number to the bank:";
    addNum.textContent = "Add";
    sort1.textContent = "Sort 1";
    sortAll.textContent = "Sort All";
    input.inputMode = "text";
    return header;
  }

  #generateNumList(numStorage, title) {
    const list = document.createElement("div");
    const h1 = document.createElement("h1");
    const nums = document.createElement("div"); // TODO: make this a bar, not just text
    list.append(h1, nums);
    h1.textContent = title;
    nums.textContent = "Add nums here"; // TODO: actually add numbers
    return list;
  }

  appendTo(element) {
    [this.#header, this.#bank, this.#odds, this.#evens].forEach((section) =>
      element.append(section)
    );
  }
}
