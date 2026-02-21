import { notesManager } from "../store/data";
import { Note } from "../utils/types/notesType";
import { Nav } from "../utils/types/navigation";
import { ScrollView, Text, View } from "react-native";
import EditNoteBtn from "../components/buttons/editNoteBtn";
import { useCallback, useLayoutEffect, useState } from "react";
import DeleteNoteBtn from "../components/buttons/deleteNoteBtn";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";

export default function NoteScreen() {
  const route = useRoute();
  const navigation = useNavigation<Nav>();
  const { id } = route.params ? (route.params as { id: string }) : { id: "" };

  const [noteData, setNoteData] = useState<Note>({
    id: "",
    title: "",
    description: "",
    createdOn: "",
    updatedAt: "",
  });

  const getData = (id: string) => {
    try {
      const data = notesManager.getNote(id);
      if (data) setNoteData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getData(id);
    }, [id]),
  );

  async function handleDelete() {
    try {
      await notesManager.removeNote(noteData.id);
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View className="flex flex-row gap-x-4">
          <EditNoteBtn
            onPress={() => {
              navigation.navigate("Edit Note", { id });
            }}
          />
          <DeleteNoteBtn onPress={handleDelete} />
        </View>
      ),
    });
  }, [noteData]);

  return (
    <>
      <ScrollView key={noteData.id} className="p-5 bg-white">
        <Text className="text-5xl font-medium min-h-14">{noteData.title}</Text>
        <View className="flex flex-row justify-between my-2">
          <Text className="text-base">Created: {noteData.createdOn.split("T")[0]}</Text>
          <Text className="text-base">Edited: {noteData.updatedAt.split("T")[0]}</Text>
        </View>
        <Text className="text-lg">{noteData.description}</Text>
      </ScrollView>
    </>
  );
}
