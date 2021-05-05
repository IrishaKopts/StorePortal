import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${({ theme: { colors } }) => colors.sinbad};
  padding: 15px 30px;
`;

export const LogoImage = styled.img`
  width: 100%;
  max-width: 135px;
`;
