import { handleActions } from 'redux-actions';
import { ActionType } from '../actions';
export type TAssignments = {
  [from: number]: string;
};

export type TState = {
  readonly assignments: TAssignments;
  readonly editingCard: number | null;
};

const initialState = {
  assignments: {
    4: 'Tim Roth',
    7: 'James Bond',
    23: 'Michael Jordan',
  },
  editingCard: 23
};

const reducer = handleActions(
  {
    [ActionType.START_EDITING]: (state, action) => (
      action.payload !== null ?
        { ...state, editingCard: (action.payload as any) } :
        state
    ),
    [ActionType.CLOSE_EDITOR]: (state) => ({ ...state, editingCard: null }),
    [ActionType.CLEAR_CARD]: (state) => ({
      ...state,
      assignments: { ...state.assignments, [state.editingCard]: null },
      editingCard: null,
    }),
    [ActionType.EDIT_CARD]: (state, action) => ({
      ...state,
      assignments: { ...state.assignments, [state.editingCard]: action.payload },
      editingCard: null,
    }),
  },
  initialState
);



export default reducer;
