// Weergeven TV Specs
function getTVName(tv){
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}


// Weergeven TV prijzen
function getTvPrice(tv){
    return  `€${tv.price},-`;
}


// Weergeven TV schermgrootte
function getSchermGrootte(sizesArray){
    let output = " ";

    for (let i = 0; i < 2; i++){
        const inches = sizesArray[i];
        const cm = sizesArray[i] * 2.54;

        output = output + `${inches} inch (${cm} cm)`;

        if(sizesArray.length -1){
            output = `${output} | `;
        }
    }
    return output;
}

const specTv1 = document.getElementById("tv1");

specTv1.innerHTML = `${getTVName(inventory[3])}</br>
                     ${getTvPrice(inventory[3])}</br>
                     ${getSchermGrootte(inventory[3].availableSizes)}</br>`;


function getSpecs(array){
    const sturenSpecjes = document.getElementById("injectie-tvInfoList");

    const specs = array.map((tv) => {
       return `${getTVName(tv)}</br>
                     ${getTvPrice(tv.price)}</br>
                     ${getSchermGrootte(tv.availableSizes)}`;
    });

    sturenSpecjes.innerHTML = `${specs.join("")}`;
}

getSpecs(inventory);



