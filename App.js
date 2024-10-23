import {
  View,
  SafeAreaView,
  Text,
  Platform,
  StyleSheet,
  ScrollView,
} from "react-native";
import PokemonData from "./Data.json";
import { StatusBar } from "expo-status-bar";

export default function App() {
  console.log(PokemonData);
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "ios" ? 24 : 16,
        paddingHorizontal: Platform.OS === "android" ? 16 : 16,
        backgroundColor: "#000",
        flex: 1,
      }}
    >
      <ScrollView>
        {PokemonData.map((pok) => {
          return (
            <View key={pok.id} style={styles.pokCard}>
              <Text style={styles.pokCardText}>{pok.name}</Text>
              <Text style={styles.pokCardTextType}>{pok.type}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pokCard: {
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 8,
    marginVertical: 4,
    borderWidth: 2,
    backgroundColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 4,
  },

  pokCardText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  pokCardTextType: {
    fontSize: 14,
    fontWeight: "normal",
  },
});
