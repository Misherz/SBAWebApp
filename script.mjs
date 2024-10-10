import * as myFunctions from './imports.mjs';
import { getImg } from './search.mjs';

const API_KEY = 'ywmjIhPygnpx0LacggNE7nqtALqLWUzEdDvsxcjI';

//async and await
fetchData()
async function fetchData() {

    try {

        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`, { headers: { "x-api-key": API_KEY } })
        if (!response.ok) {
            throw new Error("Could not retrieve resource");
        }
        const data = await response.json();
        console.log(data)

        //Image of the day loading
        const imgOfTheDay = data.url;
        const imgElement = document.getElementById("mainPg");

        imgElement.src = imgOfTheDay;
        imgElement.style.display = "block";

    }
    catch (error) {
        console.error(error);
    }
}

//Fetch practice
fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not retrieve resource");
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));



//Search Function API
//Search Guide
function popUp() {
    let nasaArchiveSearch = window.open(
        "https://plus.nasa.gov/",
        "Nasa Guide",
        "width=900, height=600, resizable=yes, scrollbars=yes, location=yes"
    )
}

document.getElementById("guide").addEventListener("click", popUp);





//Test API photo


fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not retrieve resource");
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));



document.getElementById("getImageButton").addEventListener("click", getImg);






