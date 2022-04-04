import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

export const noteCollection = firestore().collection('Notes');
export const updateDocument = (
  id: string,
  update: Partial<{ [x: string]: any }>,
) => firestore().doc(id).update(update);

export type firebaseResponse<T> = FirebaseFirestoreTypes.QuerySnapshot<T>;
