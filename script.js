function enviarFormulario(event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let institucion = document.getElementById("institucion").value;
  let telefono = document.getElementById("telefono").value;
  let correo = document.getElementById("correo").value;
  let tipo = document.getElementById("tipo").value;
  let mensaje = document.getElementById("mensaje").value;

  let texto = `Hola ASOLIMTRA, mi nombre es ${nombre}.
Institución: ${institucion}
Teléfono: ${telefono}
Correo: ${correo}
Tipo de requerimiento: ${tipo}
Mensaje: ${mensaje}`;

  let numeroWhatsApp = "593983342717";
  let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
}
let indiceSlide = 0;

function mostrarSlide(n) {
  let slides = document.querySelectorAll(".slide");
  let puntos = document.querySelectorAll(".punto");

  slides.forEach(slide => slide.classList.remove("activo"));
  puntos.forEach(punto => punto.classList.remove("activo-punto"));

  slides[n].classList.add("activo");
  puntos[n].classList.add("activo-punto");
}

function moverCarrusel(direccion) {
  let slides = document.querySelectorAll(".slide");

  indiceSlide += direccion;

  if (indiceSlide >= slides.length) {
    indiceSlide = 0;
  }

  if (indiceSlide < 0) {
    indiceSlide = slides.length - 1;
  }

  mostrarSlide(indiceSlide);
}

function slideActual(n) {
  indiceSlide = n;
  mostrarSlide(indiceSlide);
}

setInterval(() => {
  moverCarrusel(1);
}, 4000);

const sliders={};

function cambiarMiniSlide(id,direccion){

    let slider=document.getElementById(id);

    let slides=slider.querySelectorAll(".mini-slide");

    if(sliders[id]==undefined){

        sliders[id]=0;

    }

    slides[sliders[id]].classList.remove("activo-mini");

    sliders[id]+=direccion;

    if(sliders[id]>=slides.length){

        sliders[id]=0;

    }

    if(sliders[id]<0){

        sliders[id]=slides.length-1;

    }

    slides[sliders[id]].classList.add("activo-mini");

}