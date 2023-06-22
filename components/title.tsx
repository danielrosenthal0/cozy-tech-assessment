import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const Title : FC = (props) => {
    const {title} = props;
    const truncated = title.length > 30 ? title.substring(0, 30) + '...' : title;
    return (
        <View style={styles.content}>
            <Text>{truncated}</Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    content: {
        
    }
})