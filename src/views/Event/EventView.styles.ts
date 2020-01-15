import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Return = styled(Link)`
  font-family: ${props => props.theme.font.family.cursive};
  color: ${props => props.theme.colors.tertiary};
  text-decoration: none;
  font-size: ${props => props.theme.font.size.large};
  padding: ${props => props.theme.spacing.s4} 0;
  display: block;
`;
