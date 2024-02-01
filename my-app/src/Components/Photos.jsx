import React from 'react'
import styled from 'styled-components'
const Photo = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    img{
        width: 20%;
        margin: 1rem;
    }
`

const Photos = ({ data }) => {
    return (
        <Photo>
            {data && data.photos.map((photo) => {
                return (
                    <img src={photo.src.medium} />
                )
            })}
        </Photo>
    )
}

export default Photos