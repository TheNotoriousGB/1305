const express = require('express');
const cors = require('cors');
const app = express();

// Middleware für CORS
app.use(cors());
app.use(express.json());

// Endpunkt für das Empfangen von Kundenfeedback
app.post('/api/Kundenfeedback', (req, res) => {
    // Hier können Sie die empfangenen Feedback-Daten verarbeiten
    const feedbackData = req.body;
    console.log('Received feedback:', feedbackData);
    // Hier könnte eine Datenbankoperation stehen oder eine Bestätigungsnachricht gesendet werden
    res.json({ message: 'Feedback received!' });
});

// Server starten
const PORT = process.env.PORT || 8443; // Port 8443 verwenden oder Umgebungsvariable verwenden, falls vorhanden
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});