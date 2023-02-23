/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let randomWho = who[Math.floor(Math.random() * who.length)]; //Elige un "who" al azar
  let randomWhat = what[Math.floor(Math.random() * what.length)]; //Elige un "what" al alzar
  let randomWhen = when[Math.floor(Math.random() * when.length)]; //Elige un "when" al alzar

  let excuseGenrator =
    randomWho + " " + randomWhat + " my homework " + randomWhen;

  const finalExcuse = document.createElement("h1");
  finalExcuse.innerHTML = excuseGenrator;
  document.querySelector(".excuse");
  excuse.appendChild(finalExcuse);
};
