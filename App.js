import { useState, useEffect, use } from "react";
import {
  View,
  Text,
  Platform,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  StatusBar,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  const [postData, setPostData] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [refreshing, setIsRefreshing] = useState(false);

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const [error, setError] = useState("");

  const fetchData = async (limit = 10) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const data = await response.json();
      setPostData(data);
      setIsLoading(false);
      setError("");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setError("Something went wrong!");
    }
  };

  const addPost = async () => {
    try {
      if (!postTitle.trim() || !postBody.trim()) {
        alert("Please fill all the fields!");
        return;
      }

      setIsPosting(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "post",
          headers: { "Content-type": "application/json; charset=UTF-8" },
          body: JSON.stringify({
            title: postTitle,
            body: postBody,
            userId: 1,
          }),
        }
      );

      const newPost = await response.json();

      // Generate a unique ID to avoid key conflicts : we can use other methods
      newPost.id = postData.length + 1;

      // Add the new post to the beginning of the list
      setPostData([newPost, ...postData]);

      // initial inputs
      setPostTitle("");
      setPostBody("");
      setIsPosting(false);

      //  clear any error
      setError("");
    } catch (error) {
      setError("Something went wrong!");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchData(20);
    setIsRefreshing(false);
  };

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
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: Platform.OS === "android" ? 16 : 24,
        backgroundColor: "#ccc",
        flex: 1,
      }}
    >
      <>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={postTitle}
            placeholder="Type a title!"
            onChangeText={setPostTitle}
          />

          <TextInput
            style={styles.input}
            value={postBody}
            placeholder="Type a paragraph!"
            onChangeText={setPostBody}
          />
          <Button
            onPress={addPost}
            disabled={isPosting}
            title={isPosting ? "...adding" : "Add Post"}
          />
        </View>
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
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <Text style={styles.par}>{item.body}</Text>
            </View>
          )}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      </>
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
  inputContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 70,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },
});
