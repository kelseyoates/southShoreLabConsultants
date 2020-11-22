import React from "react";
import Link from "gatsby-link";

import sslcLogo30 from "../../images/sslc-30.png";


const Intro = () => (

<section id="intro">
  
  
  
  <div className = "flex flex-col  bg-teal section">
  
 
  
  

<div className="xsm:w-1/1 sm:w-2/3 ">
<h3 className="text-center">Let SSLC help you set up your COVID - 19 testing today.</h3>
<hr />
  <div className= "text-left px-8">
  <p>SSLC can assist you through the regulatory process - to start up a COVID-19 testing laboratory or to add COVID-19 testing to your menu. We have worked successfully with universities, biotechnology companies, and independent clinical labs. Northeastern University Professor Jared Auclair stated, "SSLC, Joanne, Liz, and Glenn, were a pleasure to work with, knowledgeable in all parts of the process, and provided the documents and guidance necessary to achieve our certification.  They were also great teachers for me during the process.  From start to finish we were licensed and CLIA certified in approximately 8 weeks and there is no way we could have done this without the help and guidance of the SSLC team. <b>I highly recommend their services to one and all.</b>"</p>
  </div>
</div>

</div>
  
  
  
  
  
  
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
