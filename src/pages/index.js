import React from "react";
import Link from "gatsby-link";
import heroImage from "../images/flasks-606611.jpg";
import Hero from "../components/Hero/index.js";

import Special from "../components/Special/index.js";
import Intro from "../components/Intro/index.js";
import Services from "../components/Services/index.js";
import Team from "../components/Team/index.js";
import Testimonials from "../components/Testimonials/index.js";

import Contact from "../components/Contact/index.js";


const IndexPage = () => (
<div>

  <Hero />
  
  <Special />
  <Intro />
  <Services />
  <Team />
  <Testimonials />
  <Contact />

</div>


);

export default IndexPage;
