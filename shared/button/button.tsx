import { TouchableOpacity } from "react-native-gesture-handler";
import { FC,ReactNode } from "react";
import { Text, StyleProp, ViewStyle } from "react-native";
import { styles } from "./styles";
import { useAppContext } from "../../context/AppContext";


interface ButtonProps {
  title?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  icon?:ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  const { title, onPress, style,icon } = props;
  const { isDarkTheme } = useAppContext();
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn,style]}>
     {icon && icon}
      <Text style={[style,isDarkTheme() && styles.isDarkFont]}>{title}</Text>
    </TouchableOpacity>
  );
};
