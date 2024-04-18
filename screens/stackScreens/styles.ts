import { StyleSheet } from "react-native";
import { scaleSize } from "../../utils/scaleSize";
import { Colors } from "../../types/colors";
import { Fonts } from "../../types/fonts";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: scaleSize(10),
  },
  wrapper: {
    paddingTop: scaleSize(15),
  },
  card: {
    borderWidth: 1,
    borderRadius: scaleSize(10),
    marginBottom: scaleSize(10),
    padding: scaleSize(5),
    backgroundColor:Colors.WHITE
  },
  cardFV: {
    borderWidth: 1,
    borderRadius: scaleSize(10),
    marginBottom: scaleSize(10),
    padding: scaleSize(5),
    backgroundColor:Colors.YELLOW,
    position:'relative'
  },
  body: {
    flexDirection: "row",
    columnGap: scaleSize(10),
  },
  infoContainter:{
    width:'100%',
  },
  img: {
    width: scaleSize(100),
    height: scaleSize(100),
    borderRadius: scaleSize(10),
  },
  imgStyle: {
    width: scaleSize(250),
    height: scaleSize(250),
    borderRadius: scaleSize(10),
  },
  kinoPoisk:{
    width:'100%',
    height:scaleSize(120),
    borderRadius: scaleSize(10),
  },
  imgBox: {
    alignItems: "center",
    marginBottom: scaleSize(10),
    position: "relative",
  },
  info: {
    rowGap: scaleSize(2),
    marginBottom: scaleSize(5),
  },
  rating: {
    position: "absolute",
    top: scaleSize(10),
    right: scaleSize(10),
    color: Colors.WHITE,
    backgroundColor: Colors.GREEN,
    paddingHorizontal: scaleSize(5),
    paddingVertical: scaleSize(3),
    borderRadius: scaleSize(7),
  },
  input: {
    borderWidth:1,
    borderColor:Colors.BLACK,
    paddingHorizontal:scaleSize(8),
    paddingVertical:scaleSize(3),
    marginVertical:scaleSize(10),
  },
  detailsBtn:{
    backgroundColor:Colors.PURPLE,
    color:Colors.WHITE,
  },
  goBackBtn:{
    backgroundColor:Colors.Blue,
    color:Colors.WHITE,
    maxWidth: '100%',
    alignItems:'center'
  },
  addBtn:{
    backgroundColor:Colors.PURPLE,
    color:Colors.WHITE,
    maxWidth: '100%',
    alignItems:'center'
  },
  deleteBtn:{
    backgroundColor:Colors.RED,
    color:Colors.WHITE,
    maxWidth: '100%',
    alignItems:'center'
  },
  infoText:{
    fontFamily:Fonts.InterSemibold
  },
  boxBtn:{
    gap:scaleSize(10)
  },
  heartImg:{
    width:scaleSize(40),
    height:scaleSize(34),
    position:'absolute',
    bottom:scaleSize(8),
    right:scaleSize(25)
  },
  footer:{
    marginTop:scaleSize(10)
  },
  isDark:{
    backgroundColor:Colors.BLACK,
    flex:1
  },
  isDarkFont:{
    color:Colors.WHITE
  },
  isDarkInput:{
    backgroundColor:Colors.WHITE
  }
});
