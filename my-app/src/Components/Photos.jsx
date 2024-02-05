import React from 'react'
import styled from 'styled-components'
import Button from './Button'
const Photo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* transition: transform 0.7s ease-in-out; */
    width: calc(25% - 20px);
    img{
        border-radius: 15px;
        display: block;
        width: 100%;
        object-fit: cover;
    }   
    
    .content{
        display: flex;
        flex-direction: column;
        padding: 10px;
    }
    a{
        text-decoration: none;
    }
    @media screen and (max-width: 768px){
        width: calc(50% - 10px);
    }
`

const Photos = ({ data }) => {
    return (
        <>
            {data && data.photos.map((photo) => {
                return (
                    <Photo>
                        <img src={photo.src.large} alt={photo.src.alt} />
                        <div className="content">
                            <h4>{photo.photographer}</h4>
                            <a href={`${photo.photographer_url}`}><Button>Download</Button></a>
                        </div>
                    </Photo>
                )
            })}

        </>
    )
}

export default Photos