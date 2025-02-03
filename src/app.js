/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".es", ".com", ".net"];

  function domgenerator(pronoun, adj, noun, extension) {
    let newar = [];

    for (let j of adj) {
      for (let i of pronoun) {
        for (let k of noun) {
          for (let l of extension) {
            newar.push(`${i}${j}${k}${l}`);
          }
        }
      }
    }
    return newar;
  }

  let solucion = domgenerator(pronoun, adj, noun, extension);

  document.getElementById("generador").innerText = solucion.join("\n");
};
