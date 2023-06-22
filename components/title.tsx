import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const Title : FC = (props) => {
    const {title} = props;
    //truncating to 30 characters
    const truncated = title.length > 30 ? title.substring(0, 30) + '...' : title;
    return (
        <View style={styles.content}>
            <Text style={styles.text}>{truncated}</Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        textAlign: 'center'
    },
    text: {
        fontFamily: "Arial",
        fontWeight: 'bold',
    }
})