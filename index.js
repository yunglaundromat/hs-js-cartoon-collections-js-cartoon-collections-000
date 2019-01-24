function dwarfRollCall(dwarves) {
  var rollCall = "";
  for (let i = 0; i < (dwarves.length / 2); i++) {
    rollCall += [i+1] + `. ` + dwarves[i] + ' '; 
  }
  return rollCall;
}

function summonCaptainPlanet(planeteerCalls){
  var calls = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
   calls.push(planeteerCalls[i].toUpperCase() + '!');
  }
  return calls;
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    }
  }
  return false;
}

function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert" || foods[i] === "brie") {
      return foods[i];
    }
  }
  return "no cheese!";
}
