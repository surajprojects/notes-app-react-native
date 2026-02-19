import { AllNotes, Note } from "../utils/types/notesType";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class NotesManager {
  private notes: AllNotes = [];
  private static instance: NotesManager;

  private constructor() {
    AsyncStorage.getItem("notes")
      .then((data) => {
        if (data) {
          this.notes = JSON.parse(data);
        } else {
          this.notes = [];
        }
      })
      .catch((error) => console.error(error));
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new NotesManager();
    }
    return this.instance;
  }

  getNotes() {
    return this.notes;
  }

  getNote(id: string) {
    const note = this.notes.find((item) => item.id === id);
    if (note) return note;
    return null;
  }

  addNote(note: Note) {
    this.notes.push(note);
    AsyncStorage.setItem("notes", JSON.stringify(this.notes))
      .then(() => {
        return true;
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  }

  updateNote(note: Note) {
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

    AsyncStorage.setItem("notes", JSON.stringify(updatedNotes))
      .then(() => {
        this.notes = updatedNotes;
        return true;
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  }

  removeNote(id: string) {
    const note = this.notes.filter((item) => item.id !== id);
    AsyncStorage.setItem("notes", JSON.stringify(note))
      .then(() => {
        this.notes = note;
        return true;
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  }
}

export const notesManager = NotesManager.getInstance();
