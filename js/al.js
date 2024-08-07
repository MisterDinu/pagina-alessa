// Función para mostrar el botón cuando se desplaza
window.onscroll = function() {
        mostrarBoton();
    };

function mostrarBoton() {
    var botonArriba = document.getElementById("btnArriba");

// Se muestra el botón cuando el usuario ha bajado 100px
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }

    var botonWa = document.getElementById("btnSeguimiento");

// Se muestra el botón cuando el usuario ha bajado 100px
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        botonWa.style.display = "block";
    } else {
        botonWa.style.display = "none";
    }
}


// Función para ocultar el botón
function volverArriba() {
    document.body.scrollTop = 0; // 
    document.documentElement.scrollTop = 0;
}

// PARA MOSTRAR Y CERRAR CARD PASOS

function mostrarModal(idModal) {
    var modal = document.getElementById(idModal);
    modal.style.display = 'flex';
  }
  
  function cerrarModal(idModal) {
    var modal = document.getElementById(idModal);
    modal.style.display = 'none';
  }


// FOR THE NS PASOS SECTION, TEXT BOX APPEARS WHEN SCROLLING

document.addEventListener('scroll', reveal)

function reveal(){
    var reveals = document.querySelectorAll('.paso');
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 200;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}


// PARA ERROR DE TARGET BLANK EN BOTÓN DE WHATSAPP

function agendarSesion() {
    var url = "https://wa.me/525636140438?text=¡Hola!%20Me%20gustaría%20agendar%20una%20sesión";
    gtag_report_conversion(url);
    window.open(url, "_blank");
}


// PARA TESTIMONIOS

document.addEventListener("DOMContentLoaded", () => {
    const carrete = document.querySelector(".carrete");

    if (carrete) {
        let isDragging = false;
        let startX;
        let scrollLeft;

        const startDragging = (e) => {
            isDragging = true;
            startX = e.pageX - carrete.offsetLeft;
            scrollLeft = carrete.scrollLeft;
        };

        const stopDragging = () => {
            isDragging = false;
        };

        const dragging = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - carrete.offsetLeft;
            const walk = (x - startX) * 2; // La cantidad de desplazamiento
            carrete.scrollLeft = scrollLeft - walk;
        };

        carrete.addEventListener("mousedown", startDragging);
        carrete.addEventListener("mouseleave", stopDragging);
        carrete.addEventListener("mouseup", stopDragging);
        carrete.addEventListener("mousemove", dragging);


        carrete.addEventListener("touchstart", dragging);
        carrete.addEventListener("touchend", stopDragging);
        carrete.addEventListener("touchmove", dragging);


    } else {
        console.error("No se encontró el elemento .carrete");
    }
    const scrollLeftBtn = document.getElementById("scroll-left");
    const scrollRightBtn = document.getElementById("scroll-right");

    // Define la cantidad de desplazamiento en píxeles
    const scrollAmount = 200;

    // Función para desplazar hacia la izquierda
    scrollLeftBtn.addEventListener("click", () => {
        carrete.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    // Función para desplazar hacia la derecha
    scrollRightBtn.addEventListener("click", () => {
        carrete.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

});


