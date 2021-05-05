import styled from 'styled-components';
import { ButtonPrimary } from '../../shared/styled-components';

export const Button = styled(ButtonPrimary)`
  height: 48px;
  width: 215px;
  border-radius: 5px;
  padding: 0 20px;
  margin-left: 20px;
`;

export const ToolBar = styled.div`
  margin-top: 30px;
  padding-right: 91px;
  float: right;
  display: flex;
`;

export const OptionalToolbar = styled.div`
  margin-top: 120px;
  display: flex;
  width: 100%;
  padding: 0 91px 0 32px;
  justify-content: space-between;
`;

export const LinkContainer = styled.div`
  display: flex;
  right: 91px;
  height: 48px;

  img {
    vertical-align: middle;
    height: 22px;
  }
`;

export const Link = styled.button`
  font-family: Boots Sharp;
  font-size: 18px;
  line-height: 27px;
  text-align: left;
  border: none;
  background: none;
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.primary};
  opacity: 0.5;
  margin-left: 40px;
  white-space: nowrap;
`;
