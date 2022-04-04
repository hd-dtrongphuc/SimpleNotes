export interface FirebaseError {
  code: string;
  message?: string;
}

export interface NoteItem {
  id: string;
  value: string;
  completed: boolean;
  userId: string;
}

export interface RawNote {
  id: number;
  value: string;
  completed: boolean;
  userId: string;
}

export interface NoteItemUpdate {
  id: string;
  value?: string;
  completed?: boolean;
}
