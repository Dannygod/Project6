import React from 'react'
import Flex from '../Components/Flex'
import styled from 'styled-components'
const UL = styled.ul`
    list-style-type: none;
    padding: 10px;
`
const About = () => {
    return (
        <>
            <Flex>
                <h2>About</h2>
                <div>
                    <UL>The Pexels API is a service that allows developers to access high-quality photos and videos from the Pexels platform.</UL>
                    <UL>It is updated with thousands of new images and videos every day, ensuring a wide variety of content.</UL>
                    <UL>The API is completely free to use, making it a popular choice for developers needing to incorporate multimedia content into their applications.</UL>
                    <UL>It supports various endpoints for searching and retrieving media, and it provides a simple way to attribute the original creators.</UL>
                </div>
            </Flex>
        </>
    )
}

export default About