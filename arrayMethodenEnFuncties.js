// Lijst TV-merken weergeven
const tvList = inventory.map((tvName) => {
    return tvName.brand;
});
console.log(tvList);

function getTvNames(array){
    const tv = document.getElementById("injectie-tvInfoList");

    const tvList = array.map((tvName) => {
        return `<li>${tvName.brand}</li>`;
    });

    tv.innerHTML = `${tvList.join("")}</br>`;
}

getTvNames(inventory);
