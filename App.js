import { useState, useEffect } from "react";
import {
  View,
  Text,
  Platform,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function App() {
  const [postData, setPostData] = useState([]);

  const fetchData = async (limit = 4) => {
    const respone = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await respone.json();
    setPostData(data);
  };

  useEffect(() => {
    fetchData(23);
  }, []);

  return (
    <SafeAreaView
      behavior="padding"
      style={{
        paddingTop: Platform.OS === "ios" ? 24 : 36,
        paddingHorizontal: Platform.OS === "android" ? 16 : 24,
        backgroundColor: "#ccc",
        flex: 1,
      }}
    >
      <FlatList
        data={postData}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>
            No data found!, please reload your app again
          </Text>
        )}
        ListHeaderComponent={() => (
          <Text style={styles.istHeaderComponent}>Post Data</Text>
        )}
        ListFooterComponent={() => (
          <Text style={styles.istFooterComponent}>end, see more </Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.id}</Text>
            <Text style={styles.par}>{item.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  id: {
    fontSize: 22,
  },
  par: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "300",
  },
  emptyList: {
    fontSize: 20,
    textAlign: "center",
  },
  istHeaderComponent: {
    fontSize: 24,
    fontWeight: "400",
    marginBottom: 16,
    marginTop: 32,
  },
  istFooterComponent: {
    fontSize: 24,
    fontWeight: "400",
    marginBottom: 16,
    marginTop: 32,
  },
});
