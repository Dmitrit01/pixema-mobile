import { StyleSheet } from "react-native";
import { scaleSize } from "../../utils/scaleSize";
import { Colors } from "../../types/colors";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    paddingHorizontal: scaleSize(25),
   
  },
  cardFV: {
    borderWidth: 1,
    borderRadius: scaleSize(10),
    marginBottom: scaleSize(10),
    padding: scaleSize(5),
    backgroundColor: Colors.YELLOW,
    position: "relative",
  },
  body: {
    flexDirection: "row",
    columnGap: scaleSize(10),
  },
  infoContainter: {
    width: "100%",
  },
  infoText: {
    fontFamily: "inter-SemiBold",
  },
  img: {
    width: scaleSize(100),
    height: scaleSize(100),
    borderRadius: scaleSize(10),
  },
  imgFavorite: {
    width: "100%",
    height: scaleSize(200),
    borderRadius: scaleSize(10),
  },
  favoriteTitle: {
    marginVertical: scaleSize(10),
    textAlign: "center",
    fontFamily: "inter-Bold",
    fontSize: scaleSize(23),
  },
  heartImg: {
    width: scaleSize(40),
    height: scaleSize(34),
    position: "absolute",
    bottom: scaleSize(8),
    right: scaleSize(25),
  },
  deleteBtn: {
    backgroundColor: Colors.RED,
    color: Colors.WHITE,
  },
  footer: {
    marginTop: scaleSize(10),
  },
  lightDark: {
    width: scaleSize(50),
    height: scaleSize(50),
    marginRight: scaleSize(10),
  },
  isDark: {
    backgroundColor: Colors.BLACK,
    flex: 1,
  },
  isDarkFont: {
    color: Colors.WHITE,
  },
  favoritiesWrapper: {
    paddingTop: scaleSize(10),
  },
});
