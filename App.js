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
  const [isVisible, setisVisible] = useState(false);
  const [cardNum, setCardNum] = useState(dataPr);
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 60,
        flex: 1,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          flexDirection: "row",
          display: "flex",
          flexWrap: "wrap",
          overflow: "hidden",
          gap: 16,
          borderRadius: 14,
          marginTop: 42,
        }}
      >
        {dataPr.map((e) => {
          return (
            <View
              key={e.Id}
              style={{
                width: 170,
                height: 200,
                backgroundColor: "#fff",
                borderColor: "#eee",
                borderWidth: 1,
                borderRadius: 14,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "left",
                padding: 16,
              }}
            >
              <View style={{ height: 70, color: "" }}>
                <Pressable
                  onPress={() => console.log("Press on card :" + e.Id)}
                >
                  <Text
                    style={{ fontSize: 32, color: "green", fontWeight: "800" }}
                  >
                    {e.score}
                  </Text>
                </Pressable>
              </View>
              <Pressable onLongPress={() => console.log("long Press:" + e.Id)}>
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 16,
                    textTransform: "capitalize",
                  }}
                >
                  {e.heroName}
                </Text>
              </Pressable>
              <Text style={{ fontSize: 14, color: "#555" }}>{e.country}</Text>
              <Button
                onPress={() => {
                  setisVisible(true);
                  setCardNum(e.Id);
                }}
                title="Support"
                color="#222"
                style={{
                  margin: 10,
                  borderRadius: 8,
                }}
              />
            </View>
          );
        })}
      </ScrollView>
      <Modal
        color="#000"
        transparent={true}
        style={{
          backgroundColor: "red",
        }}
        visible={isVisible}
        animationType="slide"
        onRequestClose={() => {
          setisVisible(false);
          console.log("Modal has been closed.");
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              width: 300,
              height: 300,
              backgroundColor: "#fff",
              padding: 16,
              borderRadius: 8,
            }}
          >
            <Text style={{ flex: 1, fontSize: 18, fontWeight: "500" }}>
              Thank you for Supporting {cardNum}
            </Text>
            <Button
              title="Close"
              color={"#000"}
              borderRadius={8}
              onPress={() => setisVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}