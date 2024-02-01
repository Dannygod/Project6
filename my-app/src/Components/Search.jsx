import React from 'react'
import Button from "../Components/Button"
import styled from 'styled-components'
const Input = styled.input`
    font-size: 18px;
    padding: 5px;
    width: 300px;
    border: none;
    border-bottom: 1px solid #757575;
`
const Search = ({ searchHandler, setInput }) => {
    const inputHandler = (e) => {
        setInput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        searchHandler();
    }
    return (
        <>
            <form onSubmit={handleSubmit} action="">
                <Input onChange={inputHandler} type="text" />
                <Button onClick={searchHandler}>Search</Button>
            </form>
        </>
    )
}

export default Search