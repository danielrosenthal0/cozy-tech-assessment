import React, { useState } from "react";

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
    <button onClick={handleLike}>
      {isLiked ? "👍" : "👍"} ({likeCount})
    </button>
  );
};

export default LikeButton;
