import { ScrollView, View } from "react-native";
import Note from "../components/note";

export default function NotesListScreen() {
  return (
    <>
      <ScrollView contentContainerClassName="p-2 pb-20 gap-6" className="p-6 flex-1 gap-6 bg-white">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </ScrollView>
    </>
  );
}
