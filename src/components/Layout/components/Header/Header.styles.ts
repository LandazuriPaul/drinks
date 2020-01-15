import styled from 'styled-components';

export const Container = styled.header`
  background: ${props => props.theme.colors.primaryDark};
  font-family: ${props => props.theme.font.family.cursive};
  font-size: ${props => props.theme.font.size.largest};
  padding: ${props => props.theme.spacing.s8}
    ${props => props.theme.spacing.s20};
  color: ${props => props.theme.colors.primaryLight};
  height: ${props => props.theme.spacing.s10};
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a,
  a:hover,
  a:focus,
  a:visited,
  a:active {
    text-decoration: none;
    color: inherit !important;
  }
`;
