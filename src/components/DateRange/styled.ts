import styled, { css } from 'styled-components';

const space = '10px';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: ${space};
  margin-bottom: ${space};
`;

export const RangeInput = styled.input.attrs((props) => ({
  placeholder: props.placeholder,
  type: 'text',
}))<{ $error: boolean }>`
  border-radius: ${({ theme }) => theme.spaces.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spaces.inputPadding};
  transition: ${({ theme }) => theme.animation.transition};
  height: 20px;
  width: 100%;

  ${({ $error }) =>
    $error &&
    css`
      border-color: ${({ theme }) => theme.colors.error};
      transition: ${({ theme }) => theme.animation.transition};
    `}
`;
