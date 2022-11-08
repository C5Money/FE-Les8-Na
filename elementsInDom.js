// Totall Tv's sold
let sumSold = 0;
for (let i = 0; i < inventory.length; i++){
    sumSold += inventory[i].sold;
}
console.log(sumSold);



// Dynamisch injecteren tv's sold GROEN
const tvsSold = document.createElement("h1");
tvsSold.tekstContent = "Titel Boek";
// const hallo = "";
// hallo.appendChild(tvsSold);



// Totall Tv's bought
let sumBougth = 0;
for (let i = 0; i < inventory.length; i++){
    sumBougth += inventory[1].originalStock;
}
console.log(sumBougth);



// Dynamisch injecteren tv's bought BLAUW




//
