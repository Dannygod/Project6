import styled from 'styled-components';

const Flex = styled.div`
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: row;
    }
`;

export default Flex