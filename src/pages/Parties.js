import React from "react";
import "../styles/Parties.css";
import { imageData } from "../components/ImageData";

//this is the parties page wherein all my styling takes place
export default function Parties() {
  return (
    <section className="parties-heading">
      <h1>parties</h1>
      <section>
        <h2>wireframes</h2>
        <main className="image-gallery container">
          {/* mapping through image data to display images*/}
          {imageData.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </main>
        <h2 className="heading-2">wireframes explaination</h2>
        <section className="wireframe-text">
          <p>
            Home Page: This is the homepage, where you are welcomed by the name
            of the site as well as the slogan of the site. There are no images
            as I just could not find a way on how I wanted to place them. The
            title is ‘Gossip Glitz’ instead of ‘Gossip Girl’, although the
            website is inspired by the show, I did not want to copy everything
            word for word.
          </p>
          <p>
            About Page: This provides the user with information regarding the
            page.
          </p>
          <p>
            Gossip Page: This is the gossip page that contains information about
            the characters, here I let AI generate random information as it
            would’ve been difficult to source through the show for the
            information, however some of it is quite accurate.
          </p>
          <p>
            Posts Page: This page contains information about my posts – this
            ranges from my development blogs, essays, and internet art planning
            pages.
          </p>
          <p>
            Pics Page: This page is currently blank as it will be where I place
            my internet artwork, don’t worry about the naming of the page, it is
            named like that for the purpose of it linking to my theme, the same
            applies with the other pages I have.
          </p>
          <p>
            Parties Page: This page functions as my design section, where you
            will find all my plans for my website, which includes my wireframes,
            the wireframes explanation, style guide elements, etc. with this in
            mind you can see my page is styled slightly different from my
            wireframe, it is because I added more elements to it.
          </p>
          <p>
            Links Page: This is the contact page but not really the contact
            page, as within this page you fill out information being gossip and
            send it to the owner of ‘Gossip Glitz’ - who is unknown for the sake
            of the theme, whereby your gossip will be looked at and seen if it
            is worthy to be posted. Furthermore, in the possible next assignment
            I want the information that is typed here to display on the gossip
            page.
          </p>
        </section>
        <h2 className="heading-2">text style guide</h2>
        <main className="style-col">
          <section>
            <h2 className="font-one">Aa</h2>
            <p>this font is used for the titles of the various pages</p>
            <h2 className="font-two">Aa</h2>
            <p>
              this font is used for the information within the various pages.
            </p>
          </section>
        </main>
        <h2>color palette</h2>
        <section>
          <section className="empty-squares">
            <div className="empty-square">#f9e7e8</div>
            <div className="empty-square">#f2a9b6</div>
            <div className="empty-square">#ed8092</div>
            <div className="empty-square">#ed7185</div>
          </section>
        </section>
      </section>
    </section>
  );
}
