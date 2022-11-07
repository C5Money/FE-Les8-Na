const sortedOnPrice = inventory.sort((a,b) => {
    return a.price -b.price;
});
console.log(sortedOnPrice);