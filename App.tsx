import "./src/global.css";
import React, { useEffect } from "react";
import RNBootSplash from "react-native-bootsplash";
import { StatusBar, useColorScheme } from "react-native";
import RootNavigator from "./src/navigation/rootNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const isDarkMode = useColorScheme() === "dark";
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);
  return (
    <>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        <RootNavigator />
      </SafeAreaProvider>
    </>
  );
}
