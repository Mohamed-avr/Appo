import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Box({ children, style }) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
  },
  text: {
    color: "white",
    fontSize: 24,
  },
});
