// GetImg Function


async function getImg(event) {
    event.preventDefault();
    document.getElementById("getImageButton").addEventListener("click", getImg);

    
    const textInput = document.getElementById("textInput").value;

    try {

        const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`);

        if (!res.ok) {
            throw new Error("Could not retrieve resource");
        }
        const getData =  await res.json();
        console.log(getData)

        if (photo) {
            const resultImgElement = document.getElementById("nasaImgs");
            resultImgElement.src = photo[index].img_src; 
            resultImgElement.style.display = "block"; 
        } else {
            console.error("ID not found");
            alert("Photo not found. Please check the photo ID.");
        }

    }
    catch (error) {
        console.error(error);
    }
}

export { getImg }