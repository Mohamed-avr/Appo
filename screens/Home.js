import { View, Text, Button } from "react-native";
import React from "react";

export default function Home({ navigation }) {
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
        Home
      </Text>
      <Button
        title="go to about"
        onPress={() => {
          navigation.navigate("About");
        }}
      />
    </View>
  );
}
