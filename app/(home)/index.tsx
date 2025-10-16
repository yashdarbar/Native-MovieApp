import { Text, View } from "react-native";
import "../globals.css"
// import { Link } from 'expo-router';

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-[#5df1ef]"
    >
      <Text className="text-black text-5xl font-bold">Do the work!</Text>
      <Text className="mt-2 bg-[#a2a6a3] text-white">Nobody gonna say you</Text>
      {/* <Link href="/details">View Detailsss</Link> */}
    </View>
  );
}
