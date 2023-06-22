import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const AuthorAvatar : FC = (props) => {
    const {user} = props;
    return (
        <View>
            {/* <img src={user.avatar}></img> */}
        </View>
    )
}
export default AuthorAvatar;