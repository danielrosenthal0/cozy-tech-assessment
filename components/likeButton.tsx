import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 100));

  const handleLike = () => {
    if (isLiked) {
      setLikeCount((prevCount) => prevCount - 1);
      setIsLiked(false);
    } else {
      setLikeCount((prevCount) => prevCount + 1);
      setIsLiked(true);
    }
  };

  return (
    <View style={styles.buttonContainer}>
      <Button onPress={handleLike} title={`${isLiked ? "👍" : "👍"} (${likeCount})`} color="#878787" />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 50, // Adjust the width as per your preference
    borderWidth: 0, // Remove the border
    borderRadius: 15
  },
});

export default LikeButton;
