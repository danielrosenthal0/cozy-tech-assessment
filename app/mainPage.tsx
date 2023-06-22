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

  //individual http requests, could probably have made useHttp hook
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

  //keeping track of pages for pagination
  const indexLast = currentPage * postsPerPage;
  const indexFirst = indexLast - postsPerPage;
  const currPosts = posts.slice(indexFirst, indexLast);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  //linking the three data sets
  return (
    <View style={styles.content}>
        <h1>Recent posts</h1>
        
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
            postId={post.id}
          ></Post>
        );
      })}
      <Pages totalPages={totalPages} onPageChange={handlePageChange} currentPage={currentPage} />

     
    </View>
  );
};
export default MainPage;

const styles = StyleSheet.create({
  content: {
    display: "flex",
    textAlign: "center",
    fontFamily: "Arial",
    alignItems: 'center'
  },
});
