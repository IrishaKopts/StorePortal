import styled from 'styled-components';

export const Input = styled.input<any>(
  ({ invalid, theme: { colors } }) => `
    width: 100%;
    max-width: 450px;
    background: ${colors.grayLightPrimary};
    border: 1px solid ${invalid ? colors.errorRed : colors.grayLightSecondary};
    border-radius: 5px;
    font-size: 18px;
    color: ${colors.bootsBlue};
    padding: 10px 16px;
    outline: none;

    &:-webkit-autofill {
        -webkit-text-fill-color: ${colors.bootsBlue};
    }

    :focus {
        border: 1px solid ${invalid ? colors.errorRed : colors.primary};
    }

    ::placeholder {
        font-weight: 300;
        color: ${colors.gray};
    }
  `
);

export const ValidationError = styled.p`
  font-weight: 300;
  font-size: 16px;
  color: ${({ theme: { colors } }) => colors.errorRed};
`;

export const ButtonPrimary = styled.button(
  ({ theme: { colors } }) => `
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
    cursor: pointer;
    margin: 0 auto;
  `
);
