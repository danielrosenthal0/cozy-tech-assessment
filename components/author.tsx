import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthorAvatar from "./authorAvatar";

const Author : FC = (props) => {
    const {user} = props;
    return (
        <View>
            <Text>{user.name}</Text>
            <AuthorAvatar avatar={user.avatar}></AuthorAvatar>
        </View>
        
    )
}

export default Author;