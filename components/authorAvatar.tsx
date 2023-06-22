import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const AuthorAvatar : FC = (props) => {
    const {avatar} = props;
    return (
        <View>
            <img src={avatar}></img>
        </View>
    )
}
export default AuthorAvatar;