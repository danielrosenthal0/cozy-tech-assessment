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
      <Author user={user}></Author>
      <Title title={title} />
      <Content content={content} />

      <Text>X likes</Text>
      <LikeButton/>
      <Text>Posted XX/XX/XX XX:XX</Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  content: {
    display: "flex",
    backgroundColor: "gray",
    padding: "1rem",
    margin: "1rem",
    borderRadius: 16,
  },
});
