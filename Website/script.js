// Funktion zum Verarbeiten des Formulars
function handleFormSubmit(event) {
  event.preventDefault(); // Standard-Formular-Submit verhindern

  // Formulardaten sammeln
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Daten an die API mit einer POST-Anfrage senden
  fetch("https://localhost:8443/api/Kundenfeedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
      //Erfolgsmeldung an den Benutzer anzeigen
      alert("Vielen Dank für Ihr Feedback!");
      // Formular zurücksetzen
      form.reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      //Fehlermeldung an den Benutzer anzeigen
      alert(
        "Beim Senden Ihres Feedbacks ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
      );
    });
}

// Event-Listener für das Formular-Submit-Event hinzufügen
const form = document.getElementById("feedbackForm");
form.addEventListener("submit", handleFormSubmit);
