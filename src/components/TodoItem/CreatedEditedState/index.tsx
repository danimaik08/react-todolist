import TrashSvg from '~/assets/img/trash.svg';
import EditSvg from '~/assets/img/edit.svg';

import * as StateUI from '../State/styles';
import { StateAfterCreatedEdited, StateProps } from '../types';

interface CreatedEditedStateProps extends StateProps {
  setState: (state: StateAfterCreatedEdited) => void;
}

const CreatedEditedState = (props: CreatedEditedStateProps) => {
  const { sharedStruct, setState } = props;

  return (
    <StateUI.Wrapper>
      <StateUI.Text data-testid="text">{sharedStruct.todoItemStruct.value}</StateUI.Text>
      <StateUI.Buttons>
        <StateUI.Button
          data-testid="button_edit_todo_item"
          onClick={() => {
            setState('editing');
          }}
        >
          <EditSvg />
        </StateUI.Button>
        <StateUI.Button
          data-testid="button_remove_todo_item"
          onClick={() => {
            setState('removing');
          }}
        >
          <TrashSvg />
        </StateUI.Button>
      </StateUI.Buttons>
    </StateUI.Wrapper>
  );
};

export default CreatedEditedState;
