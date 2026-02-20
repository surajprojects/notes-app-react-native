import { Pressable } from "react-native";
import { PencilLineIcon } from "lucide-react-native";

export default function EditNoteBtn({ onPress }: { onPress: () => void }) {
  return (
    <>
      <Pressable onPress={onPress} className="p-2 pr-1 rounded-full">
        <PencilLineIcon className="size-14" />
      </Pressable>
    </>
  );
}
