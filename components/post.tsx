import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "./title";

const Post : FC = (props) => {
    return (
        <View style={styles.content}>
            <Text> Title: 
                {props.title}
                {/* <Title/> */}
            </Text>
            <Text> Content: {props.content}</Text>
        </View>
    )
}

export default Post;

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        backgroundColor: 'light-gray'
    }
});