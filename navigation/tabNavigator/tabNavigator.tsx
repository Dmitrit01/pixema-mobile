import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Movies } from "../../screens/tabScreens/movies";
import { SignIn } from "../../screens/tabScreens/signIn";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles";
import { ScreenNamesTab } from "../../types/screenNamesTab";

const TabNavigator = createBottomTabNavigator<TabParamList>();

export type TabParamList = {
  Movies: undefined;
  SignIn: undefined;
};

export const TabStack = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <TabNavigator.Navigator screenOptions={{ headerShown: false }}>
        <TabNavigator.Screen name={ScreenNamesTab.Movies} component={Movies} />
        <TabNavigator.Screen name={ScreenNamesTab.SignIn} component={SignIn} />
      </TabNavigator.Navigator>
    </SafeAreaView>
  );
};
