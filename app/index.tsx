import { Text, View } from "react-native";
import "./globals.css"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow",
      }}
    >
      <Text className="text-black font-bold">XYZ Edit app/index.tsx to edit this screen.</Text>
      <Text>What is the matter</Text>
    </View>
  );
}
