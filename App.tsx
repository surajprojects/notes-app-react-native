import "./src/global.css";
import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { notesManager } from "./src/store/data";
import RootNavigator from "./src/navigation/rootNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  useEffect(() => {
    const load = async () => {
      await notesManager.init();
    };
    load();
  }, []);
  return (
    <>
      <SafeAreaProvider>
        <StatusBar barStyle={"dark-content"} />
        <RootNavigator />
      </SafeAreaProvider>
    </>
  );
}
