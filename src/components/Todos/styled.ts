import styled from 'styled-components';

const size = '20px';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size};
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.animation.transition};
  font-weight: ${({ theme }) => theme.font.bold};
  text-align: center;
  margin-bottom: 10px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  justify-content: space-between;
`;

export const TodoList = styled.ol`
  flex: 1 1 auto;
  overflow-y: auto;
  font-size: ${({ theme }) => theme.font.size};
  max-height: 145px;
  padding-right: 2px;
  margin-right: -4px;
`;

export const Field = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  column-gap: 10px;
`;

export const ButtonAdd = styled.button.attrs({
  type: 'submit',
})`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img.attrs(({ src }) => ({
  src: src,
  alt: 'add todo',
}))`
  width: ${size};
  height: ${size};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    cursor: pointer;
  }

  &:active {
    transition: ${({ theme }) => theme.animation.transition};
    transform: ${({ theme }) => theme.animation.transformActive};
  }
`;

export const Input = styled.input.attrs({
  placeholder: 'Type a todo...',
  type: 'text',
})`
  border-radius: ${({ theme }) => theme.spaces.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  height: ${size};
  padding: 4px;
  width: 100%;
  transition: ${({ theme }) => theme.animation.transition};
`;
