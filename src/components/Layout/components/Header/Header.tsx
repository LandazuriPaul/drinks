import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './Header.styles';

export const Header: FC<{}> = () => {
  return (
    <Container>
      <Link to="/">Drinks</Link>
    </Container>
  );
};
