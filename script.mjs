



const API_KEY = 'ywmjIhPygnpx0LacggNE7nqtALqLWUzEdDvsxcjI';

//async and await
fetchData()

async function fetchData() {

    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`, { headers: { "x-api-key": API_KEY } })
        if (!response.ok) {
            throw new Error("Could not retrieve resource");
        }
        const datas =  await response.json();
        console.log(datas)

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

