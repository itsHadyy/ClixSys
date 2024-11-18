let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display
      = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 10000);
}

function openNav() {
  document.getElementById("offCanvasNav").style.width = "65%";
  document.body.style.backgroundColor = "#0000005b";
}

function closeNav() {
  document.getElementById("offCanvasNav").style.width = "0";
  document.body.style.backgroundColor = "#fbfdff";
}
