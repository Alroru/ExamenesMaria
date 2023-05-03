// Obtener el formulario y las preguntas
const preguntasForm = document.getElementById('preguntas-form');
const preguntas = preguntasForm.querySelectorAll('div');
const respuestasCorrectas = ["a","c","a","c","b","b","a","a","a","b"];
 
 


// Función para verificar las respuestas del usuario
function verificarRespuestas(event) {
  event.preventDefault();
  let puntos = 0;

  // Recorrer todas las preguntas
  preguntas.forEach((pregunta, index) => {
    const respuestas = pregunta.querySelectorAll('input[type="radio"]');

    // Verificar si se seleccionó una respuesta
    let respuestaSeleccionada = false;
    respuestas.forEach(respuesta => {
      if (respuesta.checked) {
        respuestaSeleccionada = true;

        // Verificar si la respuesta es correcta
        if (respuesta.value === respuestasCorrectas[index]) {
          puntos++;
        }
      }
    });

    // Si no se seleccionó ninguna respuesta, mostrar un mensaje de error
    if (!respuestaSeleccionada) {
      alert(`Por favor seleccione una respuesta para la pregunta ${index + 1}.`);
    }
  });

  // Mostrar la puntuación final
  alert(`Tu puntuación final es de ${puntos} puntos de un total de ${preguntas.length}.`);
}

// Asociar la función de verificación al evento de envío del formulario
preguntasForm.addEventListener('submit', verificarRespuestas);
