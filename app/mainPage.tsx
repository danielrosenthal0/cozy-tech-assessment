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

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((postData) => setUsers(postData))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/likes")
      .then((response) => response.json())
      .then((postData) => setLikes(postData))
      .catch((error) => console.error(error));
  }, []);


  return (
    <View style={styles.content}>
        {posts.map((post) => {
            const user = users.find((user) => user.id === post.userId);
            const postLikes = likes.filter((like) => like.postId === post.id);
            return (
                <Post key={post.id} title={post.title} content={post.content} user={user} likes={postLikes}></Post>
            )
        })}
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
