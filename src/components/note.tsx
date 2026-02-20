import { Pressable, Text } from "react-native";
import { Nav } from "../utils/types/navigation";
import { useNavigation } from "@react-navigation/native";
import { Note as NoteType } from "../utils/types/notesType";

export default function Note({ noteData }: { noteData: NoteType }) {
  const navigation = useNavigation<Nav>();
  return (
    <>
      <Pressable
        onPress={() => navigation.navigate("Note", { id: noteData.id })}
        className="bg-gray-50 shadow-md px-5 py-3 rounded-lg border border-gray-100"
      >
        <Text className="text-xl font-medium">{noteData.title}</Text>
      </Pressable>
    </>
  );
}
