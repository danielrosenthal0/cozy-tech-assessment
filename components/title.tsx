import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const Title : FC = (props) => {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    )
}

export default Title;