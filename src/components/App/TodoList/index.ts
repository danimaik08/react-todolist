import { TodoItemStruct } from '~/components/TodoItem/types';

export default class TodoList {
  private innerElements: TodoItemStruct[];

  constructor() {
    this.innerElements = [];
  }

  get elements(): Readonly<typeof this.innerElements> {
    return this.innerElements;
  }

  public createNewElement(): void {
    this.innerElements.push({
      id: Date.now(),
      value: '',
    });
  }
  public editElement(struct: TodoItemStruct): void {
    const editingElementIdx = this.innerElements.findIndex((element) => element.id === struct.id);

    const firstPart = this.innerElements.slice(0, editingElementIdx);
    const clonedStruct = { ...struct };
    const lastPart = this.innerElements.slice(editingElementIdx + 1);

    this.innerElements = [...firstPart, clonedStruct, ...lastPart];
  }
  public removeElement(id: TodoItemStruct['id']): void {
    this.innerElements = this.innerElements.filter((element) => element.id !== id);
  }
}
