const express = require('express');
const cors = require('cors'); // CORS-Modul einbinden
const app = express();

// Middleware für CORS aktivieren
app.use(cors());

// Weitere Middleware für JSON-Verarbeitung
app.use(express.json());

// Endpunkt für das Empfangen von Kundenfeedback
app.post('/api/Kundenfeedback', (req, res) => {
    // Hier Feedback-Daten verarbeiten
    const feedbackData = req.body;
    console.log('Received feedback:', feedbackData);
    // Beispielantwort senden
    res.json({ message: 'Feedback received!' });
});

// Server starten
const PORT = process.env.PORT || 3000; // Port 8443 oder Umgebungsvariable
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
