// Event listener to show all data in device
function handleShowAllData(e){
    console.log(e);

    if (e.target.textContent === "SOLD") {
        const dataSold = document.getElementById("injectie-1");
        dataSold.style.visibility = "visible";
    } else if (e.target.textContent === "STOCK") {
        const dataSold = document.getElementById("injectie-2");
        dataSold.style.visibility = "visible";
    } else if (e.target.textContent === "2BUY") {
        const dataSold = document.getElementById("injectie-3");
        dataSold.style.visibility = "visible";
    } else if (e.target.textContent === "INFO") {
        const dataSold = document.getElementById("injectie-tvInfoList");
        dataSold.style.visibility = "visible";
    }
}

const showDataSold = document.getElementById("buttons");
showDataSold.addEventListener("click", handleShowAllData);

