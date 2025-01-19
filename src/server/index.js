const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

//returns current time in different time zones
app.get('/timezones', (req, res) => {
    const now = new Date();
    res.json({
        IST: now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
        EST: now.toLocaleString('en-US', { timeZone: 'America/New_York' }),
        GMT: now.toLocaleString('en-US', { timeZone: 'Europe/London' }),
        JST: now.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }),
    });
});

app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});
