// Función para mostrar el botón cuando se desplaza
window.onscroll = function() {
        mostrarBoton();
    };

function mostrarBoton() {
    var botonArriba = document.getElementById("btnArriba");

// Se muestra el botón cuando el usuario ha bajado 300px
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }
}

// Función para ocultar el botón
function volverArriba() {
    document.body.scrollTop = 0; // 
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
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

