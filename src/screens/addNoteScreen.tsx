import { TextInput, ScrollView } from "react-native";

export default function AddNoteScreen() {
  return (
    <>
      <ScrollView className="flex-1 p-5 bg-white">
        <TextInput
          textAlignVertical="top"
          multiline={true}
          numberOfLines={2}
          maxLength={30}
          placeholder="Add Title"
          className="text-5xl h-32 py-1"
        ></TextInput>
        <TextInput
          textAlignVertical="top"
          multiline={true}
          placeholder="Description"
          className="text-2xl"
        ></TextInput>
      </ScrollView>
    </>
  );
}
