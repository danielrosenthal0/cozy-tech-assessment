import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const Content : FC = (props) => {
    return (
        <View>
            <Text>{props.content}</Text>
        </View>
    )
}

export default Content;

const styles = StyleSheet.create({

});