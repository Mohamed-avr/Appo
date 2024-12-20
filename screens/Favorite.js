import { View, Text, Button } from "react-native";
import React from "react";

export default function Favorite({ navigation }) {
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
        Favorite
      </Text>
      <Button
        title="go  back to About"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}
