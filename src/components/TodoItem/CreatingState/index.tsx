import { useRef } from 'react';
import Input from '~/components/Input';
import CloseSvg from '~/assets/img/close.svg';

import * as StateUI from '../State/styles';
import { StateAfterCreating, StateProps } from '../types';

interface CreatingStateProps extends StateProps {
  setState: (state: StateAfterCreating) => void;
}

const CreatingState = (props: CreatingStateProps) => {
  const { sharedStruct, setSharedStruct, setState, onCreate, onCancelCreate } = props;

  const ref = useRef<HTMLInputElement>(null);

  return (
    <StateUI.Wrapper
      onClick={() => {
        ref.current.focus();
      }}
    >
      <Input
        data-testid="creating_input"
        autoFocus
        ref={ref}
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
            onCreate(sharedStruct.todoItemStruct);
            setState('created-edited');
          }
        }}
      />
      <StateUI.Buttons>
        <StateUI.Button
          data-testid="button_cancel_creating"
          onClick={() => {
            onCancelCreate(sharedStruct.todoItemStruct.id);
          }}
        >
          <CloseSvg />
        </StateUI.Button>
      </StateUI.Buttons>
    </StateUI.Wrapper>
  );
};

export default CreatingState;
