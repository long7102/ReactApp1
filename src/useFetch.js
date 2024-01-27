import { useEffect, useState } from "react"


//custom hook
const useFetch = (url) => {
    
    const [data, setData] = useState(null)
    const [isPengding, setIsPengding] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const abortCont = new AbortController()
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Đéo fetch được')
                    }
                    return res.json()

                })
                .then((data) => {
                    setData(data)
                    setIsPengding(false)
                    setError(null)
                })
                .catch(err => {
                    if(err.name === 'AbortError'){

                    }
                    else{
                        setIsPengding(false)
                    setError(err.message)
                    }
                })
        }, 2000)
        return () => abortCont.abort()
    }, [url])
    return {data, isPengding, error}
}
export default useFetch