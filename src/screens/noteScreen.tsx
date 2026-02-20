import { notesManager } from "../store/data";
import { useCallback, useLayoutEffect, useState } from "react";
import { Note } from "../utils/types/notesType";
import { ScrollView, Text, View } from "react-native";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import DeleteNoteBtn from "../components/buttons/deleteNoteBtn";

export default function NoteScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params as { id: string };

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
      if (route.params) {
        getData(String(id));
      }
    }, []),
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
        <>
          <DeleteNoteBtn onPress={handleDelete} />
        </>
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
