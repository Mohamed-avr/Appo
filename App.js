import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";

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
                <Text
                  style={{ fontSize: 32, color: "green", fontWeight: "800" }}
                >
                  {e.score}
                </Text>
              </View>
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 16,
                  textTransform: "capitalize",
                }}
              >
                {e.heroName}
              </Text>
              <Text style={{ fontSize: 14, color: "#555" }}>{e.country}</Text>
              <Button
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
    </View>
  );
}
