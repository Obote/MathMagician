import React, { useEffect, useState } from 'react';

function generateUniqueKey() {
  return Math.random().toString(36).substr(2, 9);
}

function DisplayQuote() {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = 'djZSJecwGli9MCsYq/FoJw==eRoWun59C4EO3n2j';
  const category = 'education';
  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: { 'X-Api-Key': API },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>loading quote</p>;
  }
  if (error) {
    return <p>error in loading quote</p>;
  }
  return (
    <div className="display-quote">
      <ul className="quote-list">
        {quote.map((dailyquote) => (
          <li
            key={dailyquote.id ? dailyquote.id : generateUniqueKey()}
            className="quote-list-item"
          >
            <p className="quote-text">{dailyquote.quote}</p>
            <p className="author-text">
              -
              {dailyquote.author}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayQuote;
