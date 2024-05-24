var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  console.log(n)
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

// Función para cambiar la imagen automáticamente cada 3 segundos
function autoChangeSlide() {
  plusDivs(1); // Avanza a la siguiente imagen
  setTimeout(autoChangeSlide, 5000); // Llama a la función nuevamente después de 3 segundos
}

// Inicia el cambio automático de imágenes
autoChangeSlide();