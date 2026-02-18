import { Text, View } from "react-native";
import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

export default function NotesListScreen() {
  const navigation = useNavigation();
  return (
    <>
      <View className="flex-1 items-center justify-center bg-white">
        <Text>Tiger Insights</Text>
        <Button onPress={() => navigation.navigate("Add Note")}>Add Note</Button>
      </View>
    </>
  );
}
