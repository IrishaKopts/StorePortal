import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: block;
  color: ${({ theme: { colors } }) => colors.primary};
  text-decoration: none;
  text-align: center;
  margin-top: 30px;
`;
