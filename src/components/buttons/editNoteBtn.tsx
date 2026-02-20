import { Link } from "@react-navigation/native";
import { CirclePlus } from "lucide-react-native";

export default function EditNoteBtn({ id }: { id: string }) {
  return (
    <>
      <Link params={id} screen={"Edit Note"} className="p-2 pr-1 rounded-full">
        <CirclePlus className="size-14" />
      </Link>
    </>
  );
}
