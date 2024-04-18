import { View, TextInput,  ImageBackground,Button } from "react-native";
import { useState } from "react";
import { styles } from "./styles";

import   auth   from "@react-native-firebase/auth"
import   db   from "@react-native-firebase/database"


export const SignIn = () => {
  const [name,setName]=useState<string | null>(null)
  const [password,setPassword]=useState<string | null>(null)
  const [isRegisted,setIsRegisted]=useState<boolean>(false)

  const login = () => {
    if(name && password){
      setIsRegisted(!isRegisted)
    }else {
     
    }
  }
  // const login = async () => {
  //   try {
  //     const responce = await auth().createUserWithEmailAndPassword(
  //       email,
  //       password
  //     )
  //     console.log(responce)
  //     if(responce.user){
  //       db().ref(`/users/${responce.user.uid}`).set(email)
  //     }
  //   }catch(e){
  //     console.log(e)
  //   }
  // }
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/splash.png")}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <TextInput
            placeholder="Введите имя"
            style={styles.input}
            onChangeText={(text) => setName(text.trim())}
          />
          <TextInput
            placeholder="Введите пароль"
            style={styles.input}
            onChangeText={(text) => setPassword(text.trim())}
          />
          
          <Button title={isRegisted ? 'вы зарегестрированы!': 'зарегестрироваться'} onPress={login} disabled={isRegisted ? true : false}/>
          
        </View>
      </ImageBackground>
    </View>
  );
};


