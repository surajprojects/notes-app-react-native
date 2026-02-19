import { Link } from "@react-navigation/native";
import { Text, View } from "react-native";

export default function Note() {
  return (
    <>
      <View className="bg-gray-50 shadow-md px-5 py-3 rounded-lg border border-gray-100">
        <Text className="text-xl font-medium">Apple</Text>
        <Link params={""} screen={"Note"}>
          Click here
        </Link>
      </View>
    </>
  );
}
