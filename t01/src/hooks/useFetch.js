import { useState, useEffect } from 'react';

function useFetch(url) {

  let [data, setData] = useState(null)
  let [loading, setLoading] = useState(true)
  console.log('hello')
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const request = await fetch(url)
      const result = await request.json()
      setData(result)
      setLoading(false)
    }
    fetchData()
  }, [url])

  return { data, loading };

}

export default useFetch;