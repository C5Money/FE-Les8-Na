const soldOutTelevisions = inventory.filter((inventorylist) => {

    if((inventorylist.originalStock - inventorylist.sold) === 0){
        return true;
    } else {
        return false;
    }
});
console.log(soldOutTelevisions);