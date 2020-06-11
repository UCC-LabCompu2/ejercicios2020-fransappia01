const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");


const preguntas = [

    {
        pregunta: "1.Que es significan las siglas de CCS?",
        respuestas: {

            a: "Cascading Style Sheets",
            b: "Celular Solar System",
            c: "Casette Solarium Silvester"
        },
        respuestasCorrecta: "a"

    },
    {
        pregunta: "2.Que servidores de Git conoces?",
        respuestas: {

            a: "Github",
            b: "GitLab",
            c: "Gitroom"
        },
        respuestasCorrecta: "a"
    },
    {

        pregunta: "2.Que servidores de Git conoces?",
        respuestas: {

            a: "Github",
            b: "GitLab",
            c: "Gitroom"
        },
        respuestasCorrecta: "a"

    },
    {
        pregunta: "3.Que comandos de Git conoces?",
        respuestas: {

            a: "Clone",
            b: "Init",
            c: "Cout"
        },
        respuestasCorrecta: "a"


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

mostrarTest();

function mostrarResultado() {
    const respuestas = contenedor.querySelectorAll(".respuestas");
    let respuestasCorrecta = 0;

    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const todasLasRespuestas = respuestas[numeroDePregunta];
        const checkboxRespuestas  = `input[name='${numeroDePregunta}']:checked`;
        const RespuestaElegida = (todasLasRespuestas.querySelector(checkboxRespuestas) || {}).value;


        if (RespuestaElegida === preguntaActual.respuestasCorrecta){

            respuestasCorrecta++;

            respuestas[numeroDePregunta].style.color = 'blue';
        }else{

            respuestas[numeroDePregunta].style.color = 'red';
        }


    });

    resultadoTest.innerHTML = 'Ha acertado ' + respuestasCorrecta + 'preguntas de un total de' + preguntas.length;


}

botonRes.addEventListener('click', mostrarResultado);


function cargarPagina(url) {


    url = "http://localhost:63342/ejercicios2020-fransappia01/Ejercicios-CSS/TP%20LAB%20PAGINA%20DOS.html?_ijt=pmct48f9mns46dmluioqu4got" ;

    window.open(url);
}