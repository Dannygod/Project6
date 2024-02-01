import React from 'react'
import Button from "../Components/Button"
const Search = ({ searchHandler }) => {

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