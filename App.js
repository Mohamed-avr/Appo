import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from "react-native";

const dataPr = [
  {
    Id: 1,
    heroName: "gabrial",
    score: 1923,
    country: "amazonlIli",
  },
  {
    Id: 2,
    heroName: "gabrial",
    score: 233,
    country: "amazonlIli",
  },
  {
    Id: 3,
    heroName: "gabrial",
    score: 233,
    country: "amazonlIli",
  },
  {
    Id: 4,
    heroName: "gabrial",
    score: 233,
    country: "amazonlIli",
  },

  {
    Id: 5,
    heroName: "gabrial",
    score: 233,
    country: "amazonlIli",
  },
  {
    Id: 6,
    heroName: "gabrial",
    score: 233,
    country: "amazonlIli",
  },
];

export default function App() {
  const [isHidden, setisHidden] = useState(true);

  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 60,
        flex: 1,
      }}
    >
      <StatusBar backgroundColor="#eee" hidden={isHidden} />
      <Text style={{ fontSize: 20, fontWeight: 500 }}> Status bar</Text>
      <Button
        title={isHidden ? "Show" : "Hide"}
        onPress={() => {
          setisHidden(isHidden ? false : true);
        }}
      />
    </View>
  );
}