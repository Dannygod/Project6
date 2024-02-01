import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};
  font-size: 1rem;
  margin: 1rem;
  padding: 0.25rem 1rem;
  border: 2px solid #BF4F74;
  border-radius: 5px;
  &:hover{
    cursor: pointer;
  }
`;
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
export default Button;
export { TomatoButton };