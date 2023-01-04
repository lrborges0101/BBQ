
function calc(){

let inputAdults = document.getElementById("adults");
let inputChildren = document.getElementById("children");
let inputDuration = document.getElementById("duration");

let result = document.getElementById("result");



let adults = inputAdults.value;
let children = inputChildren.value; 
let duration = inputDuration.value; 

let totalMeat = meatPP(duration) * parseInt(adults) + (meatPP(duration) / 2 * children);
let totalBeer = beerPP(duration) * parseInt(adults);
let totalDrink = drinkPP(duration) * parseInt(adults) + (meatPP(duration) / 2 * children);


  result.innerHTML = `<p class="meat"> ${totalMeat /1000} Kg of Meat</p>`
  result.innerHTML += `<p class="beer"> ${Math.ceil(totalBeer /355)} Beer Cans</p>`
  result.innerHTML += `<p class="soda"> ${Math.ceil(totalDrink/ 2000)} Soda Bottles</p>`

}


function meatPP(duration) {

    if (duration >= 6) {
      return 650; 
    } else {
       return 400;
    }



}

function beerPP(duration) {

    if (duration >= 6) {
      return 2000; 
    } else {
       return 1200;
    }



}

function drinkPP(duration) {

    if (duration >= 6) {
      return 1500; 
    } else {
       return 1000;
    }



}