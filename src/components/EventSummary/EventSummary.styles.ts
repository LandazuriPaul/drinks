import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  text-decoration: none !important;
  margin: ${props => props.theme.spacing.s4} 0;
  display: block;
`;
