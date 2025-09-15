import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/generate', { prompt: input });
      setResponse(res.data.text);
    } catch (error) {
      setResponse('Error: ' + error.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>AI Tutoring Platform</h1>
      <textarea
        rows="5"
        cols="60"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your question or topic"
      />
      <br />
      <button onClick={handleSubmit} style={{ marginTop: '10px' }}>Ask AI</button>
      <div style={{ marginTop: '20px' }}>
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;
