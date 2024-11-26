import { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Platform,
  StyleSheet,
  ScrollView,
  FlatList,
  SectionList,
  StatusBar,
  TextInput,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "ios" ? 24 : 36,
        paddingHorizontal: Platform.OS === "android" ? 16 : 16,
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder="enter your name"
        secureTextEntry={true}
        autoCapitalize="characters"
      />

      <TextInput
        style={[styles.textInput, styles.textInputMl]}
        value={name}
        onChangeText={setName}
        placeholder="enter your name"
      />

      <Text style={styles.text}> Your name is: {name}ačić </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    marginTop: 32,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },

  text: {
    fontSize: 24,
    color: "#222",
    fontWeight: "bold",
    marginTop: 24,
  },
  textInputMl: {
    // textAlignVertical: "top",
    minHeight: 100,
  },
});
