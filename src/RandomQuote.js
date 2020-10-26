// import { useEffect, useState } from 'react';
import useApiData from './useApiData';
// Reach out to API, get some data, display on page
// When user clicks button, reach out to API again and get a new quote
function RandomQuote() {
    const initialUrl = 'https://programming-quotes-api.herokuapp.com/quotes/random';
    const [quoteData, setUrl] = useApiData(initialUrl);
    console.log(quoteData);
    return (
        <div>
            {quoteData &&
                <blockquote>
                    <p>{quoteData.en}</p>
                    <cite>{quoteData.author}</cite>
                </blockquote>
            }
            <button aria-label="Click here to fetch another quote" style={{cursor: "pointer", padding: "16px", borderRadius: "16px"}} onClick={() => setUrl(initialUrl)}>Next quote</button>
        </div>
    )
}
export default RandomQuote;