import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-5xl font-sans-extrabold">Home</Text>

      <Link
        href="/onboarding"
        className="mt-4 rounded font-sans-bold bg-primary text-white p-4"
      >
        <Text>Get Started</Text>
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-primary font-sans-bold text-white p-4"
      >
        <Text>Go to Sign in</Text>
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-primary text-white p-4 font-sans-bold"
      >
        <Text>Go to Sign Up</Text>
      </Link>
    </SafeAreaView>
  );
}
