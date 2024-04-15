import { Text, View, TextInput, FlatList } from "react-native";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../../api/url";
import { ScreenNamesStack } from "../../types/screenNamesStack";
import { styles } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../navigation/stackNavigator/stackNavigator";
import { Button } from "../../shared/button/button";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useAppContext } from "../../context/AppContext";
interface InfoMoviesScreenProps {
  navigation: NativeStackNavigationProp<StackParamList>;
}

export const ListMovies = ({ navigation }: InfoMoviesScreenProps) => {
  const { isDarkTheme, toggleTheme } = useAppContext();
  const [movies, setMovies] = useState(null);
  const [titleMovie, setTitleMovie] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      const URL = `${BASE_URL}?s=${titleMovie}&${API_KEY}`;
      const response = await fetch(URL);
      const Data = await response.json();
      const finalData = Data.Search;
      setMovies(finalData);
    };
    fetchMovie();
  }, [titleMovie]);

  const Data = useSelector((state: RootState) => state.moviesFV.favoriteMovies);

  const isFavoriteMovie = (id: any): boolean => {
    return Data.some((favMovie) => favMovie.imdbID === id);
  };

  return (
    <View style={isDarkTheme() && styles.isDark}>
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => setTitleMovie(text)}
          value={titleMovie}
          placeholder="Введите название фильма"
          style={[styles.input,isDarkTheme() && styles.isDarkInput]}
        />
        {movies ? (
          <FlatList
            data={movies}
            renderItem={({ item }) => (
              <View
                style={
                  isFavoriteMovie(item["imdbID"]) ? styles.cardFV : styles.card
                }
              >
                {isFavoriteMovie(item["imdbID"]) && (
                  <Image
                    style={styles.heartImg}
                    source={require("../../assets/listMovies/heart.png")}
                  />
                )}
                <View style={styles.body}>
                  <Image style={styles.img} source={{ uri: item["Poster"] }} />
                  <View style={styles.infoContainter}>
                    <Text>
                      <Text style={styles.infoText}>Title:</Text>{" "}
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
                        title="Подробнее"
                        style={styles.detailsBtn}
                        onPress={() =>
                          navigation.navigate(ScreenNamesStack.InfoMovies, {
                            imdbID: item["imdbID"],
                          })
                        }
                      />
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        ) : (
          <Image
            style={styles.kinoPoisk}
            source={require("../../assets/listMovies/kinopoisk.jpg")}
          />
        )}
      </View>
    </View>
  );
};
