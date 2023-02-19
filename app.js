const slides = document.querySelectorAll(".slide");
console.log(slides.length)
let counter = 0
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
)


const goprev = () => {
    if (counter == 0) {
        document.getElementById("prev").setAttribute = "disabled";
    }
    else {
        counter--;
    }
    slideimage();

}

const gonext = () => {
    if (counter >= slides.length - 1) {

        document.getElementById("next").setAttribute = "disabled";

    } else {
        counter++;
    }
    slideimage();

}


const slideimage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}