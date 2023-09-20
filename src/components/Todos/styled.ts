import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSize};
  color: ${(props) => props.theme.textColor};
  transition: ${(props) => props.theme.transition};
  font-weight: 700;
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
  font-size: ${(props) => props.theme.fontSize};
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
  width: 20px;
  height: 20px;
  transition: ${(props) => props.theme.transition};

  &:hover {
    cursor: pointer;
  }

  &:active {
    transition: ${(props) => props.theme.transition};
    transform: ${(props) => props.theme.transformActive};
  }
`;

export const Input = styled.input.attrs({
  placeholder: 'Type a todo...',
  type: 'text',
})`
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.borderColor};
  height: 20px;
  padding: 4px;
  width: 100%;
  transition: ${(props) => props.theme.transition};
`;
