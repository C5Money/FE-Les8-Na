const hasAmbilight = inventory.filter((inventoryList) => {
    if (inventoryList.options.ambiLight ){
        return true;
    } else {
        return false;
    }
});
console.log(hasAmbilight);