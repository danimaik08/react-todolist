import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 8px;
`;

export const TodoList = styled.div`
  margin-top: 16px;
`;

export const TodosHeader = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const Button = styled.button.attrs({ type: 'button' })`
  font-size: 18px;
  font-weight: 500;
  background: rgb(16, 87, 201);
  color: #fff;
  border-radius: 4px;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;
