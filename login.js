import { Button } from "@rneui/themed";
import React, { component } from "react";
import { View, Text, TextInput, TouchableOpacity, Style } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default LogIn = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleForgotPasswordClick = () => {
    // Handle the forgot password click
    // component={ForgotPassword};

    {
      /* console.log("Forgot password clicked"); */
    }
  };

  const handleLoginClick = () => {
    // Handle the login click
    console.log(`Logging in with ${username} and ${password}`);
  };

  return (
    <View>
      <Text>User name:</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={handleUsernameChange}
        value={username}
      />
      <Text>Password:</Text>
      <TextInput
        secureTextEntry={true}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={handlePasswordChange}
        value={password}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Forgot Password")}>
        <Text>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLoginClick}>
        <Button>Login</Button>
        <Button title="Signup" onPress={() => navigation.navigate("Sign Up")} />
      </TouchableOpacity>
    </View>
  );
};
