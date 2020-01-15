import styled from 'styled-components';

export const Container = styled.footer`
  background: ${props => props.theme.colors.primaryDark};
  font-family: ${props => props.theme.font.family.cursive};
  font-size: ${props => props.theme.font.size.larger};
  padding: ${props => props.theme.spacing.s2}
    ${props => props.theme.spacing.s20};
  color: ${props => props.theme.colors.primaryLight};
  height: ${props => props.theme.spacing.s10};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
