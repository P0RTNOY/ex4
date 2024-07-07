import * as api from './api';
import './App.css';
import { useState } from 'react';
import Links from './Links';

function App() {
  const [url, setUrl] = useState("https://www.google.com");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState({
    url: '',
    links: []
  });
  const [error, setError] = useState('');

  const saveCurrentUrl = async () => {
    setIsLoading(true);
    setError('');
    try {
      const data = await api.saveUrl(url);
      setResult(data);
    } catch (error) {
      setError('Failed to save URL. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteAllUrls = async () => {
    setIsLoading(true);
    setError('');
    try {
      await api.deleteAllUrls();
      setResult({ url: '', links: [] });
    } catch (error) {
      setError('Failed to delete URLs. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <div className='inputs'>
        <label htmlFor="urlInput">Insert URL: </label>
        <input
          id="urlInput"
          type="text"
          className='urlInput'
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
        <button onClick={saveCurrentUrl} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Run'}
        </button>
        <button onClick={deleteAllUrls} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Delete All'}
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      <Links {...result} />
    </div>
  );
}

export default App;
