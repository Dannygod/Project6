import React from 'react'
import styled from 'styled-components'
const FooterComponent = styled.footer`
  background-color: #fff;
  position: sticky;
  top: 100vh;
`
const Footer = () => {
    return (
        <FooterComponent>
            <a href="https://www.facebook.com/ntnucsiecamp">
                FB
            </a>
            <a href="https://www.instagram.com/ntnucsiecamp2023/">
                IG
            </a>
            <a href="http://m.me/ntnucsiecamp">
                Messenger
            </a>
        </FooterComponent>
    )
}

export default Footer