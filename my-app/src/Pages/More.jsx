import React from 'react'
import Flex from '../Components/Flex'
import styled from 'styled-components'
const UL = styled.ul`
    list-style-type: none;
    padding: 10px;
    li{
        padding: 10px;
    }
`
const More = () => {
    return (
        <Flex>
            <h2>The Pexels API</h2>
            <UL>
                <li><strong>Access to High-Quality Content:</strong> The Pexels API provides access to a vast library of high-resolution photos and videos sourced from talented photographers and videographers around the world. This diverse range of content ensures that developers can find suitable media for a wide variety of projects and applications.</li>

                <li><strong>Daily Updates:</strong> One of the standout features of the Pexels API is its regular updates. Thousands of new images and videos are added to the platform every day, keeping the content fresh and relevant. This ensures that developers always have access to the latest and most engaging media for their applications.</li>

                <li><strong>Free to Use:</strong> Perhaps the most attractive aspect of the Pexels API is that it is completely free to use. This makes it an excellent choice for developers, particularly those working on projects with limited budgets or resources. The free access to high-quality content helps democratize multimedia access for developers across the globe.</li>

                <li><strong>Easy Integration:</strong> The API is designed for ease of integration into various applications and platforms. It offers straightforward endpoints for searching and retrieving media, allowing developers to seamlessly incorporate Pexels content into their projects with minimal effort.</li>

                <li><strong>Attribution:</strong> While the content available through the Pexels API is free to use, the platform emphasizes proper attribution to the original creators. This helps promote the work of photographers and videographers and ensures that they receive credit for their contributions.</li>
            </UL>

            <p>Overall, the Pexels API is a valuable resource for developers looking to enhance their applications with visually appealing multimedia content. Its combination of high-quality media, regular updates, ease of integration, and free access make it a popular choice within the developer community.</p>
        </Flex>

    )
}

export default More