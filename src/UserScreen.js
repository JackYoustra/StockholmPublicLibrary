import React from "react";
import { View, Text, StyleSheet } from "react-native";
import YouTube from "react-youtube"
import technical1 from './media/technical1.png'
import technical2 from './media/technical2.png'
import exterior1 from './media/exterior1.png'
import exterior2 from './media/exterior2.png'
import drawing from './media/drawing.png'
import interior from './media/interior.png'
import pin1 from './media/pin1.png'
import pin2 from './media/pin2.png'
import pin3 from './media/pin3.png'
import googleearthimage from './media/googleearth.png'
import side_room from './media/side_room.png'


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
      <Text style={styles.biblio}>{`Wrede, S. (1983). Landscape and architecture: The work of erik gunnar asplund. Perspecta, 20, 195-214. Retrieved from http://ezproxy.lib.utexas.edu/login?url=https://search.proquest.com/docview/55003765?accountid=7118`}</Text>
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

function building_interior() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{`Interior of the building`}</Text>
      <Text style={styles.regJust}>{`The interior of the Stockholm Public Library. The rotunda is clearly visible above (see the small windows) with a lamp coming down from the ceiling. There’s no corners, just entrances and exits, and the desks are in the middle rather than flush with a wall.`}</Text>
      <img src={interior} alt="Interior" />
    </View>
  );
}

function googleearth() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{`This building on Google Earth`}</Text>
      <Text style={styles.subhead}>{`View location: 59°20'36.51" N  18°03'16.88" E`}</Text>
      <Text style={styles.regJust}>{`The surroundings exemplify the conflicted position that the building is in: one one side, a busy city block, complete with apartments and roads, while on the other a serene garden, perfect for hiking and walking.`}</Text>
      <img src={googleearthimage} alt="Google Earth Image" />
    </View>
  );
}

function buildingvideo() {
  const opts = {
    //height: '390',
    //width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{`A video of someone explaining Gunnar Asplund and, at points, this building in particular.`}</Text>
      <YouTube
        videoId="xpOUhFtN-20"
        opts={opts}
      />
      <Text style={styles.regJust}>{`Something I learned that I didn't see in my other sources: Asplund originally wanted a dome, but stuck with a drum when faced with the practicalities of the situation. The only glass for the dome available to him at the time was matte, dull, gray, and, as he described it, sad. To prevent this negative impression, he decided to go with a drum instead.`}</Text>
    </View>
  );
}

function photoalbum() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{`A photo album on Pinterest featuring this building`}</Text>
      <Text style={styles.subhead}>{`The photo album can be located at https://www.pinterest.com/linasasho/erik-gunnar-asplund-architectarkitekt/?lp=true`}</Text>
      <img src={pin1} alt="First photo album sample" />
      <Text style={styles.regJust}>{`A view from the hill, it shows how the top line of the library is in line with the rest of the buildings and how it makes no effort to impose over the park as we’re seeing over the building.`}</Text>
      <img src={pin2} alt="Second photo album sample" />
      <Text style={styles.regJust}>{`Shows the imposing building from the city perspective (contrasting from the park - see the “bridge from city to park” motif earlier). Harsh lettering, fixed path, and scale make it show that this is an important building you’re visiting.`}</Text>
      <img src={pin3} alt="Third photo album sample" />
      <Text style={styles.regJust}>{`Park / plaza side of the building. Observe how it’s much less imposing than the city lead-in, fitting with the several-times-mentioned motif.`}</Text>
    </View>
  );
}

function blog() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{`A blog that features this building`}</Text>
      <Text style={styles.subhead}>{`The blog can be located at https://lovetravellingblog.com/2018/11/16/day-15-a-visit-to-stockholm-public-library-before-heading-home/`}</Text>
      <Text style={styles.regJust}>{`This blog had several things of value. It had a picture I hadn't seen before (see below), and it gave me a specific figure: the library contains 40,000 books between its three levels. There wasn't too much the author said to agree or disagree with, but I agree that the building's many small spaces are very well themed and the children's mural is pretty.`}</Text>
      <img src={side_room} alt="The library side room" />
    </View>
  );
}

function magazine() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{`A magazine article about the building`}</Text>
      <Text style={styles.subhead}>{`The magazine article can be located at https://www.architecturaldigest.com/story/the-architects-eye-stockholm-library-article`}</Text>
      <Text style={styles.subhead}>{`Three things I learned`}</Text>
      <ul>
        <li>{`This library was the first Nordic library to use the open-shelf system, where the patrons could access books without having to seek librarians first.`}</li>
        <li>{`On this building, Asplund's neoclassical architectural bent faltered and, at least on this building, his style was more functional, with the hill fusion behind the library. See the print library sources for more details about how this happened.`}</li>
        <li>{`It is possible for patrons to access the roof via a stairway`}</li>
      </ul>
      <Text style={styles.biblio}>{`Mindel, Lee F. “The Architect’s Eye: Stockholm City Library.” Architectural Digest, 31 July 2014.`}</Text>
    </View>
  );
}

function architect() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{`A journal article about Asplund`}</Text>
      <Text style={styles.subhead}>{`The journal article can be located at https://search.proquest.com/avery/docview/762465589/8A2606184A464847PQ/7?accountid=7118`}</Text>
      <Text style={styles.subhead}>{`Three things I learned`}</Text>
      <ul>
        <li>{`Architecting was very much a contemplative and emotional process for him, with people lost deep in thought and the “feeling” of whether or not the building was correct in quiet reflection.`}</li>
        <li>{`He was not very religious, had multiple wives, and (his son thinks) he developed a closer relationship with a one-year architecture student under him than his one son.`}</li>
        <li>{`Didn’t take criticism well, had his own style, and his (almost exclusively architect) friends came to him.`}</li>
      </ul>
      <Text style={styles.biblio}>{`Grice, M., & Carolin, P. (2010). Working with asplund. Arq: Architectural Research Quarterly, 14(1), 77-79. doi:http://dx.doi.org/10.1017/S1359135510000655`}</Text>
    </View>
  );
}

function bibiliography() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{`Works used`}</Text>
      <Text style={styles.biblio}>{`Wrede, S. (1983). Landscape and architecture: The work of erik gunnar asplund. Perspecta, 20, 195-214. Retrieved from http://ezproxy.lib.utexas.edu/login?url=https://search.proquest.com/docview/55003765?accountid=7118`}</Text>
      <Text style={styles.biblio}>{`Linder, Greta. “Stockholm's New Public Library.” American Scandinavian Review, vol. 18, no. 2, Feb. 1930, pp. 104–106.`}</Text>
      <Text style={styles.biblio}>{`Mindel, Lee F. “The Architect’s Eye: Stockholm City Library.” Architectural Digest, 31 July 2014.`}</Text>
      <Text style={styles.biblio}>{`Grice, M., & Carolin, P. (2010). Working with asplund. Arq: Architectural Research Quarterly, 14(1), 77-79. doi:http://dx.doi.org/10.1017/S1359135510000655`}</Text>
    </View>
  );
}

class UserScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam("name", "No user was defined!");
    switch (name) {
      case "bibliography": return bibiliography()
      case "architect": return architect()
      case "magazine": return magazine()
      case "blog": return blog()
      case "album": return photoalbum()
      case "vidya": return buildingvideo()
      case "googleearth": return googleearth()
      case "interior": return building_interior()
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
