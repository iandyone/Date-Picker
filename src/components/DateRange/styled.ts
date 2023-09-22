import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  margin-bottom: 10px;
`;

export const RangeInput = styled.input.attrs((props) => ({
  placeholder: props.placeholder,
  type: 'text',
}))<{ $error: boolean }>`
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.borderColor};
  height: 20px;
  padding: ${(props) => props.theme.inputPadding};
  width: 100%;
  transition: ${(props) => props.theme.transition};

  ${({ $error }) =>
    $error &&
    css`
      border-color: red;
      transition: ${(props) => props.theme.transition};
    `}
`;
