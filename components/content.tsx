import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const Content : FC = (props) => {
    const {content} = props;
    const truncated = content.length > 100 ? content.substring(0, 100) + '...' : content;
    return (
        <View style={styles.content}>
            <Text style={styles.text}>{truncated}</Text>
        </View>
    )
}

export default Content;

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        textAlign: 'left'
    },
    text: {
        fontFamily: "Arial",
        fontWeight: 'normal',
    }

});