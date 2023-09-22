import styled, { css } from 'styled-components';

export const DatePicker = styled.form<{
  $error: boolean;
}>`
  height: 26px;
  margin-bottom: 15px;
  display: flex;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: ${(props) => props.theme.inputPadding};
  transition: ${(props) => props.theme.transition};

  ${({ $error }) =>
    $error &&
    css`
      border-color: red;
      transition: ${(props) => props.theme.transition};
    `}
`;

export const Input = styled.input.attrs((props) => ({
  placeholder: props.placeholder,
  type: 'text',
}))`
  width: 100%;
`;
