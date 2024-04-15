import { View, TextInput, Button, ImageBackground } from "react-native";
import { useState } from "react";
import { styles } from "./styles";

import   auth   from "@react-native-firebase/auth"
import   db   from "@react-native-firebase/database"

export const SignIn = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const login = async () => {
    try {
      const responce = await auth().createUserWithEmailAndPassword(
        email,
        password
      )
      console.log(responce)
      if(responce.user){
        db().ref(`/users/${responce.user.uid}`).set(email)
      }
    }catch(e){
      console.log(e)
    }
  }
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/splash.png")}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <TextInput
            placeholder="Введите email"
            style={styles.input}
            onChangeText={(text) => setEmail(text.trim())}
          />
          <TextInput
            placeholder="Введите пароль"
            style={styles.input}
            onChangeText={(text) => setPassword(text.trim())}
          />
          
          <Button title="зарегестрироваться" onPress={login}/>
        </View>
      </ImageBackground>
    </View>
  );
};


