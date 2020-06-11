const contenedor = document.getElementById("test");

const preguntas = [

    {
        pregunta: "1.Que es significan las siglas de CCS?",
        respuestas: {

            a: "Cascading Style Sheets",
            b: "Celular Solar System",
            c: "Casette Solarium Silvester"
        },
        respuestaCorrecta: "a"
    }
    
]

function mostrarTest() {
    const preguntasYrespuestas = [];

    preguntas.forEach((preguntaActual, numeroDePregunta) => {

        const respuestas = [];
        for (letraRespuesta in preguntaActual.respuestas){
            respuestas.push(
                `<label>
                    <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}">
                    ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
                
                </label>`
            );

        }
        preguntasYrespuestas.push(
            `<div class="cuestion"> ${preguntaActual.pregunta}</div>
             <div class="respuestas"> ${respuestas.join('')}</div>

            
            `

        );
    });

    contenedor.innerHTML = preguntasYrespuestas.join('');

}

mostrarTest()