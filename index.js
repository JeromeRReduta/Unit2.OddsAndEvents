import HTMLData from "./js/HTMLData.js";
import NumStorage from "./js/NumStorage.js";

function main() {
  const app = document.getElementById("app");
  const numStorage = new NumStorage();
  const html = new HTMLData(numStorage);
  html.appendTo(app);
}

main();
