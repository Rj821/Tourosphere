import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-xl font-bold text-black dark:text-white">Tourosphere Mobile</Text>
      <Pressable className="mt-4 rounded-md bg-black px-4 py-2 dark:bg-white">
        <Text className="text-white dark:text-black">Get Started</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}