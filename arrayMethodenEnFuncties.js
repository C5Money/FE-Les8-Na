// Lijst TV-merken weergeven
const tvList = inventory.map((tvName) => {
    return tvName.brand;
});
console.log(tvList);


//
function getTvNames(array){
    let countTvNames = 0;
    for(let i = 0; i < inventory.length; i++){
        countTvNames += array[i].brand;
        return array;
    }
}

console.log(getTvNames(tvList));