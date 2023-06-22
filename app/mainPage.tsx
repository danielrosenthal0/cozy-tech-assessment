import { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Post from "../components/post";
import useHttp from "../hooks/useHttp";

const MainPage: FC = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((postData) => setPosts(postData))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.content}>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          content={post.content}
          userId={post.userId}
        />
      ))}
    </View>
  );
};
export default MainPage;

const styles = StyleSheet.create({
  content: {
    display: "flex",
    textAlign: "center",
  },
});
