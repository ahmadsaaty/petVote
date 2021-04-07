let button = document.getElementById("petButton");

button.addEventListener("click", showPics);

let petImages = document.getElementsByClassName("ImageContainer");

let likeButtons = document.getElementsByClassName("heart")

let pet1Index = document.getElementById("pet1Index")
let pet2Index = document.getElementById("pet2Index")
let pet3Index = document.getElementById("pet3Index")
let pet4Index = document.getElementById("pet4Index")

let i1 = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;



function showPics() {

    for (let index = 0; index < petImages.length; index++) {
        const petImage = petImages[index];
        const likeButton = likeButtons[index]

        petImage.classList.remove("hidden")
        likeButton.addEventListener("click", vote);
        // petImage.addEventListener("click", vote);
    }

    button.classList.add('hidden')
};



function vote(e) {

    const clickedButton = e.target;


    if (clickedButton.parentElement === pet1Index.parentElement) {
        i1++
    }
    else {
        if (clickedButton.parentElement === pet2Index.parentElement) {
            i2++

        }
        else {
            if (clickedButton.parentElement === pet3Index.parentElement) {
                i3++

            }
            else {
                if (clickedButton.parentElement === pet4Index.parentElement) {
                    i4++

                }
            }
        }
    }

    pet1Index.innerText = i1;
    pet2Index.innerText = i2;
    pet3Index.innerText = i3;
    pet4Index.innerText = i4;
}