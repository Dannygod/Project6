import React from 'react'
import styled from 'styled-components'
const FooterComponent = styled.footer`
    width: 100%;
    background-color: #454545;
    position: sticky;
    top: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    h4{
        color: #ffca28;
    }
    a{
        color: #ffca28;
        text-decoration: none;
    }
`
const Footer = () => {
    return (
        <FooterComponent>
            <h4>Powered by Pexels API</h4>
            <a href="https://www.facebook.com/ntnucsiecamp">
                ✓ Thousands of new images every day
            </a>
            <a href="https://www.instagram.com/ntnucsiecamp2023/">
                ✓ High-quality videos and images from Pexels
            </a>
            <a href="http://m.me/ntnucsiecamp">
                ✓ Completely Free to Use
            </a>
        </FooterComponent>
    )
}

export default Footer