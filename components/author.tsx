import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthorAvatar from "./authorAvatar";

const Author : FC = (props) => {
    return (
        <View>
            <AuthorAvatar></AuthorAvatar>
        </View>
        
    )
}

export default Author;