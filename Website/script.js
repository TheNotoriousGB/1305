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

// Funktion zum Verarbeiten des Formulars
function handleFormSubmit(event) {
    event.preventDefault(); // Standard-Formular-Submit verhindern
    
    // Formulardaten sammeln
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    
    // Daten an die API mit einer POST-Anfrage senden
    fetch("https://localhost:8443/api/Kundenfeedback", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log("Success:", data);
        // Optional: Erfolgsmeldung an den Benutzer anzeigen
        alert("Vielen Dank für Ihr Feedback!");
    })
    .catch(error => {
        console.error("Error:", error);
        // Optional: Fehlermeldung an den Benutzer anzeigen
        alert("Beim Senden Ihres Feedbacks ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.");
    });
}

// Event-Listener für das Formular-Submit-Event hinzufügen
const form = document.getElementById("feedbackForm");
form.addEventListener("submit", handleFormSubmit);
