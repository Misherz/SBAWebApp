



const API_KEY = 'ywmjIhPygnpx0LacggNE7nqtALqLWUzEdDvsxcjI';

// (async function initialLoad() {
//     let pic = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`, { headers: { "x-api-key": API_KEY } })
//     let picOfTheDay =  await res.json()
// })

//Fetch practice
fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    .then(response => {
        if(!response.ok) {
        throw new Error("Could not retrieve resource");
    } 
    return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));

