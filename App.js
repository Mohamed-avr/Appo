import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Home from "./screens/Home";
import About from "./screens/About";
import Favorite from "./screens/Favorite";

// stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6a51ae",
          },
          contentStyle: {
            backgroundColor: "#e8e4f3",
          },
          headerTintColor: "white",
          headerRight: () => (
            <Pressable
              style={{
                marginRight: 10,
                backgroundColor: "#a292cc",
                padding: 10,
                borderRadius: 200,
                textAlign: "center",
                paddingHorizontal: 13,
              }}
              onPress={() => alert("Menu")}
            >
              <Text style={{ color: "white", marginRight: 10 }}>Menu</Text>
            </Pressable>
          ),
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{}} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Favorite" component={Favorite} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 70,
  },
});
