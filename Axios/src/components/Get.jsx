import axios from 'axios';
import { useState } from 'react';

export default function Get() {
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
      .then(res => {
        console.log("API Response", res.data.content);
        setQuote(res.data.content);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <button onClick={getQuote}>Get Quote</button>
        <p>{quote}</p>
      </div>
    </>
  );
}
