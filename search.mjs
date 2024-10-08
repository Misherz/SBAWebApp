// GetImg Function
const API_KEY = 'ywmjIhPygnpx0LacggNE7nqtALqLWUzEdDvsxcjI';

async function getImg() {
    // event.preventDefault();
    document.getElementById("getImageButton").addEventListener("click", getImg);

    
    const textInput = document.getElementById("textInput").value;
    console.log(`This is the result` + textInput);

    try {
        const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`);
        // console.log("This is " + res)

        if (!res.ok) {
            throw new Error("Could not retrieve resource");
        }

        const getData =  await res.json();
        getData.photos.forEach(photo => {
            
        })
      

        const photos = getData.photos.img_src;
        console.log("lets see" + photos);
        
        if (photos) {
            const resultImgs = document.getElementById("nasaImgs");
            resultImgs.src = photos[index].img_src; 
            resultImgs.style.display = "block"; 
        } 
        else {
            console.error("Num not found");
            alert("Photo not found. Please try another photo.");
                }    

    }catch(error){
        console.error(error);
    }

}
getImg()

export { getImg }
