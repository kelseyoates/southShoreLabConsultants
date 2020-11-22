import React from "react";
import Link from "gatsby-link";

import sslcLogo30 from "../../images/sslc-30.png";


const Intro = () => (

<section id="intro">
  
<div className = "flex flex-wrap section">
<div className="xsm:w-1/1 sm:w-1/3 ">
  <div>
  <img src={sslcLogo30} />
  </div>
</div>

<div className="xsm:w-1/1 sm:w-2/3 ">
<h2 className="text-center">About Us</h2>
<hr />
  <div className= "text-left px-8">
  <p>From our President and Founder...</p>
        <p>Since 1988, South Shore Laboratory Consultants has provided clinical laboratory consulting services to laboratories seeking CLIA or CAP certification, MA and other state licensures. We have the expertise to facilitate all needs, from initial laboratory start-up through complete licensure, while ensuring continuous maintenance of your regulatory and quality systems. South Shore Laboratory Consultants has a 100% success rate for maintaining compliance with both CLIA, CAP and state regulations in our affiliated laboratories. We pride ourselves for working in a hands-on, friendly manner with the ability to interact successfully at both the laboratory and administrative levels.</p>
        <p>Joanne B. Lannon, M.Ed., DLM(ASCP)</p>
        <p>South Shore Laboratory Consultants, Inc.</p>
  </div>
</div>

</div>
</section>
  
);

export default Intro;
