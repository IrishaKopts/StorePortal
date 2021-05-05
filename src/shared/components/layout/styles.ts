import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${({ theme: { colors } }) => colors.generalHealth};
  padding: 15px 30px;
`;

export const LogoImage = styled.img`
  width: 100%;
  max-width: 135px;
`;

export const Button = styled.button`
  height: 40px;
  width: 137px;
  top: 30px;
  right: 34px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  position: absolute;
  background: #FFFFFF;
  border: 1px solid #0067B2;
  border-radius: 5px;
  color: #0067B2;
  text-transform: uppercase;
  cursor: pointer;
`;
