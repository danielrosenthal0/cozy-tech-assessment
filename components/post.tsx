import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "./title";
import Content from "./content";

const Post : FC = (props) => {
    return (
        <View style={styles.content}>
           <View style={styles.title}>
           <Title title={props.title}/>
           </View>
            <View style={styles.content}>
            <Content content={props.content}/>
            </View>
            
        </View>
    )
}

export default Post;

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        backgroundColor: 'gray',
        padding: '1rem',
        margin: '1rem',
        borderRadius: 16,
    }
});