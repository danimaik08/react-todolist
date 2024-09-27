import { useState, useEffect } from 'react';

import * as UI from './styles';
import { SharedStructBetweenStates, State, StateProps, TodoItemProps } from './types';
import CreatingState from './CreatingState';
import CreatedEditedState from './CreatedEditedState';
import EditingState from './EditingState';
import RemovingState from './RemovingState';

const TodoItem = (props: TodoItemProps) => {
  const { struct, ...other } = props;

  const [state, setState] = useState<State>('creating');
  const [sharedStruct, setSharedStruct] = useState<SharedStructBetweenStates>({
    todoItemStruct: struct,
  });

  useEffect(() => {
    if (struct.value !== sharedStruct.todoItemStruct.value) {
      setSharedStruct({ todoItemStruct: struct });
    }
  }, [struct, state]);

  const stateProps: StateProps = { ...other, sharedStruct, setState, setSharedStruct };

  let stateElement: JSX.Element = null;

  switch (state) {
    case 'creating': {
      stateElement = <CreatingState key={struct.value} {...stateProps} />;
      break;
    }
    case 'created-edited': {
      stateElement = <CreatedEditedState key={struct.value} {...stateProps} />;
      break;
    }
    case 'editing': {
      stateElement = <EditingState key={struct.value} {...stateProps} />;
      break;
    }
    case 'removing': {
      stateElement = <RemovingState key={struct.value} {...stateProps} />;
      break;
    }
    default: {
      throw new Error('TodoItem Error: Unknown state = ' + state);
    }
  }

  return <UI.Wrapper data-testid="todo_item">{stateElement}</UI.Wrapper>;
};

export default TodoItem;
