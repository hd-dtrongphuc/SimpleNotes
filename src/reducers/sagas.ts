import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeEvery } from 'redux-saga/effects';

import { firebaseResponse, noteCollection, updateDocument } from '~api';
import { NoteItem, NoteItemUpdate, RawNote } from '~types';
import {
  addNotes,
  addNotesAction,
  addNotesFailed,
  updateNoteList,
  fetchNotesAction,
  updateSingleNoteAction,
} from './features/noteSlice';

function* addNotesAsync(action: PayloadAction<RawNote>) {
  try {
    const response: FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData> =
      yield call([noteCollection, 'add'], {
        value: action.payload.value,
        completed: false,
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
    console.log('fetch');
    const response: firebaseResponse<NoteItem> = yield call([
      noteCollection,
      'get',
    ]);
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

function* watchAddNotesAsync() {
  yield takeEvery(addNotesAction.type, addNotesAsync);
}

function* watchFetchNotesAsync() {
  yield takeEvery(fetchNotesAction.type, fetchNotesAsync);
}

function* watchUpdateNotesAsync() {
  yield takeEvery(updateSingleNoteAction.type, updateNotesAsync);
}

export default function* rootSaga() {
  yield all([
    watchAddNotesAsync(),
    watchFetchNotesAsync(),
    watchUpdateNotesAsync(),
  ]);
}
