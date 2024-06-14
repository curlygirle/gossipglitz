//importing the necessary components
import React from "react";
import "../../styles/Blogs.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

//keeping this open for my next post
//will probably be a reflection on my internet artwork in final website
export default function Postsix() {
  return (
    <section className="blogs-heading">
      <h1>post six</h1>
      <section className="blog-col">
        <h4>Internet Artwork: Reflection</h4>
        <h4>Concept:</h4>
        <p>
          For my internet artwork, I decided to go with an interactive map of
          Manhattan, the location within the television series ‘Gossip Girl’. In
          my planning for this, I stated that I wanted to create an interactive
          map whereby you as the user can click or hover on a highlighted
          component and receive information about a specific character at a
          specific location. With this, I wanted to ensure that the character
          along with the gossip about them was the focus, however, with much
          research on these locations, I found it quite hard to decide on the
          character's gossip I wanted displayed for the location of some were
          the same and I could not do further research on new characters as I
          have not completed the series myself.
        </p>
        <p>
          Therefore, I decided to select the most popular locations from the
          show I am aware of place gossip respectively, even if it mentions the
          same character twice. With that in mind, the number of locations I
          selected was 8 in total.
        </p>
        <h4>Technical Difficulties:</h4>
        <p>
          When it comes to the technical difficulties, implementing the map on
          the web app was not as difficult as I thought it would be, however,
          with the integration of the map, choosing where exactly I wanted my
          map to be was an issue, as ‘OpenStreetMap’ contains the world map,
          therefore I could not just display Manhattan on its own, but I had to
          have the rest of the map included. This issue was resolved by just
          zooming in on the desired area, although I do wish I could’ve just had
          that one area as I feel the rest of the map is too distracting.
          Moreover, adding the popup with the information I want to display, and
          changing the colour of the background failed me several times, as the
          default styling for the background is within the leaflet component and
          when I would change it, it worked sometimes and other times it did
          not, so I decided to settle with whichever colour it decides to show,
          the colour will either be white or #f9e7e8 which is a light pink
          shade.
        </p>
        <p>
          Furthermore, I believe that having established what I wanted to do for
          my internet artwork in the previous assignment helped a lot, as I know
          with the planning leading up to it, I was completely blank, I had done
          so much research on net artworks and finding ideas that I think are
          great and link somehow to the theme of my page. Thus, while I was not
          even thinking about internet art, I was doing other parts of my
          website and watching the show, the idea of an interactive map came to
          me, which I am glad it did, otherwise, in the creation of an internet
          artwork I would’ve struggled much more, as a concept would still have
          needed to be thought of.
        </p>
        <h4>Final Thoughts on React Web App:</h4>
        <p>
          To bring this discussion to a close, what better way to discuss my
          final thoughts on my React Web Application? To begin, I had no idea
          what kind of theme I wanted to go for with this website, my last
          resort was to do a portfolio website, however, I felt that I had
          already done that – which I have, however not in React.js – so I am
          glad that I took this route. It has been a challenging yet fun
          experience trying to incorporate a television series into a website
          while trying to make it something enjoyable. Through the creation of
          this website, I feel I stepped out of my comfort zone which is a
          simple black and white with some grey here and there kind of website,
          I have managed to add different colours portrayed in the background,
          navigation bar, images, etc.
        </p>
        <p>
          There were a few things I was still not able to get working that I
          wanted to add, but I am glad I tried it out even though it is not in
          my final web application. Hopefully, I can improve upon my skills and
          incorporate them in further websites I do in the future.
        </p>
        <h4>References:</h4>
        <li>
          Gossip girl (2007) IMDb. Available at:
          https://www.imdb.com/title/tt0397442/ (Accessed: 2024).
        </li>
        <li>
          OpenStreetMap (No date). Available at:
          https://www.openstreetmap.org/#map=5/-28.676/24.677 (Accessed: 2024).{" "}
        </li>
      </section>
      <BackButton />
      <ScrollToTop />
    </section>
  );
}
