import { useEffect, useState } from 'react';
// Create a custom hook for the API logic!

function useApiData(initialUrl) {
  const [quoteData, setQuoteData] = useState(null);
  const [url, setUrl] = useState(initialUrl);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const parsed = await response.json();
      console.log(parsed);
      setQuoteData(parsed);
      setUrl(undefined);
    };
    if (url) {
      fetchData();
    }
    // return () => {
    //     console.log('will run when the component unmounts');
    // }
  }, [url]);
  return [quoteData, setUrl];
}
export default useApiData;