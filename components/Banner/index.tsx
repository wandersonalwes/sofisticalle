import React from 'react';

import { Container } from './styles';

interface BannerProps {
  title: string;
  caption: string;
}

const Banner: React.FC<BannerProps> = ({ title, caption }) => {
  return (
    <Container>
      <div className="wrapper-heading">
        <h2 className="heading">
          {title}
        </h2>
      </div>
      <p className="caption">
        {caption}
      </p>
    </Container>
  );
}

export default Banner;