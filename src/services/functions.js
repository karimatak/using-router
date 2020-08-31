import { useState, useEffect} from 'react';

export const useDataFetcher = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }else{
                    throw Error('Error fetching data');
                }
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false)
                setError(error);
            })
    },[])
    return {data, isLoading, error};
}