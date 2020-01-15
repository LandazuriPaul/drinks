import styled from 'styled-components';
import MUICard from '@material-ui/core/Card';

export const Card = styled(MUICard)`
  background: ${props => props.theme.colors.primary};
`;
