import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
