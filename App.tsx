import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-lg font-bold text-white">
        Adolfo Monteiro Manuel
      </Text>
      <Text className="text-xl font-bold text-red-900">
        Artur Makumba Paulo
      </Text>
      <StatusBar style="light" />
    </View>
  );
}
