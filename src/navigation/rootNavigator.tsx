import NoteScreen from "../screens/noteScreen";
import AddNoteScreen from "../screens/addNoteScreen";
import NotesListScreen from "../screens/notesListScreen";
import AddNoteBtn from "../components/buttons/addNoteBtn";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../utils/types/navigation";
import EditNoteScreen from "../screens/editNoteScreen";

export default function RootNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
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
          <Stack.Screen name="Edit Note" component={EditNoteScreen} />
          <Stack.Screen name="Note" component={NoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
