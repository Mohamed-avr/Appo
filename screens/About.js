import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function About() {
  const navigation = useNavigation();
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
      <Button
        title="go to favorite"
        onPress={() => navigation.navigate("Favorite")}
      />
    </View>
  );
}
