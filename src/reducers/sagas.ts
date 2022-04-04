import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, select, takeEvery } from 'redux-saga/effects';

import {
  deleteDocument,
  firebaseResponse,
  noteCollection,
  ownerNotes,
  updateDocument,
} from '~api';
import { NoteItem, NoteItemUpdate, RawNote } from '~types';
import {
  addNotes,
  addNotesAction,
  addNotesFailed,
  updateNoteList,
  fetchNotesAction,
  updateSingleNoteAction,
  removeNote,
  removeSingleNoteAction,
} from './features/noteSlice';
import { userIdSelector } from './features/userSlice';

function* addNotesAsync(action: PayloadAction<RawNote>) {
  try {
    const response: FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData> =
      yield call([noteCollection, 'add'], {
        value: action.payload.value,
        completed: action.payload.completed,
        userId: action.payload.userId,
      });

    yield put(
      addNotes({
        ...action.payload,
        id: response.path,
      }),
    );
  } catch (error) {
    yield put(addNotesFailed);
  }
}

function* fetchNotesAsync() {
  try {
    const userId: string = yield select(userIdSelector);
    const response: firebaseResponse<NoteItem> = yield call(
      [noteCollection, ownerNotes],
      userId,
    );
    const data: NoteItem[] = [];
    response.forEach(doc => {
      return doc && data.push({ ...doc.data(), id: doc.ref.path });
    });
    yield put(updateNoteList(data));
  } catch (error) {
    console.log(error);
  }
}

function* updateNotesAsync(action: PayloadAction<NoteItemUpdate>) {
  try {
    const { id, ...update } = action.payload;
    yield call([noteCollection, updateDocument], id, update);
  } catch (error) {
    console.log(error);
  }
}

function* removeNotesAsync(action: PayloadAction<string>) {
  try {
    const id = action.payload;
    yield call([noteCollection, deleteDocument], id);
    yield put(removeNote(id));
  } catch (error) {
    console.log(error);
  }
}

function* watchAddNotesAsync() {
  yield takeEvery(addNotesAction.type, addNotesAsync);
}

function* watchFetchNotesAsync() {
  yield takeEvery(fetchNotesAction.type, fetchNotesAsync);
}

function* watchUpdateNotesAsync() {
  yield takeEvery(updateSingleNoteAction.type, updateNotesAsync);
}

function* watchRemoveNotesAsync() {
  yield takeEvery(removeSingleNoteAction.type, removeNotesAsync);
}

export default function* rootSaga() {
  yield all([
    watchAddNotesAsync(),
    watchFetchNotesAsync(),
    watchUpdateNotesAsync(),
    watchRemoveNotesAsync(),
  ]);
}
