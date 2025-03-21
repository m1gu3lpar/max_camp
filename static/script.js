function mostrarCronograma() {
    let contenidoCronograma = document.getElementById("contenido-cronograma");
    let contenidoDiagrama = document.getElementById("contenido-diagrama");

    // Ocultar los diagramas y mostrar el cronograma
    contenidoDiagrama.style.display = "none";
    contenidoCronograma.style.display = "block";
}

function mostrarDiagrama(tipo) {
    let contenidoCronograma = document.getElementById("contenido-cronograma");
    let contenidoDiagrama = document.getElementById("contenido-diagrama");

    let info = {
        "clases": "📌 El diagrama de clases muestra la estructura del sistema y las relaciones entre sus clases.",
        "objetos": "📌 El diagrama de objetos representa una instancia específica del diagrama de clases en un momento determinado.",
        "componentes": "📌 El diagrama de componentes muestra cómo los componentes del sistema interactúan entre sí.",
        "despliegue": "📌 El diagrama de despliegue representa la distribución física del sistema en hardware.",
        "paquetes": "📌 El diagrama de paquetes agrupa elementos relacionados dentro del sistema.",
        "casos_uso": "📌 El diagrama de casos de uso muestra las interacciones entre los actores y el sistema.",
        "actividades": "📌 El diagrama de actividades representa el flujo de trabajo dentro del sistema.",
        "estados": "📌 El diagrama de estados muestra los diferentes estados por los que pasa un objeto en su ciclo de vida.",
        "secuencia": "📌 El diagrama de secuencia representa la interacción entre objetos a través del tiempo.",
        "comunicacion": "📌 El diagrama de comunicación muestra las interacciones entre objetos y su flujo de mensajes."
    };

    let imagen = `<img src="/static/img/${tipo}.png" alt="Diagrama de ${tipo}" class="diagrama-img">`;

  
    contenidoCronograma.style.display = "none";
    contenidoDiagrama.style.display = "block";
    contenidoDiagrama.innerHTML = `<p>${info[tipo]}</p> ${imagen}`;
}
