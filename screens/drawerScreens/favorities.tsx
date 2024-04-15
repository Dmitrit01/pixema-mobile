import { View, Text, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { Image } from "expo-image";
import { styles } from "./styles";
import { Button } from "../../shared/button/button";
import { AddDeleteFavoriteMovieAction } from "../../redux/favoritiesMovies/reducer";
import { useAppContext } from "../../context/AppContext";
export const Favorities = () => {
  const Data = useSelector((state: RootState) => state.moviesFV.favoriteMovies);
  const { isDarkTheme } = useAppContext();
  const dispatch = useDispatch();
  console.log(Data);

  return (
    <View style={[styles.favoritiesWrapper, isDarkTheme() && styles.isDark]}>
      <View style={styles.container}>
        {Data.length === 0 ? (
          <View>
            <Text
              style={[styles.favoriteTitle, isDarkTheme() && styles.isDarkFont]}
            >
              Добавляйте сюда любимые фильмы
            </Text>
            <Image
              style={styles.imgFavorite}
              source={require("../../assets/favoritiesMovies/empty.webp")}
            />
          </View>
        ) : (
          <FlatList
            data={Data}
            renderItem={({ item }) => (
              <View style={styles.cardFV}>
                <Image
                  style={styles.heartImg}
                  source={require("../../assets/listMovies/heart.png")}
                />
                <View style={styles.body}>
                  <Image style={styles.img} source={{ uri: item["Poster"] }} />
                  <View style={styles.infoContainter}>
                    <Text>
                      <Text style={styles.infoText}>Title:</Text>
                      {item["Title"]}
                    </Text>
                    <Text>
                      <Text style={styles.infoText}>Type:</Text> {item["Type"]}
                    </Text>
                    <Text>
                      <Text style={styles.infoText}>Year:</Text> {item["Year"]}
                    </Text>
                    <View style={styles.footer}>
                      <Button
                        title="Удалить"
                        onPress={() =>
                          dispatch(AddDeleteFavoriteMovieAction(item))
                        }
                        style={styles.deleteBtn}
                      />
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};
