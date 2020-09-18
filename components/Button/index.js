import styled from 'styled-components'
const variantColors = {
  primary: '#FD4E09',
  success: '#4dd544'
}
export const Button = styled.button`
  font-size: 1.6rem;
  font-family: 'Poppins', sans-serif;
  height: 5rem;
  width: 100%;
  border-radius: 0.5rem;
  color: ${props =>
    props.outlined ? `${variantColors[props.variant]}` : '#fff'};
  border: 1px solid
    ${props => props.variant && `${variantColors[props.variant]}`};
  background: ${props =>
    props.outlined ? 'transparent' : `${variantColors[props.variant]}`};

  transition: 200ms;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background: #ccc;
    color: #aaa;
    border: 0;
  }
`
