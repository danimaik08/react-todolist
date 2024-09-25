type Creating = 'creating';
type CreatedEdited = 'created-edited';
type Editing = 'editing';
type Removing = 'removing';

export type State = Creating | CreatedEdited | Editing | Removing;

export type StateAfterCreating = CreatedEdited;
export type StateAfterCreatedEdited = Editing | Removing;
export type StateAfterEditing = CreatedEdited;
export type StateAfterDeleting = CreatedEdited;

export type TodoItemStruct = {
  id: number;
  value: string;
};

export interface TodoItemProps {
  struct: TodoItemStruct;
  onCreate: (struct: TodoItemStruct) => void;
  onEdit: (struct: TodoItemStruct) => void;
  onRemove: (id: TodoItemStruct['id']) => void;
  onCancelCreate: (struct: TodoItemStruct['id']) => void;
}

export interface SharedStructBetweenStates {
  todoItemStruct: TodoItemStruct;
}

export interface StateProps extends Omit<TodoItemProps, 'struct'> {
  sharedStruct: SharedStructBetweenStates;
  setState: (state: State) => void;
  setSharedStruct: (state: SharedStructBetweenStates) => void;
}
