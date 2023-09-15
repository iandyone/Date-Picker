import styled, { css } from 'styled-components';

export const DatePicker = styled.form<{
  $error: boolean;
}>`
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.borderColor};
  height: 26px;
  margin-bottom: 15px;
  padding: 8px 15px;
  display: flex;
  transition: ${(props) => props.theme.transition};

  ${({ $error }) =>
    $error &&
    css`
      border-color: red;
      transition: ${(props) => props.theme.transition};
    `}
`;

export const Input = styled.input.attrs({
  placeholder: 'DD/MM/YYYY',
  type: 'text',
})`
  width: 100%;

  &:focus-visible {
    border: none;
    outline: none;
  }
`;
