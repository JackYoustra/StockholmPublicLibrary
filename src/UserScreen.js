import React from "react";
import { View, Text, StyleSheet } from "react-native";
import technical1 from './media/technical1.png'
import technical2 from './media/technical2.png'
import exterior1 from './media/exterior1.png'
import exterior2 from './media/exterior2.png'
import drawing from './media/drawing.png'


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

function plans() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{`Building plans`}</Text>
      <Text style={styles.regJust}>{`The first technical drawing of the building. This shows a top-down view of Asplund's first draft. Note the domination of the hill and the on-grid main building. This is much more square than his second revision.`}</Text>
      <img src={technical2} alt="First technical drawing" style={{transform: {rotate:"0deg"}}} />
      <Text style={styles.regJust}>{`The second technical drawing of the building. This shows a top-down view of Asplund's final draft to the building committee. Note the off-grid library building.`}</Text>
      <img src={technical1} alt="Second technical drawing" style={{transform: {rotate:"0deg"}}} />
    </View>
  );
}

function exterior() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{`Exterior of the building`}</Text>
      <Text style={styles.regJust}>{`This photo is taken opposite the hill, on the street. The enterance is to the left. You can see the grey frame of the door peeking out above the tree line.`}</Text>
      <img src={exterior1} alt="First exterior photo" />
      <Text style={styles.regJust}>{`This photo is taken on the hill, opposite the previous photo. Note the symmetrical doorframe on the opposite end of the building leading into the hill and the garden. Also note the level height of the top of the non-drum part of the building with the surrounding apartments. This level standing was an intentional visual bridge between the rest of the city and the library and the hill.`}</Text>
      <img src={exterior2} alt="Second technical drawing" />
    </View>
  );
}

function library_stuff() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{`Summaries for print sources in the library that feature this building.`}</Text>
      <Text style={styles.subhead}>{`Landscape and Architecture: The Work of Erik Gunnar Asplund.`}</Text>
      <Text style={styles.regJust}>{`The overall structure of the library is more than just the central building. Asplund's first rendition of the building is a very harsh conquering of the hill behind the building - it was all terraced. This was changed in his second rendition, with a small building at the top of the hill and the rest of the hill intact, leaving a park behind the building. His final rendition removed buildings, vastly simplified the park, and twisted off the main library from the rectilinear of the city grid. This is just one way he shows that the library is conflicted and complex: a junction between the orderly city and the organic park.`}</Text>
      <Text style={styles.biblio}>{`Wrede, S. (1983). Landscape and architecture: The work of erik gunnar asplund. Perspecta, 20, 195-214. Retrieved from http://ezproxy.lib.utexas.edu/login?url=https://search.proquest.com/docview/55003765?accountid=7118`}</Text>
      <Text style={styles.subhead}>{`Stockholm's New Public Library.`}</Text>
      <Text style={styles.regJust}>{`This was a print magazine article (1930!) that talked about a major development in Stockholm: a new public library! It noted that this was only possible due to the philanthropist Knut Wallenberg. Outside the large circulation room, there are individual rooms, each devoted to its own purpose / topic. Examples are childrens' rooms, non-fiction rooms, newspaper rooms, and reading rooms. This library served as a hub for the branches of the Stockholm Library System, and it was inspired by the US library system.`}</Text>
      <Text style={styles.biblio}>{`Linder, Greta. “Stockholm's New Public Library.” American Scandinavian Review, vol. 18, no. 2, Feb. 1930, pp. 104–106.`}</Text>
    </View>
  );
}

function personal_drawing() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{`Personal drawing of the building`}</Text>
      <Text style={styles.regJust}>{`This is a drawing of the front of the building. It captures the rhythm, the (as best as I could) line, the different shading, and the relative sizes of the different components of the building.`}</Text>
      <img src={drawing} alt="Hand drawing of the front" />
    </View>
  );
}

class UserScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam("name", "No user was defined!");
    switch (name) {
      case "drawing": return personal_drawing()
      case "print": return library_stuff()
      case "exterior": return exterior()
      case "plans": return plans()
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
  subhead: {
    fontSize: 16,
    textAlign: "left",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  regJust: {
    textAlign: "justified",
    color: "#333333",
    marginBottom: 5,
    margin: 10
  },
  biblio: {
    textAlign: "center",
    color: "#666666",
    marginBottom: 2,
    margin: 10
  }
});

export default UserScreen;
