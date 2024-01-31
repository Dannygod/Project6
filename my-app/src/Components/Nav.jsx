import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const NavBar = styled.nav`
    position: sticky;
    top: 0;
    z-index: 5;
    width: 100vw;
    height: 50px;
    background-color: #454545;
    padding: 1rem;
    margin: 0 20px;
    ul {
        list-style: none;
        display: flex;
        justify-content: space-evenly;

        li {
            a {
                color: #fff;
                text-decoration: none;
            }
            &:hover {
                color: #eff934;
            }
        }
    }
    
`

const Nav = () => {
    return (
        <NavBar>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/more">More</Link></li>
            </ul>
        </NavBar>
    )
}

export default Nav