// GetImg Function

async function getImg(event) {
    event.preventDefault();
    document.getElementById("getImageButton").addEventListener("click", getImg);

    
    const textInput = document.getElementById("textInput").value;
    console.log(`This is the result ${textInput}`);

}

export { getImg }