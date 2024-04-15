import { StyleSheet } from "react-native";
import { scaleSize } from "../../utils/scaleSize";
import { Colors } from "../../types/colors";

export const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: scaleSize(10),
    paddingVertical: scaleSize(5),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scaleSize(10),
    maxWidth: scaleSize(150),
  },
  isDarkFont:{
    color:Colors.WHITE
  }
});
