let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function myFunction() {
  setTimeout(currentSlide(slideIndex), 1000);
  slideIndex++;
}

myFunction();


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide__image");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function trocaImagens() {
  let width = screen.width;

  if (width <= 768) {
    let img = document.querySelectorAll(".slide__image img");
    let cont = 1;
    img.forEach((el) => {
      let att = el.getAttribute('src');
      el.setAttribute('src', `./img/img-slide/imagem${cont}.jpg`)
      cont++;
    })
  } else {
    let img = document.querySelectorAll(".slide__image img");
    let cont = 1;
    img.forEach((el) => {
      el.setAttribute('src', `./img/img-slide/imagem-grande-${cont}.jpg`)
      cont++;
    })
  }
}


window.addEventListener("resize", trocaImagens);
