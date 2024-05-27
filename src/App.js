//use w3schools the help with this, as i went through their example along with my previous assignments work
//w3schools was more in depth and explained why i use what i use
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gossip from "./pages/Gossip";
import Posts from "./pages/Posts";
import Pics from "./pages/Pics";
import Parties from "./pages/Parties";
import Links from "./pages/Links";
import Postone from "./pages/posts/Postone";
import Posttwo from "./pages/posts/Posttwo";
import Postthree from "./pages/posts/Postthree";
import Postfour from "./pages/posts/Postfour";
import Postfive from "./pages/posts/Postfive";
import Postsix from "./pages/posts/Postsix";
import Footer from "./components/Footer";

export default function App() {
  //using BrowserRouter to enable routing - so that i am able to have various pages and have them all linked
  //Routes for the navigation part
  //Route contains the navigation links
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gossip" element={<Gossip />} />
          <Route path="posts" element={<Posts />} />
          <Route path="pics" element={<Pics />} />
          <Route path="parties" element={<Parties />} />
          <Route path="links" element={<Links />} />
          <Route path="posts/postone" element={<Postone />} />
          <Route path="posts/posttwo" element={<Posttwo />} />
          <Route path="posts/postthree" element={<Postthree />} />
          <Route path="posts/postfour" element={<Postfour />} />
          <Route path="posts/postfive" element={<Postfive />} />
          <Route path="posts/postsix" element={<Postsix />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
