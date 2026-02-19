export interface Note {
  id: string;
  title: string;
  description: string;
  createdOn: string;
  updatedAt: string;
}

export type AllNotes = Note[];
