import React from 'react'
import Search from '../Components/Search'
import Photos from '../Components/Photos'
import { useState, useEffect } from 'react';
import { createClient } from 'pexels';
import styled from 'styled-components';
const Flex = styled.div`
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
`;
const Homepage = () => {
    const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);
    const [data, setData] = useState(null);
    const searchHandler = () => {
        client.photos.curated({ per_page: 16 }).then(photos => {
            setData(photos);
            console.log(photos);
        });
    }
    useEffect(() => {
        searchHandler();
    }, []);
    return (
        <>
            <Search searchHandler={searchHandler} />
            <Flex><Photos data={data} /></Flex>
        </>
    )
}

export default Homepage