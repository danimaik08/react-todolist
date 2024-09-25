import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '.';
import TestIds from './testIds';

describe(`Приложение есть`, () => {
  it('=', () => {
    const app = render(<App />);

    expect(app.getByTestId(TestIds.app_is_exist)).toBeInTheDocument();
  });
});

describe(`Это ui интерфейс (кнопка добавления, список)`, () => {
  it('Есть кнопка добавления', () => {
    const app = render(<App />);

    expect(app.getByTestId(TestIds.button_add)).toBeInTheDocument();
  });
  it('Есть cписок', () => {
    const app = render(<App />);

    expect(app.getByTestId(TestIds.todo_list)).toBeInTheDocument();
  });
  it('У пустого списка один элемент, его заголовок', () => {
    const app = render(<App />);

    const todoList = app.getByTestId(TestIds.todo_list);

    expect(todoList.children.length).toBe(1);
  });
  it('При клике на кнопку создается новый элемент списка', async () => {
    const app = render(<App />);

    const button = app.getByTestId(TestIds.button_add);
    const todoList = app.getByTestId(TestIds.todo_list);

    await userEvent.click(button);

    expect(todoList.children.length).toBe(2); // 2 (header + new element)
  });
});
