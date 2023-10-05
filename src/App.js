// src/components/UrlShortener.js
import React, { useState } from 'react';
import axios from 'axios';

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleShorten = async () => {
    try {
      const response = await axios.post('5f47829b97fe4f17ab587976bd05bd3a', {
        long_url: originalUrl,
      });
      setShortenedUrl(response.data.short_url);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  //5f47829b97fe4f17ab587976bd05bd3a

  return (
    <div>
      <input
        type="text"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <button onClick={handleShorten}>Shorten URL</button>
      {shortenedUrl && (
        <div>
          <p>Shortened URL: {shortenedUrl}</p>
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
            Open Shortened URL
          </a>
        </div>
      )}
    </div>
  );
};

export default UrlShortener;
