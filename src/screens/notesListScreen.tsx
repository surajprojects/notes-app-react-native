import Note from "../components/note";
import { notesManager } from "../store/data";
import { useState, useCallback } from "react";
import { ScrollView, Text } from "react-native";
import { AllNotes } from "../utils/types/notesType";
import { useFocusEffect } from "@react-navigation/native";

export default function NotesListScreen() {
  const [notesList, setNotesList] = useState<AllNotes>([]);

  const getNotes = () => {
    try {
      setNotesList([...notesManager.getNotes()]);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getNotes();
    }, []),
  );
  return (
    <>
      <ScrollView contentContainerClassName="p-2 pb-20 gap-6" className="p-6 flex-1 gap-6 bg-white">
        {notesList.length > 0 ? (
          notesList.map((note) => {
            return <Note key={note.id} noteData={note} />;
          })
        ) : (
          <Text className="text-center italic">No notes found!!!</Text>
        )}
      </ScrollView>
    </>
  );
}
