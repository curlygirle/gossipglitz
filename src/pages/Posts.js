import React from "react";
import "../styles/Posts.css";
import blog1 from "../images/blog1.jpg";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.jpg";
import blog4 from "../images/blog4.jpg";
import blog5 from "../images/blog5.jpg";
// import blog6 from "../images/blog6.jpg";
import { Link } from "react-router-dom";

//posts component
//this is where my blog posts are stored
export default function Posts() {
  return (
    <section className="posts-heading">
      <h1>posts</h1>
      <main className="posts">
        {/* individual post sections, as well as links to the individual pages with relevent information */}
        <section className="post">
          <img src={blog1} alt="" />
          <Link to="/posts/Postone">
            <article className="caption">
              <p>development blog 1</p>
            </article>
          </Link>
        </section>
        <section className="post">
          <img src={blog2} alt="" />
          <Link to="/posts/Posttwo">
            <article className="caption">
              <p>development blog 2</p>
            </article>
          </Link>
        </section>
        <section className="post">
          <img src={blog3} alt="" />
          <Link to="/posts/Postthree">
            <article className="caption">
              <p>development blog 3</p>
            </article>
          </Link>
        </section>
        <section className="post">
          <img src={blog4} alt="" />
          <Link to="/posts/Postfour">
            <article className="caption">
              <p>essay</p>
            </article>
          </Link>
        </section>
        <section className="post">
          <img src={blog5} alt="" />
          <Link to="/posts/Postfive">
            <article className="caption">
              <p>internet art planning</p>
            </article>
          </Link>
        </section>
        {/*commented this section out so i can use it in my final exam when i add a reflection */}
        {/* <section className="post">
          <img src={blog6} alt="" />
          <Link to="/posts/Postsix">
            <article className="caption">
              <p>theory 2</p>
            </article>
          </Link>
        </section> */}
      </main>
    </section>
  );
}
