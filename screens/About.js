import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function About({ route, navigation }) {
  // destructure route.params object
  const { pageName, pageNum, pageID } = route.params;

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
        About
      </Text>
      <Text style={{ textAlign: "center", margin: 40 }}>
        {pageName} - {pageNum} - {pageID}
      </Text>
      <Button
        title="go back home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
