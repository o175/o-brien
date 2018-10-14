import { createAction } from 'redux-actions';

export enum ActionType {
  START_EDITING = 'START_EDITING',
  CLOSE_EDITOR = 'CLOSE_EDITOR',
  CLEAR_CARD = 'CLEAR_CARD',
  EDIT_CARD = 'EDIT_CARD',
}

export const startEditing = createAction<number>(ActionType.START_EDITING);
export const clearCard = createAction(ActionType.CLEAR_CARD);
export const closeEditor = createAction(ActionType.CLOSE_EDITOR);
export const editCard = createAction<string>(ActionType.EDIT_CARD);
