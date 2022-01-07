// Evento para detectar al precionar una tecla
document.addEventListener( 'keyup', moveWithKeys );

//Se alamcana el Carousel en una variable 
const corousel = document.getElementById('carousel');
// Obtenemos toda la coleccion de imagenes
const imagesCollection = document.querySelectorAll('.image');

// Ancho total de tosas la imagnes
const imagesContentWidth = (imagesCollection.length) * carousel.offsetWidth;
// Posicion actual del carousel
let position = 0;


// Intervalo para que el carousel se sea dinamico
let interval = setInterval(() => next(), 3000);
// Funcion para recetar el intervalo
function resetInterval() {
    clearInterval( interval );
    interval = setInterval(() => next(), 3000);
}

// Funcion para avanzar de imagen
function next(){
    resetInterval();
    position = position + carousel.offsetWidth;
    if( position <= (imagesContentWidth - carousel.offsetWidth) ){
        images.style.transform = `translate(-${position}px)`;
    }else{
        position = 0;
        images.style.transform = `translate(-${position}px)`;
    }
}

// Funcion para retroceder una imagen 
function previus(){
    resetInterval();
    position = position - carousel.offsetWidth;
    if( position >= 0 ){
        images.style.transform = `translate(-${position}px)`;
    }else{
        position = (imagesContentWidth - carousel.offsetWidth);
        images.style.transform = `translate(-${position}px)`;
    }
}

// Funcion para avanzar y retroceder con las teclas
function moveWithKeys( $event ) {
    if( $event.keyCode === 39 ){
        next();
    }
    if( $event.keyCode === 37 ){
        previus();
    }
}