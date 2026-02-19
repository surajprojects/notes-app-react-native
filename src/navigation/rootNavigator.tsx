import NoteScreen from "../screens/noteScreen";
import AddNoteBtn from "../components/addNoteBtn";
import AddNoteScreen from "../screens/addNoteScreen";
import NotesListScreen from "../screens/notesListScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function RootNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Notes">
          <Stack.Screen
            name="Notes"
            component={NotesListScreen}
            options={{
              headerRight: () => <AddNoteBtn />,
            }}
          />
          <Stack.Screen name="Add Note" component={AddNoteScreen} />
          <Stack.Screen name="Note" component={NoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
