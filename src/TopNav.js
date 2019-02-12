import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { withRouter } from "react-router-dom";

const TopNav = ({ history }) => {
  return (
    <View style={styles.main}>
      <Button title="Home" onPress={() => history.push("/")} />
      <Button title="Basic info" onPress={() => history.push("/basic_info")} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#cccccc"
  }
});

export default withRouter(TopNav);
