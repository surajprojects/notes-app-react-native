import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Notes: undefined;
  "Add Note": undefined;
  "Edit Note": { id: string };
  Note: { id: string };
};

export type Nav = NativeStackNavigationProp<RootStackParamList>;
