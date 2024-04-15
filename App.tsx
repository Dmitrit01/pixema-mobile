import { SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./navigation/appStack";
import React from "react";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AppProvider } from "./context/AppContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    "inter-Regular": require("./assets/fonts/Inter-Regular.otf"),
    "inter-SemiBold": require("./assets/fonts/Inter-SemiBold.otf"),
    "inter-Bold": require("./assets/fonts/Inter-Bold.otf"),
    "inter-Light": require("./assets/fonts/Inter-Light.otf"),
    "inter-Medium": require("./assets/fonts/Inter-Medium.otf"),
  });
  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: "black" }}></View>;
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Provider store={store}>
        <AppProvider>
          <NavigationContainer>
            <AppStack />
          </NavigationContainer>
        </AppProvider>
      </Provider>
    </SafeAreaView>
  );
}
