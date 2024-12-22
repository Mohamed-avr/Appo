import { View, Text, Button, Pressable } from "react-native";
import React from "react";

export default function Home({ navigation, route }) {
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
        style={{
          backgroundColor: "Pressable",
          padding: 10,
          height: 40,
          borderRadius: 5,
          marginTop: 20,
          backgroundColor: "blue",
          color: "white",
          fontSize: 20,
        }}
        onPress={() => {
          navigation.navigate("About", {
            pageName: "About",
            pageNum: 2,
            pageID: 23,
          });
        }}
      />
    </View>
  );
}
