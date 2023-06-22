import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import MainPage from "./mainPage";

const Home: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <MainPage/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});

export default Home;
