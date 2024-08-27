import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Greeting = ({ name, clubName }) => {
  return (
    <View
      style={{
        backgroundColor: "#eee",
        padding: 24,
        margin: 10,
        borderRadius: 14,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#333",
          marginTop: 10,
        }}
      >
        Hello, {name}!
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: "#555",
          marginTop: 10,
        }}
      >
        Welcome in the {clubName}clube
      </Text>
    </View>
  );
};

export default Greeting;
