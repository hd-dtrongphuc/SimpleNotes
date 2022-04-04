import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

export const noteCollection = firestore().collection('Notes');
export const updateDocument = (
  id: string,
  update: Partial<{ [x: string]: any }>,
) => firestore().doc(id).update(update);
export const ownerNotes = (userId: string) =>
  noteCollection.where('userId', '==', userId).get();
export const deleteDocument = (id: string) => firestore().doc(id).delete();

export type firebaseResponse<T> = FirebaseFirestoreTypes.QuerySnapshot<T>;
