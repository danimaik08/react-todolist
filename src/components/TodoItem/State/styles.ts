import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 16px 8px;
  display: flex;
  align-items: center;
  &:hover {
    background: lightblue;
  }
`;

export const Text = styled.div`
  font-size: 18px;
`;

export const Buttons = styled.div`
  display: flex;
  align-self: flex-start;
  gap: 8px;
  margin-left: auto;
  padding-left: 8px;
`;

export const Button = styled.button.attrs({ type: 'button' })`
  all: unset;
  padding: 8px;
  border: 1px solid #000;
  border-radius: 2px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
