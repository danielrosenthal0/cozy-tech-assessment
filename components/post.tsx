import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "./title";
import Content from "./content";
import Author from "./author";
import LikeButton from "./likeButton";

const Post: FC = (props) => {
  const { title, content, user, likes } = props;
  return (
    <View style={styles.content}>
      <View>
        <Author user={user}></Author>
        <Text>Posted XX/XX/XX XX:XX</Text>
      </View>

      <Title title={title} />
      <Content content={content} />
      <LikeButton />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  content: {
    display: "flex",
    backgroundColor: "#cdd1d0",
    padding: "1rem",
    margin: "1rem",
    borderRadius: 16,
    fontFamily: "Arial",
    width: "50%",
    alignItems: "center",
  },
});
