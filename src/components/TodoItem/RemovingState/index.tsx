import TrashSvg from '~/assets/img/trash.svg';
import EditSvg from '~/assets/img/edit.svg';

import * as StateUI from '../State/styles';
import * as UI from './styles';
import { StateAfterDeleting, StateProps } from '../types';

interface RemovingStateProps extends StateProps {
  setState: (state: StateAfterDeleting) => void;
}

const RemovingState = (props: RemovingStateProps) => {
  const { sharedStruct, setState, onRemove } = props;

  return (
    <>
      <UI.Overlay />
      <UI.ModalWrapper data-testid="removing_modal">
        <UI.Modal>
          <UI.ModalText>Вы уверены, что хотите удалить элемент?</UI.ModalText>
          <UI.ModalButtons>
            <UI.ModalButton
              data-testid="modal_yes"
              onClick={() => {
                onRemove(sharedStruct.todoItemStruct.id);
              }}
            >
              Да
            </UI.ModalButton>
            <UI.ModalButton
              data-testid="modal_no"
              onClick={() => {
                setState('created-edited');
              }}
            >
              Нет
            </UI.ModalButton>
          </UI.ModalButtons>
        </UI.Modal>
      </UI.ModalWrapper>
      <StateUI.Wrapper>
        <StateUI.Text>{sharedStruct.todoItemStruct.value}</StateUI.Text>
        <StateUI.Buttons>
          <StateUI.Button>
            <EditSvg />
          </StateUI.Button>
          <StateUI.Button>
            <TrashSvg />
          </StateUI.Button>
        </StateUI.Buttons>
      </StateUI.Wrapper>
    </>
  );
};

export default RemovingState;
