export interface FirebaseError {
  code: string;
  message?: string;
}

export interface NoteItem {
  id: string;
  value: string;
  completed: boolean;
}

export interface RawNote {
  value: string;
  completed: boolean;
}

export interface NoteItemUpdate {
  id: string;
  value?: string;
  completed?: boolean;
}
