import React from "react";
import { View, Text, StyleSheet } from "react-native";

function basic() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{`Basic facts and information`}</Text>
      <Text style={styles.instructions}>{`Name: Stockholm Public Library`}</Text>
      <Text style={styles.instructions}>{`Location: Stockholm, Sweden`}</Text>
      <Text style={styles.instructions}>{`Architect: Erik Gunnar Asplund`}</Text>
      <Text style={styles.instructions}>{`Date of construction: Plan submitted 1923, finished 1928`}</Text>
    </View>
  );
}

function purpose() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{`Purpose`}</Text>
      <Text style={styles.instructions}>{`Serve as an anchor for the Stockholm public library system`}</Text>
      <Text style={styles.welcome}>{`Stakeholders`}</Text>
      <ul>
        <li>{`Librarian: Serve the patrons of the library and facilitate effective usage`}</li>
        <li>{`Patrons: Read books, check out books, enjoy the community. Perhaps go outside in the garden with the new book`}</li>
        <li>{`Gardeners: Maintain the garden for the visitors`}</li>
        <li>{`Garden visitors: Walk and enjoy the garden 🙂`}</li>
      </ul>
    </View>
  );
}

class UserScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam("name", "No user was defined!");
    switch (name) {
      case "purpose": return purpose() 
      case "basic":
      default:
      return basic()
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default UserScreen;
