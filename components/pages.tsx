import React from "react";
import { View, StyleSheet, Button } from "react-native";

const Pages = ({ totalPages, onPageChange, currentPage }) => {
  const pagesDisplayed = 5;
  const pageButtons = [];

  let start = Math.max(currentPage - Math.floor(pagesDisplayed / 2), 1);
  let end = Math.min(start + pagesDisplayed - 1, totalPages);

  start = Math.max(end - pagesDisplayed + 1, 1);

  for (let page = start; page <= end; page++) {
    pageButtons.push(
      <Button
        key={page}
        onPress={() => onPageChange(page)}
        color={currentPage === page ? styles.activeButton.color : styles.button.color}
        title={page.toString()}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Button
        onPress={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        title="&lt;"
        color={styles.button.color}
      />
      {pageButtons}
      <Button
        onPress={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        title="&gt;"
        color={styles.button.color}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    color: "#000000",
  },
  activeButton: {
    color: "#ff0000",
  },
});

export default Pages;
