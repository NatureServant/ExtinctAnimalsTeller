let sciName = document.getElementById("scienName");
let comName = document.getElementById("comName");
let loc = document.getElementById("loc");
let year = document.getElementById("year");
let des = document.getElementById("des");   
let img = document.getElementById("img");
let dataArea = document.querySelector(".data");
let para = document.querySelector("p");
let searchBtn = document.getElementById("search");

function fetchData(params) {
    $.ajax({
        method: 'GET',
        url: 'https://extinct-api.herokuapp.com/api/v1/animal/',
        contentType: 'application/json',
        success: function(result) {
            para.style.display = "none";
            dataArea.style.display = "flex";
            img.style.display = "flex";
            console.log(result);
            sciName.innerHTML = result.data[0].binomialName;
            comName.innerHTML = result.data[0].commonName;
            loc.innerHTML = result.data[0].location;
            year.innerHTML = result.data[0].lastRecord;
            des.innerHTML = result.data[0].shortDesc;
            img.src = result.data[0].imageSrc;
            searchBtn.href = result.data[0].wikiLink;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });

}
fetchData();