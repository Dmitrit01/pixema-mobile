import { View, Text } from "react-native";
import { useAppContext } from "../../context/AppContext";
import { Button } from "../../shared/button/button";
import { Image } from "expo-image";
import { styles } from "./styles";

export const Settings = () => {
  const { isDarkTheme, toggleTheme } = useAppContext();
  const toggle = () => {
    toggleTheme();
  };
  return (
    <View style={[isDarkTheme() && styles.isDark]}>
      <View style={styles.container}>
        <View>
          <Button
            title={isDarkTheme() ? "Cменить на светлую тему" : "Cменить на темную тему"}
            onPress={toggle}
            icon={<Image
              style={styles.lightDark}
              source={
                isDarkTheme()
                  ? require("./../../assets/settings/night.webp")
                  : require("./../../assets/settings/light.webp")
              }
            />}
          />
        </View>
      </View>
    </View>
  );
};
