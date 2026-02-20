import { Pressable } from "react-native";
import { Trash } from "lucide-react-native";

export default function DeleteNoteBtn({ onPress }: { onPress: () => void }) {
  return (
    <>
      <Pressable onPress={onPress} className="rounded-full p-2">
        <Trash className="size-14" />
      </Pressable>
    </>
  );
}
