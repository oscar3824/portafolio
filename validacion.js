const inputs = document.querySelectorAll(".formcontato__input");
const btn = document.querySelector("#btnRegistro");
const miFormulario = document.querySelector(".formcontato__form");
const mensajeEnviado = document.getElementById("mensaje-enviado");

miFormulario.addEventListener("submit", function (event) {
  alert("¡Mensaje enviado con éxito!");
  const btnRegistro = document.getElementById("btnRegistro");
  btnRegistro.disabled = true;
});

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);

  })
})

function valida(input) {
  const tipoInput = input.dataset.tipo;
  if (validadores[tipoInput]) {
    validadores[tipoInput](input)
  }
  console.log(input.parentElement)
  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector("span").innerHTML = ""
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeError(tipoInput, input);
  }
}

const tipoErrores = [
  "valueMissing",
  "typeMismatch",
  "customError",
  "patternMismatch"
];
const mensajesError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacio"
  },
  email: {
    valueMissing: "El campo email no puede estar vacio",
    typeMismatch: "El correo ingresado no es valido"
  },
  asunto: {
    valueMissing: "El campo asunto no puede estar vacio",
  }

}

function mostrarMensajeError(tipoInput, input) {
  let mensaje = "";
  tipoErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(error);
      console.log(tipoInput, error)
      console.log(mensajesError[tipoInput][error]);
      mensaje = mensajesError[tipoInput][error];
    }
  })
  return mensaje;
}

const validadores = {
};
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.menu__list').classList.toggle('active');
});




$(document).ready(function () {
  $(window).on('scroll', function () {
    // Obtener la posición actual del scroll
    var scrollPosition = $(window).scrollTop();

    // Obtener la posición de cada sección en la página
    $('section').each(function () {
      var sectionOffset = $(this).offset().top;
      var sectionHeight = $(this).outerHeight();

      // Verificar si la sección está visible en la ventana
      if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
        // Mostrar el menú con animación
        $('.menu__container').fadeIn();
      }
    });
  });
});
