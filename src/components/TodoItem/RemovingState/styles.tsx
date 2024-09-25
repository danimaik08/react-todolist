import styled from 'styled-components';

export const Overlay = styled.div`
  background: #000;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 400px;
  height: 200px;
  background: #fff;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalText = styled.div`
  width: 300px;
  text-align: center;
  font-size: 18px;
`;

export const ModalButtons = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 12px;
`;

export const ModalButton = styled.button.attrs({ type: 'button' })`
  all: unset;
  padding: 4px;
  cursor: pointer;
  &:hover {
    background: lightblue;
  }
`;
