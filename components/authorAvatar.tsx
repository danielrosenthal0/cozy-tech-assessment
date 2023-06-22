import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const AuthorAvatar : FC = (props) => {
    const {avatar} = props;
    return (
        <View style={styles.content}>
            <img src={avatar}></img>
        </View>
    )
}
export default AuthorAvatar;

const styles = StyleSheet.create({
    content: {
        width: '20%',
        padding: '10px'
    }
})