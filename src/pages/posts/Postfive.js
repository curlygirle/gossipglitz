import React from "react";
import "../../styles/Blogs.css";
import map1 from "../../images/map1.png";
import map2 from "../../images/map2.png";
import map3 from "../../images/map3.png";
import map4 from "../../images/map4.png";

//post five - this is where my internet art resreach is
export default function Postfive() {
  return (
    <section className="blogs-heading">
      <h1>internet art planning</h1>
      <section className="blog-col">
        <h4>Internet Artwork: Interactive Manhattan Map </h4>
        <h4>Concept: </h4>
        <p>
          If you are aware of the 2007 television series ‘Gossip Girl’ – not the
          reboot version – you will know it takes place in Manhattan, whereby it
          revolves around privileged upper-class adolescents living in
          Manhattans Upper East Side. Furthermore, when you look at my website
          and engage in the ‘Gossip’ section, that is where you receive gossip
          regarding the characters of the show. Now in the television series,
          there were small parts where gossip girl would post the location of
          the characters so that other character would be able to see them and
          wonder what they are doing at that location.
        </p>
        <p>
          With that in mind I came up with the idea of creating an interactive
          map of Manhattan – as that is where ‘Gossip Girl’ takes place. With
          that when it comes to my artwork, I plan on incorporating some sort of
          highlighted component where if you hover or click on it you can get
          information from the character at that specific location that can be
          in the form of a picture, or a gossip blast posted by a user. Please
          see the examples of the maps attached to understand this concept. This
          concept is like that of ‘Exhausting a crowd’ however, it will be a 2D
          interactive internet artwork.
        </p>
        <h4>Images: </h4>
        <img src={map1} alt="" />
        <img src={map2} alt="" />
        <img src={map3} alt="" />
        <img src={map4} alt="" />
        <h4>Technical Contraints: </h4>
        <p>
          When it comes to the technical constraints with implementing this,
          could be using maps, as for this I will need access to maps –
          particularly the map of Manhattan, however I would need to context of
          the map to link with the show, as some of the places mentioned in the
          show are on the map however the others are not, so trying to link it
          could be a constraint while ensuring that I am utilising the correct
          map that does not show something it should not – unless I create my
          own map of it however I am unsure of how I would place roads etc.
          Furthermore, to make the map interactive, I believe I would need to
          have access to libraries that can help with this, however which
          library is indeed the question.
        </p>
        <p>
          Implement a hover and click event that will need to check where the
          player is clicking on the map and display the information, however
          with this my main concern is will I have enough data for the player to
          click on the map and have information appear relating to it such as
          the character location data (where they go the most, etc.). For now
          these are just some of the technical constraints I can think of,
          however as the development of the continues I am sure there will be
          other however it is how I am able to overcome them that matter.
        </p>
        <h4>Reference List:</h4>
        <li>
          Gossip girl (2007) IMDb. Available at:
          https://www.imdb.com/title/tt0397442/ (Accessed: 2024).
        </li>
        <li>
          McDonald, K. (2015) Exhausting a crowd, Exhausting a Crowd. Available
          at: https://www.exhaustingacrowd.com/berlin (Accessed: 2024).
        </li>
      </section>
    </section>
  );
}
