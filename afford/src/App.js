import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [numberId, setNumberId] = useState('');
  const [response, setResponse] = useState(null);

  const handleChange = (event) => {
    setNumberId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.get(http://20.244.56.144:8080/numbers/${numberId});
      setResponse(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResponse(null);
    }
  };

  return (
    <div className="App">
      <h1>Average Calculator Microservice</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Number ID:
          <input type="text" value={numberId} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;