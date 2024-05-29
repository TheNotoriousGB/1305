// Variable, um den aktuellen Slide-Index zu speichern
var slideIndex = 0;

// Funktion, um die Slides anzuzeigen
function showSlides() {
    // Deklaration der Variablen
    var i;
    var slides = document.getElementsByClassName("mySlides"); // Alle Elemente mit der Klasse "mySlides" werden ausgewählt
    var dots = document.getElementsByClassName("dot"); // Alle Elemente mit der Klasse "dot" werden ausgewählt
    
    // Verstecke alle Slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Erhöhe den Slide-Index
    slideIndex++;
    
    // Wenn der Slide-Index größer ist als die Anzahl der Slides, setze ihn auf 1 zurück
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    
    // Entferne die Klasse "active" von allen Punkten
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Zeige den aktuellen Slide an und füge die Klasse "active" zum entsprechenden Punkt hinzu
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    
    // Rufe die Funktion showSlides nach 2000 Millisekunden erneut auf, um den nächsten Slide anzuzeigen
    setTimeout(showSlides, 2000); 
}

// Rufe die Funktion showSlides auf, um den Slideshow-Effekt zu starten
showSlides();