import { notesManager } from "../store/data";
import { useCallback, useLayoutEffect, useState } from "react";
import { TextInput, ScrollView } from "react-native";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import SaveNoteBtn from "../components/buttons/saveNoteBtn";

export default function EditNoteScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params ? (route.params as { id: string }) : { id: "" };

  const [noteData, setNoteData] = useState({
    title: "",
    description: "",
  });

  async function handleUpdate() {
    try {
      await notesManager.updateNote({
        id,
        ...noteData,
      });
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (field: keyof typeof noteData, value: string) => {
    setNoteData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getData = (id: string) => {
    try {
      const data = notesManager.getNote(id);
      if (data)
        setNoteData((prevData) => {
          return { ...prevData, title: data.title, description: data.description };
        });
    } catch (error) {
      console.error(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getData(id);
    }, [id]),
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <SaveNoteBtn onPress={handleUpdate} />,
    });
  }, [noteData]);
  return (
    <>
      <ScrollView className="flex-1 p-5 bg-white">
        <TextInput
          textAlignVertical="top"
          multiline={true}
          numberOfLines={2}
          maxLength={30}
          placeholder="Add Title"
          value={noteData.title}
          onChangeText={(text) => handleChange("title", text)}
          className="text-5xl h-32 py-1"
        ></TextInput>
        <TextInput
          textAlignVertical="top"
          multiline={true}
          placeholder="Description"
          value={noteData.description}
          onChangeText={(text) => handleChange("description", text)}
          className="text-2xl"
        ></TextInput>
      </ScrollView>
    </>
  );
}
