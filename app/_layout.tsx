import { Stack } from "expo-router";
import "react-native-reanimated";
import Toast from "react-native-toast-message";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  return (
    <>
    
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="modal" />
    </Stack>
      <Toast />
    </>
  );
}
