import { Container } from './styles';

const Input = ({ button, ...rest }) => {
  return (
    <Container>
      <input {...rest} />

      {button}

    </Container>
  );
}

export default Input;