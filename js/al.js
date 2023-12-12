// FOR THE HEADER BURGUER NAV BUTTON

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('burguerBtn').addEventListener('click', function() {
        var navMenu = document.querySelector('.navcost');
        navMenu.classList.toggle('show-menu');
    });
});
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

