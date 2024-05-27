import React from "react";
import "../styles/Links.css";

//links aka contact component
export default function Links() {
  return (
    <section className="links-heading">
      <h1>links</h1>
      <main className="contact">
        <section className="contact-col">
          <form>
            <label>nickname</label>
            <input
              type="text"
              name="name"
              placeholder="enter your nickname"
              required
            />
            <label>spotted</label>
            <input
              type="text"
              name="spotted"
              placeholder="who did you spot"
              required
            />
            <label>gossip blast</label>
            <textarea
              name="message"
              rows="6"
              placeholder="enter your message"
              required
            ></textarea>
            <label>image</label>
            {/* because it was my first time including an image component i used an external source to find out how it is done*/}
            <input type="file" name="image" />
            <button type="submit" className="btn">
              xoxo
            </button>
          </form>
        </section>
      </main>
    </section>
  );
}
