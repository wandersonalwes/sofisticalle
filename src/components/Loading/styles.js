import styled from 'styled-components'

export const Container = styled.div`
  font-size: 5px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(0, 0, 0, 0.1);
  border-right: 1.1em solid rgba(0, 0, 0, 0.1);
  border-bottom: 1.1em solid rgba(0, 0, 0, 0.1);
  border-left: 1.1em solid #c4c4c4;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;

  border-radius: 50%;
  width: 5em;
  height: 5em;

  &:after {
    border-radius: 50%;
    width: 5em;
    height: 5em;
  }
`
