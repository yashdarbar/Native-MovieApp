import { Stack } from "expo-router";
import "./globals.css"

export default function RootLayout() {
  return (
      <Stack
          // screenOptions={{
          //     headerStyle: {
          //         backgroundColor: "#f4511e",
          //     },
          // }}
      >
          <Stack.Screen name="(home)"
          options={{
            title: "App",
            headerShown: false
          }}/>
          {/* <Stack.Screen name="index" /> */}
      </Stack>
  );
}
