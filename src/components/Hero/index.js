import React from "react";
import Link from "gatsby-link";

import heroImage from "../../images/flasks-606611.jpg";
import linkedinWhite from "../../images/linkedin-white.png";

const Hero = () => (

<div>
  <div className="flex flex-wrap px-1 pt-17 bg-index"> 
    <div className="mx-auto">
      <h1 className="text-white">South Shore Laboratory Consultants, Inc</h1>
      <h2 className="text-white hero">Our goal is the success of your laboratory.</h2>
      <p> <a href="https://www.linkedin.com/company/south-shore-laboratory-consultants/"><img src={linkedinWhite} className="icon-hero"/></a> 
      
      </p>
    </div>
  </div>

</div>

);

export default Hero;
