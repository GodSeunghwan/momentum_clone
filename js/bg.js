const body = document.querySelector("body");

const RANDOM_IMG = {
    large_background_image: "https://source.unsplash.com/1920x1080/?landscape",
    medium_background_image: "https://source.unsplash.com/1280x720/?landscape"
}


function paintImage() {
    const image = new Image();
    image.classList.add("bgImage");
    image.src = RANDOM_IMG.medium_background_image;
    image.onload = () => {
        body.prepend(image);
    }
}

function init() {
    paintImage();
}

init();