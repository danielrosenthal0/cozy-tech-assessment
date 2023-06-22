import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthorAvatar from "./authorAvatar";

const Author : FC = (props) => {
    const {user} = props;
    return (
        <View>
            <p>{user.name}</p>
            <AuthorAvatar avatar={user.avatar}></AuthorAvatar>
        </View>
        
    )
}

export default Author;