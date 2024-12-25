import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function About({ route, navigation }) {
  // destructure route.params object
  const { pageName } = route.params;

  return (
    <View
      style={{
        padding: 16,
      }}
    >
      <Text
        style={{
          fontSize: 26,
          textAlign: "center",
          marginTop: 250,
        }}
      >
        this is the new page name {pageName}
      </Text>
      <Text style={{ textAlign: "center", margin: 40 }}></Text>
      <Button
        title="go back home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
