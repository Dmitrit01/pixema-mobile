import { StyleSheet } from "react-native";
import { Colors } from "../../types/colors";
import { scaleSize } from "../../utils/scaleSize";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor:Colors.BLACK
  },
  container: {
    marginHorizontal: scaleSize(10),
  },
  backgroundImage:{
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderWidth:1,
    borderColor:Colors.WHITE,
    backgroundColor:Colors.WHITE,
    paddingHorizontal:scaleSize(8),
    paddingVertical:scaleSize(3),
    marginVertical:scaleSize(10),
  },
});
