import { useState } from "react";
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TextInput,
  Image,
  Button,
  KeyboardAvoidingView,
} from "react-native";

export default function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // validation form function
  const validateForm = () => {
    let errors = {};

    //  if the username is empty "false" add the property to the object
    if (!userName) errors.userName = "Username is required";

    //  if the passowrd is empty "false" add the property to the object
    if (!password) errors.password = "Password is required";

    // if we have a property inside the error object return false
    return Object.keys(errors).length == 0;
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 80}
      style={{
        paddingTop: Platform.OS === "ios" ? 24 : 36,
        paddingHorizontal: Platform.OS === "android" ? 16 : 16,
        backgroundColor: "#f0f0f0",
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <View style={styles.form}>
        <View style={styles.image}></View>
        <Text style={styles.label}> Username</Text>
        <TextInput
          style={styles.input}
          value={userName}
          placeholder="Enter your name"
          onChangeText={setUserName}
        />
        {errors.userName && (
          <Text style={styles.errorText}>{errors.userName}</Text>
        )}

        <Text style={styles.label}> Passowrd</Text>
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter your passowrd"
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}

        <Button style={styles.login} title="Submit" />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  SwitchComponentHeading: {
    fontSize: 39,
    color: "#222",
    fontWeight: "bold",
    marginTop: 24,
  },

  form: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  input: {
    height: 48,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  login: {
    backgroundColor: "#000",
    color: "white",
    padding: 10,
    color: "#f194ff",
  },
  image: {
    width: 300,
    height: 250,
    alignSelf: "center",
    marginBottom: 50,
    backgroundColor: "#ccc",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
});
