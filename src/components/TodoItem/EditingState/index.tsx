import { useRef } from 'react';
import Input from '~/components/Input';
import CloseSvg from '~/assets/img/close.svg';

import * as StateUI from '../State/styles';
import { StateAfterEditing, StateProps } from '../types';

interface EditingStateProps extends StateProps {
  setState: (state: StateAfterEditing) => void;
}

const EditingState = (props: EditingStateProps) => {
  const { sharedStruct, setSharedStruct, setState, onEdit } = props;

  const ref = useRef<HTMLInputElement>(null);

  return (
    <StateUI.Wrapper
      onClick={() => {
        ref.current.focus();
      }}
    >
      <Input
        data-testid="editing_input"
        ref={ref}
        autoFocus
        value={sharedStruct.todoItemStruct.value}
        placeholder="Add a text..."
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
          setSharedStruct({
            ...sharedStruct,
            todoItemStruct: { ...sharedStruct.todoItemStruct, value: evt.target.value },
          });
        }}
        onEnter={() => {
          const preparedTodoListStruct = {
            ...sharedStruct.todoItemStruct,
            value: sharedStruct.todoItemStruct.value.trim(),
          };

          setSharedStruct({
            ...sharedStruct,
            todoItemStruct: preparedTodoListStruct,
          });

          if (preparedTodoListStruct.value.trim()) {
            onEdit(sharedStruct.todoItemStruct);
            setState('created-edited');
          }
        }}
      />
      <StateUI.Buttons>
        <StateUI.Button
          data-testid="button_cancel_editing"
          onClick={() => {
            setState('created-edited');
          }}
        >
          <CloseSvg />
        </StateUI.Button>
      </StateUI.Buttons>
    </StateUI.Wrapper>
  );
};

export default EditingState;
