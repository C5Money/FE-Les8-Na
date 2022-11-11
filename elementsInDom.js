// Totall Tv's sold
let sumSold = 0;
for (let i = 0; i < inventory.length; i++){
    sumSold += inventory[i].sold;
}
console.log(sumSold);

// Dynamisch injecteren tv's sold GROEN
const tvsSold = document.getElementById("injectie-1");
tvsSold.innerHTML = `
        Hoeveel TV's zijn er verkocht?<br/>
        Verkochte TV's: <strong>${sumSold}</strong><br/><br/>`;



// Totall Tv's bought
let sumBougth = 0;
for (let i = 0; i < inventory.length; i++){
    sumBougth += inventory[1].originalStock;
}
console.log(sumBougth);

// Dynamisch injecteren tv's bought BLAUW
const tvBought = document.getElementById("injectie-2");
tvBought.innerHTML = `
        Hoeveel TV's zijn er ingekocht?<br/>
        Ingekochte TV's: <strong>${sumBougth}</strong><br/><br/>`;



// Totall Tv's still to buy
let stillToBuy = 0;
for(let i = 0; i < inventory.length; i++){
    stillToBuy += inventory[i].originalStock - inventory[i].sold;
}

console.log(stillToBuy);

// Dynamisch injecteren tv's bought ROOD
const tvStillToBuy = document.getElementById("injectie-3");
tvStillToBuy.innerHTML = `
        Hoeveel TV's moeten er nog ingekocht worden?<br/>
        Inkoop TV's: <strong>${stillToBuy}</strong><br/><br/>`;

