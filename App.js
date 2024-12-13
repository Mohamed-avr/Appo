import { useState, useEffect } from "react";
import {
  View,
  Text,
  Platform,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  StatusBar,
} from "react-native";

export default function App() {
  const [postData, setPostData] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [refreshing, setIsRefreshing] = useState(false);
  const [limit, setLimit] = useState(14);

  const fetchData = async (limit = 120) => {
    const respone = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await respone.json();
    setPostData(data);
    setIsLoading(false);
  };

  const handleRefresh = () => {
    setLimit(limit - 2);
    setIsRefreshing(true);
    fetchData(limit);
    setIsRefreshing(false);
  };

  useEffect(() => {
    fetchData(limit);
  }, []);

  if (isloading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
        <Text> data Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      behavior="padding"
      style={{
        paddingTop: StatusBar.currentHight,
        paddingHorizontal: Platform.OS === "android" ? 16 : 24,
        backgroundColor: "#ccc",
        flex: 1,
      }}
    >
      <FlatList
        data={postData}
        keyExtractor={(item) => item.id.toString()}
        stickyHeaderIndices={[0]}
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
        refreshing={refreshing}
        onRefresh={handleRefresh}
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
    backgroundColor: "#fff",
    padding: 16,
  },
  istFooterComponent: {
    fontSize: 24,
    fontWeight: "400",
    marginBottom: 16,
    marginTop: 32,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
