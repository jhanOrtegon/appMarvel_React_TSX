
import React, { useEffect, useState } from 'react';

const useFetch = (enpoint: string) => {
    const [dataFetch, setDataFetch] = useState({ data: {}, error: false, loading: false })

    useEffect(() => {
        setDataFetch(e => {
            return { ...e, loading: true }
        })
        fetch(enpoint)
            .then(e => e.json())
            .then(e => setDataFetch({ data: e, error: false, loading: false }))
    }, [enpoint])

    return dataFetch
}

export default useFetch