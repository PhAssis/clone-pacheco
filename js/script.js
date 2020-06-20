let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

showSlides(slideIndex);

function myFunction() {
  setTimeout(currentSlide(slideIndex), 1000);
  slideIndex += 1;
}

myFunction();


function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('slide__image');
  const dots = document.getElementsByClassName('dot');
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace('active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

function trocaImagens() {
  const width = screen.width;
  const img = document.querySelectorAll('.slide__image img');
  let cont = 1;
  function optionScreen(screen) {
    img.forEach((el) => {
      el.setAttribute('src', `./img/img-slide/${screen}${cont}.jpg`);
      cont += 1;
    });
  }

  if (width <= 768) {
    optionScreen('imagem');
  } else {
    optionScreen('imagem-grande');
  }
}


window.addEventListener('resize', trocaImagens);
