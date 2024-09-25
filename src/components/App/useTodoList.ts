import { useRef, useState } from 'react';

import TodoList from './TodoList';
import { TodoItemStruct } from '../TodoItem/types';

const useTodoList = () => {
  const todoList = useRef<TodoList>(new TodoList());
  const { 1: forceUpdate } = useState({});

  return {
    elements: todoList.current.elements,
    create() {
      todoList.current.createNewElement();
      forceUpdate({});
    },
    edit(struct: TodoItemStruct) {
      todoList.current.editElement(struct);
      forceUpdate({});
    },
    remove(id: TodoItemStruct['id']) {
      todoList.current.removeElement(id);
      forceUpdate({});
    },
  };
};

export default useTodoList;
