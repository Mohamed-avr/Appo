import {
  View,
  SafeAreaView,
  Text,
  Platform,
  StyleSheet,
  ScrollView,
  FlatList,
  SectionList,
} from "react-native";

import { StatusBar } from "expo-status-bar";

const Data = [
  {
    type: "Grass",
    data: ["Bulbasaur", "Ivysaur", "Venusaur"],
  },
  {
    type: "Fire",
    data: ["Charmander", "Charmeleon", "Charizard"],
  },
  {
    type: "Water",
    data: ["Squirtle", "Wartortle", "Blastoise"],
  },
  { type: "Electric", data: ["Pikachu", "Raichu"] },
];

export default function App() {
  console.log(Data);
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "ios" ? 24 : 36,
        paddingHorizontal: Platform.OS === "android" ? 16 : 16,
        backgroundColor: "#000",
        flex: 1,
      }}
    >
      <SectionList
        sections={Data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: "#fff",
                padding: 10,
                width: "100%",
                borderRadius: 0,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#000",
                  fontWeight: "medium",
                }}
              >
                {item}
              </Text>
            </View>
          );
        }}
        renderSectionHeader={({ section: { type } }) => (
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              fontWeight: "bold",
              color: "#fff",
              padding: 10,
              marginTop: 10,
            }}
          >
            {type}
          </Text>
        )}
        renderSectionFooter={({ section }) => {
          return (
            <View
              style={{
                backgroundColor: "#000",
                padding: 10,
                width: "100%",
                borderRadius: 0,
                marginTop: 6,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#fff",
                  fontWeight: "medium",
                }}
              >
                Total: {section.data.length}
              </Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

