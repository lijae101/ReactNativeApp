import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind"


const SafeAreaView = styled(RNSafeAreaView)

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-xl font-bold text-success">Hello, World!</Text>

      <Link
        href="/onboarding"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        <Text>Get Started</Text>
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        <Text>Go to Sign in</Text>
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        <Text>Go to Sign Up</Text>
      </Link>

      <Link href="/subscriptions/spotify">Spotify Subscription</Link>
      <Link
        href={{ pathname: "/subscriptions/[id]", params: { id: "claude" } }}
      >
        Claude Max Subscription
      </Link>
    </SafeAreaView>
  );
}
