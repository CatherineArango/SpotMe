import React, { useEffect, useState } from 'react'
import centerDB from '../api/centerDB'
import { CenterDBInterface, Center } from '../interfaces/centerInterface';

export const useCenters = ()=> {

    const [isLoading, setIsLoading] = useState(true)
    const [centersAvailable, setCentersAvailable] = useState<Center[]>([])
    const getCenters = async() =>
    {
        const resp = await centerDB.get<CenterDBInterface>('/movie');
        setCentersAvailable(resp.data.results);
        setIsLoading(false);

    }
    useEffect(() => {
        getCenters();
    }, [])


    return {
        centersAvailable,
        isLoading
    }
}