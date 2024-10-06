//for helper functions

const toSunButton = document.getElementById("guide");

toSunButton.addEventListener("click", toSun);

function toSun(event){
    event.preventDefault();
    const buttonImage = document.getElementById("guide");
    buttonImage.src="./images/sun.gif";
}

export default toSun;