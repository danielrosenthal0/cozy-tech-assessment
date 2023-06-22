import React from "react";
import { View, StyleSheet, Button } from "react-native";

const Pages = ({ totalPages, onPageChange, currentPage }) => {
  const pagesDisplayed = 5;
  const pageButtons = [];

  //keeping track of which 5 pages are displayed at bottom, current page always in center, range doesnt exceed max
  let start = Math.max(currentPage - Math.floor(pagesDisplayed / 2), 1);
  let end = Math.min(start + pagesDisplayed - 1, totalPages);

  start = Math.max(end - pagesDisplayed + 1, 1);

  //generating button for each page, on press calls onpagechange which just changes the current page and renders the right posts
  for (let page = start; page <= end; page++) {
    pageButtons.push(
      <Button
        key={page}
        onPress={() => onPageChange(page)}
        color={currentPage === page ? "#28665d" : "#4abdab"}
        title={page.toString()}
      />
    );
  }

  //left/right buttons disabled when current is 1 or max
  return (
    <View style={styles.container}>
      <Button
        onPress={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        title="&lt;"
        color="#4abdab"
      />
      {pageButtons}
      <Button
        onPress={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        title="&gt;"
        color="#4abdab"
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
    color: "#4abdab",
  },
  activeButton: {
    color: "#28665d",
  },
});

export default Pages;
