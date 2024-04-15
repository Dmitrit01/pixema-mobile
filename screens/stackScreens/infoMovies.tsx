import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_KEY, BASE_URL } from "../../api/url";
import { Image } from "expo-image";
import { RouteProp } from "@react-navigation/native";
import { styles } from "./styles";
import { StackParamList } from "../../navigation/stackNavigator/stackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenNamesStack } from "../../types/screenNamesStack";
import { Button } from "../../shared/button/button";
import { AddDeleteFavoriteMovieAction } from "../../redux/favoritiesMovies/reducer";
import { RootState } from "../../redux/store";
import { useAppContext } from "../../context/AppContext";

interface InfoMoviesScreenProps {
  navigation: NativeStackNavigationProp<StackParamList>;
  route: RouteProp<StackParamList, ScreenNamesStack.InfoMovies>;
}

export interface IMovie {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: any[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}

export const InfoMovies = ({ navigation, route }: InfoMoviesScreenProps) => {
  const { imdbID } = route?.params || "";
  const [infoFilm, setInfoFilm] = useState<IMovie | null>(null);

  const { isDarkTheme } = useAppContext();
  useEffect(() => {
    if (imdbID !== undefined && imdbID !== "") {
      const fetchMovie = async () => {
        const URL = `${BASE_URL}?i=${imdbID}&${API_KEY}`;
        const response = await fetch(URL);
        const data = await response.json();
        setInfoFilm(data);
      };
      fetchMovie();
    }
  }, []);

  const goToBack = () => {
    navigation.goBack();
  };
  const dispatch = useDispatch();

  const addDeleteMovie = () => {
    dispatch(AddDeleteFavoriteMovieAction(infoFilm));
  };

  const Data = useSelector((state: RootState) => state.moviesFV.favoriteMovies);

  const isFavoriteMovie = (movie: IMovie | null): boolean => {
    return Data.some((favMovie) => favMovie.imdbID === infoFilm?.imdbID);
  };

  return (
    <View style={[styles.wrapper, isDarkTheme() && styles.isDark]}>
      {infoFilm && (
        <View style={styles.container}>
          <View style={styles.imgBox}>
            <View style={styles.imgStyle}>
              <Image
                style={styles.imgStyle}
                source={{ uri: infoFilm["Poster"] }}
              />
              <Text style={styles.rating}>{infoFilm["imdbRating"]}</Text>
            </View>
          </View>
          <View style={styles.info}>
            <Text style={isDarkTheme() && styles.isDarkFont}>
              <Text style={styles.infoText}>Название:</Text> {infoFilm["Title"]}
            </Text>
            <Text style={isDarkTheme() && styles.isDarkFont}>
              <Text style={styles.infoText}>Актеры:</Text> {infoFilm["Actors"]}
            </Text>
            <Text style={isDarkTheme() && styles.isDarkFont}>
              <Text style={styles.infoText}>Cтрана:</Text> {infoFilm["Country"]}
            </Text>
            <Text style={isDarkTheme() && styles.isDarkFont}>
              <Text style={styles.infoText}>Жанр:</Text> {infoFilm["Genre"]}
            </Text>
            <Text style={isDarkTheme() && styles.isDarkFont}>
              <Text style={styles.infoText}>Язык:</Text> {infoFilm["Language"]}
            </Text>
            <Text style={isDarkTheme() && styles.isDarkFont}>
              <Text style={styles.infoText}>Сюжет:</Text> {infoFilm["Plot"]}
            </Text>
            <Text style={isDarkTheme() && styles.isDarkFont}>
              <Text style={styles.infoText}>Год:</Text> {infoFilm["Year"]}
            </Text>
          </View>
          <View style={styles.boxBtn}>
            <Button
              title={isFavoriteMovie(infoFilm) ? "Удалить" : "Добавить"}
              style={
                isFavoriteMovie(infoFilm) ? styles.deleteBtn : styles.addBtn
              }
              onPress={addDeleteMovie}
            />
            <Button title="Назад" style={styles.goBackBtn} onPress={goToBack} />
          </View>
        </View>
      )}
    </View>
  );
};
