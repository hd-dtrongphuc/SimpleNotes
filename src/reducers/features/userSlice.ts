import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '~reducers/store';

import { NoteItem, NoteItemUpdate, RawNote } from '~types';

export interface UserState {
  userId: string;
}

const initialState: UserState = {
  userId: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
  },
});

export const { setUserId } = userSlice.actions;

//selectors
export const userIdSelector = (state: RootState): string => state.user.userId;

export default userSlice.reducer;
