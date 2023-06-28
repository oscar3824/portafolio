//Haz tú validación en javascript acá
$(document).ready(function() {
    $(window).on('scroll', function() {
      // Obtener la posición actual del scroll
      var scrollPosition = $(window).scrollTop();
  
      // Obtener la posición de cada sección en la página
      $('section').each(function() {
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
  