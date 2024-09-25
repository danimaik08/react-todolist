import TodoList from '.';

describe('Есть обьект, TodoList, который может добавлять, удалять, редактировать элементы', () => {
  it('TodoList есть', () => {
    const todoList = new TodoList();

    expect(!!todoList).toBeTruthy();
  });
  it('В начале нет элементов', () => {
    const todoList = new TodoList();

    expect(todoList.elements.length).toBe(0);
  });
  it('Создание нового элемента', () => {
    const todoList = new TodoList();

    todoList.createNewElement();

    expect(todoList.elements.length).toBe(1);
  });
  it('Редактирование элемента', () => {
    const todoList = new TodoList();

    todoList.createNewElement();

    const createdElement = todoList.elements[0];

    const editedElementValue = 'new';
    const editedElement = { ...createdElement, value: editedElementValue };

    todoList.editElement(editedElement);

    expect(todoList.elements.length).toBe(1);
    expect(todoList.elements[0].value).toBe(editedElementValue);
  });
  it('Удаление элемента', () => {
    const todoList = new TodoList();

    todoList.createNewElement();

    const createdElement = todoList.elements[0];

    expect(todoList.elements.length).toBe(1);

    todoList.removeElement(createdElement.id);

    expect(todoList.elements.length).toBe(0);
  });
});
