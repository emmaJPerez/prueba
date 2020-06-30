let slideIndex = 1;

const slides = document.getElementsByClassName("mySlides");
const my_header = document.getElementById("my_header")

const showSlides = n => {
  let i;

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  [...slides].forEach(element => element.style.display = "none")

  slides[slideIndex-1].style.display = "block";
}

showSlides(slideIndex);

const plusSlides = n => showSlides(slideIndex += n)

const currentSlide = n => showSlides(slideIndex = n);

window.addEventListener("scroll", e => {  
   (window.scrollY > 200) ?  my_header.classList.add("white-color") : my_header.classList.remove("white-color")
})