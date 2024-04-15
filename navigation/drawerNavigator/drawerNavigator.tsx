import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../../screens/drawerScreens/home";
import { Favorities } from "../../screens/drawerScreens/favorities";
import { Settings } from "../../screens/drawerScreens/settings";
import { ScreenNamesDrawer } from "../../types/screenNamesDrawer";

const Drawer = createDrawerNavigator<DrawerParamList>();

export type DrawerParamList = {
  Home: undefined;
  Favorities: undefined;
  Settings: undefined;
};

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={ScreenNamesDrawer.Home} component={Home} />
      <Drawer.Screen
        name={ScreenNamesDrawer.Favorities}
        component={Favorities}
      />
      <Drawer.Screen name={ScreenNamesDrawer.Settings} component={Settings} />
    </Drawer.Navigator>
  );
};
