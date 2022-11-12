// Weergeven TV Specs

function getTVInfo(){
    const tvFullNames = inventory.map((tv) => {
        return `${tv.brand} ${tv.type} - ${tv.name}
            <hr/>`;
    });

    const oneTv = document.getElementById("tvSpecs");

    oneTv.innerHTML = `${tvFullNames}`;
}

getTVInfo();

