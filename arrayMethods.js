// Tv type name
const tvNames = inventory.map((inventoryList) => {
    return inventoryList.type;
});
console.log(tvNames);


// Tv Soldout
const soldOutTelevisions = inventory.filter((inventorylist) => {

    if((inventorylist.originalStock - inventorylist.sold) === 0){
        return true;
    } else {
        return false;
    }
});
console.log(soldOutTelevisions);


// Tv Ambilight
const hasAmbilight = inventory.filter((inventoryList) => {
    if (inventoryList.options.ambiLight ){
        return true;
    } else {
        return false;
    }
});
console.log(hasAmbilight);


// Tv Low-High price
const sortedOnPrice = inventory.sort((a,b) => {
    return a.price -b.price;
});
console.log(sortedOnPrice);

