import { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Post from "../components/post";

const MainPage: FC = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/posts').then((response) => response.json()).then((data) => setPosts(data)).catch((error) => console.error(error));
    }, []);
    return (
        <View style={styles.content}>
            {posts.map((post) => (
                <Post key={post.id} title={post.title} content={post.content}/>
            ))}
            
        </View>
    );
}

export default MainPage;

const styles = StyleSheet.create({
    content: {

    }
})