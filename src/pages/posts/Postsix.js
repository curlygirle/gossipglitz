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
      <section className="blog-col"></section>
      <BackButton />
      <ScrollToTop />
    </section>
  );
}
