import React, { useEffect, useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Button, Input, Image, Icon } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <View style={{ height: 50 }} />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email or Username"
          leftIcon={
            <Icon color="#333" name="user" type="font-awesome" size={20} />
          }
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          placeholder="Password"
          leftIcon={
            <Icon color="#444" name="lock" type="font-awesome" size={20} />
          }
          rightIcon={
            <Icon color="#444" name="eye" type="font-awesome" size={20} />
          }
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>
      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <Button
        onPress={() => navigation.navigate("Register")}
        containerStyle={styles.button}
        type="outline"
        title="Register"
      />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 100,
    marginTop: 10,
  },
});
