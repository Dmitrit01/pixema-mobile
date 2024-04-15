import { View, Text } from "react-native";
import { styles } from "./styles";
import { DrawerNavigator } from "../../navigation/drawerNavigator/drawerNavigator";

export const Movies = () => {
  return (
    <View style={styles.wrapper}>
      <DrawerNavigator />
    </View>
  );
};
