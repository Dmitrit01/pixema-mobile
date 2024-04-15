import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HomePage } from "../screens/HomePage";
import { styles } from "./styles";
import { ScreenNamesStack } from "../types/screenNamesStack";


const appNavigator = createNativeStackNavigator<MainStackParamList>();

export type MainStackParamList = {
  HomePage: undefined;
  
};

export const AppStack = () => {
  return (
    <SafeAreaProvider style={styles.wrapper}>
      <appNavigator.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={ScreenNamesStack.HomePage}
      >
        <appNavigator.Screen
          name={ScreenNamesStack.HomePage}
          component={HomePage}
        />
        </appNavigator.Navigator>
    </SafeAreaProvider>
  );
};
