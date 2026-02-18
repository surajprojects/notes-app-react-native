import NotesListScreen from "../screens/notesListScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddNoteScreen from "../screens/addNoteScreen";

export default function RootNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Notes">
          <Stack.Screen name="Notes" component={NotesListScreen} />
          <Stack.Screen name="Add Note" component={AddNoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
