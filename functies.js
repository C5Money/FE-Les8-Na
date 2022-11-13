// Weergeven TV Specs
// function getTVName(tv){
//     return `${tv.brand} ${tv.type} - ${tv.name}`;
// }
// document.getElementById("ffKijken").testje.innerHTML = getTVName(inventory[1]);
//



// Weergeven TV prijzen
// function getTvPrice(tv){
//     return  `€${tv.price},-`;
// }
//
// getTvPrice();
//

// Weergeven TV schermgrootte
// function getSchermGrootte(tv){

// function testje(arraytje) {
//
//
//     for (let i = 0; i < arraytje.length; i++) {
//         const schermgrootteInCms = inventory[i];
//
//
//         console.log(schermgrootteInCms);
//
//     }
//     return ;
// }
//
// testje(inventory.av)
// }

// getSchermGrootte();

// for(let i = 0; i < inventory.length; i++) {
//     console.log(inventory.name);
//
// }

// for (let i = 0; i < inventory.length; i++) {
//     console.log(inventory[i].availableSizes);
// }


function getSpecs(array){
    const sturenSpecjes = document.getElementById("ffKijken");

    const specs = array.map((tv) => {
       return `${tv.brand} ${tv.type} - ${tv.name} </hr> `;
    });

    sturenSpecjes.innerHTML = `${specs}`;
}

getSpecs(inventory);



