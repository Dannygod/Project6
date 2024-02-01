import React, { useState, useEffect } from 'react'
import Button from "../Components/Button"
import { createClient } from 'pexels';
const client = createClient('UenxfAE597reOvqFO3ekcoWomHhFKDNQ7VvqExvdSrZVtICa8ZLmlPbA');
const Search = () => {

    const [searchData, setSearchData] = useState(null);
    const auth = "UenxfAE597reOvqFO3ekcoWomHhFKDNQ7VvqExvdSrZVtICa8ZLmlPbA"
    const initialUrl = `https://api.pexels.com/v1/curated?page=${1}&per_page=${15}`
    const searchHandler = async () => {
        try {
            const dataFetch = await fetch(initialUrl, {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    Authorization: auth,
                },
            });
            let parsedData = await dataFetch.json();
            console.log(parsedData.photos);
            setSearchData(parsedData);
            console.log(searchData.photos);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        console.log(searchData);
    }, [searchData]);
    return (
        <>
            <form action="">
                <input type="text" />
                <Button onClick={searchHandler}>Search</Button>
            </form>
        </>
    )
}

export default Search