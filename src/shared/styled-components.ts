import styled from 'styled-components';

export const ButtonPrimary = styled.button(
  ({ theme: { colors }, disabled }) => `
    display: block;
    width: 100%;
    max-width: 300px;
    color:${colors.white};
    background: ${colors.primary};
    font-size: 16px;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    padding: 10px 20px;
    margin: 0 auto;
    font-family: Boots Sharp;
    justify-content: center;
    align-items: center;
    opacity: ${disabled ? '50%' : '100%'};
    cursor: ${disabled ? 'default' : 'pointer'};
  `
);
