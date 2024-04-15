import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Text } from "react-native";
import { InfoMovies } from "../../screens/stackScreens/infoMovies";
import { ListMovies } from "../../screens/stackScreens/listMovies";
import { ScreenNamesStack } from "../../types/screenNamesStack";

const stackNavigator = createNativeStackNavigator<StackParamList>();

export type StackParamList = {
  ListMovies: undefined;
  InfoMovies: { imdbID: string };
};

export const MoviesStack = () => {
  return (
    <SafeAreaProvider style={styles.wrapper}>
      <stackNavigator.Navigator screenOptions={{ headerShown: false }}>
        <stackNavigator.Screen
          name={ScreenNamesStack.ListMovies}
          component={ListMovies}
        />
        <stackNavigator.Screen
          name={ScreenNamesStack.InfoMovies}
          component={InfoMovies}
        />
      </stackNavigator.Navigator>
    </SafeAreaProvider>
  );
};
