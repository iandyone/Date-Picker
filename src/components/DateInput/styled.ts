import styled, { css } from 'styled-components';

export const DatePicker = styled.form<{
  $error: boolean;
}>`
  height: 26px;
  margin-bottom: 10px;
  display: flex;
  border-radius: ${({ theme }) => theme.spaces.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spaces.inputPadding};
  transition: ${({ theme }) => theme.animation.transition};

  ${({ $error }) =>
    $error &&
    css`
      border-color: ${({ theme }) => theme.colors.error};
      transition: ${({ theme }) => theme.animation.transition};
    `}
`;

export const Input = styled.input.attrs((props) => ({
  placeholder: props.placeholder,
  type: 'text',
}))`
  width: 100%;
`;
