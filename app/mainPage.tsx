import { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Post from "../components/post";
import Pages from "../components/pages";

const MainPage: FC = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [likes, setLikes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

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

  const indexLast = currentPage * postsPerPage;
  const indexFirst = indexLast - postsPerPage;
  const currPosts = posts.slice(indexFirst, indexLast);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <View style={styles.content}>
      {currPosts.map((post) => {
        const user = users.find((user) => user.id === post.userId);
        const postLikes = likes.filter((like) => like.postId === post.id);
        return (
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            user={user}
            likes={postLikes}
          ></Post>
        );
      })}
      {Array.from({ length: totalPages }, (_, index) => (
        <button key={index} onClick={() => handlePageChange(index + 1)}>
          {index + 1}
        </button>
      ))}

      <Pages page={currentPage} total={totalPages} />
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
