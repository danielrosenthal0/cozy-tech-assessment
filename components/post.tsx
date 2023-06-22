import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "./title";
import Content from "./content";
import Author from "./author";
import LikeButton from "./likeButton";

const Post: FC = (props) => {
  const { title, content, user, likes, postId } = props;

  const getPostedTime = (postId) => {
    const currentTime = new Date();
    const randomMinutes = postId * 10; 
    const postedTime = new Date(currentTime.getTime() - randomMinutes * 60000);
    const timeDifference = Math.floor((currentTime.getTime() - postedTime.getTime()) / 60000);
    
    if (timeDifference < 60) {
      return `Posted ${timeDifference} minutes ago`;
    } else {
      const hours = Math.floor(timeDifference / 60);
      return `Posted ${hours} hours ago`;
    }
  };


  return (
    <View style={styles.content}>
      <View style={styles.title}>
        <Author user={user}></Author>
        <Text style={styles.postedText}>{getPostedTime(postId)}</Text>
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
    width: "400px",
    alignItems: "center",
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '24px',
    padding: '12px'
  },
  postedText: {
    width: '100px'
  }
});
