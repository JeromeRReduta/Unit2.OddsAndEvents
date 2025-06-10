import HTMLData from "./js/HTMLData.js";
import NumStorage from "./js/NumStorage.js";

function main() {
  const app = document.getElementById("app");
  const numStorage = new NumStorage();
  const html = new HTMLData(numStorage);
  numStorage.add(5);
  numStorage.add(27);
  numStorage.sort1();
  html.appendTo(app);
  numStorage.add(-4);
  numStorage.sortAll();
  console.log(numStorage.toString());
}

main();
