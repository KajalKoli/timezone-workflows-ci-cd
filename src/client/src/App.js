import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [times, setTimes] = useState(null);

    const fetchTimes = async () => {
        try {
            const response = await axios.get('http://localhost:3001/timezones');
            setTimes(response.data);
        } catch (error) {
            console.error('Error fetching timezones:', error);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Time Zone Converter</h1>
            <button onClick={fetchTimes}>Get Current Times</button>
            {times && (
                <ul>
                    <li>IST: {times.IST}</li>
                    <li>EST: {times.EST}</li>
                    <li>GMT: {times.GMT}</li>
                    <li>JST: {times.JST}</li>
                </ul>
            )}
        </div>
    );
}

export default App;
