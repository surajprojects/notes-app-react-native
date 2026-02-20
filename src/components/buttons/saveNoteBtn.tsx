import { Pressable } from "react-native";
import { Check } from "lucide-react-native";

export default function SaveNoteBtn({ onPress }: { onPress: () => void }) {
  return (
    <>
      <Pressable onPress={onPress} className="rounded-full p-2">
        <Check className="size-14" />
      </Pressable>
    </>
  );
}
