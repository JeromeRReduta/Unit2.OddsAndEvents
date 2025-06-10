import HTMLData from "./js/HTMLData.js";
import NumStorage from "./js/NumStorage.js";

function main() {
  const app = document.getElementById("app");
  const numStorage = new NumStorage();
  const html = new HTMLData(numStorage);
  html.appendTo(app);
  const addButton = document.getElementById("add-button");
  const sort1Button = document.getElementById("sort-1-button");
  const sortAllButton = document.getElementById("sort-all-button");
  const input = document.getElementById("input");

  document.body.addEventListener("click", (event) => {
    const text = event.target.textContent;
    const value = input.value;
    const parsed = parseInt(value);

    if (text === addButton.textContent) {
      if (isNaN(parsed)) {
        alert(`error - ${value} is not a number!`);
      } else {
        html.addToBank(parsed); // TODO: get input processing
      }
    } else if (text === sort1Button.textContent) {
      html.sort1();
    } else if (text === sortAllButton.textContent) {
      html.sortAll();
    }
    console.log("input:", input.value);
    console.log(numStorage.toString());
  });
}

main();
