import { Stack } from "expo-router";
import { StatusBar } from "react-native"
import "./globals.css"

export default function RootLayout() {
  return (
      <>
        <StatusBar hidden={true}/>
          <Stack
          // screenOptions={{
          //     headerStyle: {
          //         backgroundColor: "#f4511e",
          //     },
          // }}
          >
              <Stack.Screen
                  name="(home)"
                  options={{
                      title: "App",
                      headerShown: false,
                  }}
              />
              {/* <Stack.Screen name="index" /> */}
              <Stack.Screen
                  name="movie/[id]"
                  options={{
                      headerShown: true,
                  }}
              />
          </Stack>
      </>
  );
}
