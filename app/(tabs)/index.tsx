import { Image } from "expo-image";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center p-4 bg-red-400">
      <Image
        className="bg-red-500 m-auto text-center items-center justify-center"
        source={require("@/assets/images/favicon.png")}
        style={{ width: 128, height: 128 }}
      />
      <Text className="text-2xl font-bold">Welcome!</Text>
    </View>
  );
}
