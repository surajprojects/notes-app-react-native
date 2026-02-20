import uuid from "react-native-uuid";
import { AllNotes, Note } from "../utils/types/notesType";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NOTES_STORAGE_KEY = "notes";

export class NotesManager {
  private notes: AllNotes = [];
  private static instance: NotesManager;

  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new NotesManager();
    }
    return this.instance;
  }

  async init() {
    try {
      const data = await AsyncStorage.getItem(NOTES_STORAGE_KEY);
      this.notes = data ? JSON.parse(data) : [];
    } catch (error) {
      console.error(error);
      this.notes = [];
    }
  }

  getNotes() {
    return this.notes;
  }

  getNote(id: string) {
    const note = this.notes.find((item) => item.id === id);
    if (note) return note;
    return null;
  }

  async addNote({ title, description }: { title: string; description: string }): Promise<boolean> {
    try {
      const newNoteData: Note = {
        id: uuid.v4().toString(),
        title: title.trim(),
        description: description.trim(),
        createdOn: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      this.notes.push(newNoteData);
      await AsyncStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(this.notes));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async updateNote(note: Pick<Note, "id" | "title" | "description">): Promise<boolean | undefined> {
    try {
      const findNote = this.getNote(note.id);
      if (!findNote) return undefined;

      const updatedNotes = this.notes.map((item) => {
        if (item.id === note.id) {
          item.title = note.title;
          item.description = note.description;
          item.updatedAt = new Date().toISOString();
        }
        return item;
      });

      await AsyncStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(updatedNotes));
      this.notes = updatedNotes;
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async removeNote(id: string): Promise<boolean> {
    try {
      const note = this.notes.filter((item) => item.id !== id);
      await AsyncStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(note));
      this.notes = note;
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async clearStorage() {
    try {
      await AsyncStorage.clear();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

export const notesManager = NotesManager.getInstance();
