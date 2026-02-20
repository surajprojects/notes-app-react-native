import { Pressable } from "react-native";
import { CirclePlus } from "lucide-react-native";
import { Nav } from "../../utils/types/navigation";
import { useNavigation } from "@react-navigation/native";

export default function AddNoteBtn() {
  const navigation = useNavigation<Nav>();
  return (
    <>
      <Pressable onPress={() => navigation.navigate("Add Note")} className="p-2 pr-1 rounded-full">
        <CirclePlus className="size-14" />
      </Pressable>
    </>
  );
}
