import TodoItem from '../TodoItem';
import * as UI from './styles';
import TestIds from './testIds';
import useTodoList from './useTodoList';

export default function App() {
  const { elements, create, edit, remove } = useTodoList();

  return (
    <UI.Wrapper data-testid={TestIds.app_is_exist}>
      <UI.Button data-testid={TestIds.button_add} onClick={create}>
        + Добавить элемент
      </UI.Button>
      <UI.TodoList data-testid={TestIds.todo_list}>
        <UI.TodosHeader>Todo List:</UI.TodosHeader>
        {elements.map((todoStruct) => {
          return (
            <TodoItem
              key={todoStruct.id}
              struct={todoStruct}
              onCreate={edit}
              onEdit={edit}
              onRemove={remove}
              onCancelCreate={remove}
            />
          );
        })}
      </UI.TodoList>
    </UI.Wrapper>
  );
}
