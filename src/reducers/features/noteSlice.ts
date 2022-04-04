import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '~reducers/store';

import { NoteItem, NoteItemUpdate, RawNote } from '~types';

export interface NoteState {
  noteList: NoteItem[];
  error: string | null;
  loading: boolean;
}

const initialState: NoteState = {
  noteList: [],
  error: null,
  loading: true,
};

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNotes: (state, action: PayloadAction<NoteItem>) => {
      state.noteList.push(action.payload);
    },
    addNotesFailed: state => {
      state.error = 'Failed to add note';
    },
    fetchNotesAction: state => {
      state.loading = true;
    },
    updateNoteList: (state, action: PayloadAction<NoteItem[]>) => {
      state.noteList = action.payload;
      state.loading = false;
    },
    updateSingleNote: (state, action: PayloadAction<NoteItem>) => {
      const index = state.noteList.findIndex(
        note => note.id === action.payload.id,
      );

      const updated = {
        ...state.noteList[index],
        ...action.payload,
      };

      state.noteList[index] = updated;
    },
    removeNote: (state, action: PayloadAction<string>) => {
      state.noteList = state.noteList.filter(
        note => note.id !== action.payload,
      );
    },
  },
});

export const addNotesAction = createAction<RawNote>('notes/add');
export const updateSingleNoteAction =
  createAction<NoteItemUpdate>('notes/update');
export const removeSingleNoteAction = createAction<string>('notes/remove');

export const {
  addNotes,
  addNotesFailed,
  updateNoteList,
  fetchNotesAction,
  removeNote,
} = noteSlice.actions;

//selectors
export const noteListSelector = (state: RootState) => state.notes.noteList;
export const loadingSelector = (state: RootState) => state.notes.loading;

export default noteSlice.reducer;
