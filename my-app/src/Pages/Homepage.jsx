import React from 'react'
import Search from '../Components/Search'
import Photos from '../Components/Photos'
import Flex from '../Components/Flex'
import { useState, useEffect } from 'react';
import { createClient } from 'pexels';

const Homepage = () => {
    const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);
    const [data, setData] = useState(null);
    const [input, setInput] = useState("");
    const searchHandler = () => {
        if (input !== "") {
            client.photos.search({ query: input, per_page: 16 }).then(photos => {
                setData(photos);
                console.log(photos);
            });
        } else {
            client.photos.curated({ per_page: 16 }).then(photos => {
                setData(photos);
                console.log(photos);
            });
        }
    }
    useEffect(() => {
        searchHandler();
    }, []);
    return (
        <>
            <Search searchHandler={() => { searchHandler() }} setInput={setInput} />
            <Flex><Photos data={data} /></Flex>
        </>
    )
}

export default Homepage