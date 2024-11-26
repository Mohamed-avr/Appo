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
  Switch,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "ios" ? 24 : 36,
        paddingHorizontal: Platform.OS === "android" ? 16 : 16,
        backgroundColor: isDarkMode ? "#222" : "#fff",
        flex: 1,
      }}
    >
      <Switch
        value={isDarkMode}
        onValueChange={(newValue) => setIsDarkMode(newValue)}
      />
      <Text
        style={[
          styles.SwitchComponentHeading,
          {
            color: isDarkMode ? "#fff" : "#222",
          },
        ]}
      >
        The theme is: {isDarkMode ? "Dark" : "Light"}
      </Text>
      <Text
        style={[
          styles.DarkModeLabel,
          {
            color: isDarkMode ? "#fff" : "#222",
          },
        ]}
      >
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SwitchComponentHeading: {
    fontSize: 39,
    color: "#222",
    fontWeight: "bold",
    marginTop: 24,
  },

  DarkModeLabel: {
    fontSize: 24,
    color: "#222",
    marginTop: 24,
  },
});
