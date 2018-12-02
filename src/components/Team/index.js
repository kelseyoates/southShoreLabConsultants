import React from "react";
import Link from "gatsby-link";

import joanneImage from "../../images/joanne-lannon.jpg";
import kathleenImage from "../../images/kathleen-oates.jpg";
import elizabethImage from "../../images/elizabeth-mullady.jpg";
import glennImage from "../../images/glenn-bouchie.jpg";

import linkedinGreen from "../../images/linkedin-green.png";
import paperPlane from "../../images/paper-plane.png";
import paperPlaneSolid from "../../images/paper-plane-solid.png";

import regulatoryImage from "../../images/ani-kolleshi-684082-unsplash.jpg";

import shieldImage from "../../images/shield.png";
import supportImage from "../../images/tools.png";
import checklistImage from "../../images/checklist.png";

const Team = () => (

<section id="team">

<div className = "flex flex-wrap section">



<div className="xsm:w-1/1">
    <h2 className="text-center">Our Team</h2>
    <hr />
    <p className="px-8">Whether you are interested in start-up services through completion of CLIA and Massachusetts state licensure, on-going oversight of your lab or consulting for special projects related to your laboratory, South Shore Laboratory Consultants is available to address your needs.</p>
 
</div>


<div className = "flex flex-wrap">


<div className="sm:w-1/2 md:w-1/2 ">
  <div className= "team">
      <img src={joanneImage} />
        <h3>Joanne B. Lannon, M.ED., DLM (ASCP)</h3>
        <h5>Founder & President</h5>
        <p>Joanne Lannon, President and Founder of South Shore Laboratory Consultants, has over 25 years of experience in laboratory medicine, and has provided consulting services to many types of clinical laboratories since 1988.</p>
        <p>As one of the first laboratory consultants in the state of Massachusetts, she has used her vast experience to maintain an exceptional reputation within the industry. Joanne is always highly recommended by professionals in her field.</p>
        <p>She has a Masters Degree in Education and is certified by the American Society of Clinical Pathologists as a Diplomate in Laboratory Management.</p>


    <div className = "flex flex-wrap ">
      <div className = "flex flex-wrap mx-auto">
        <div className="xsm:w-1/2">
            <div className="social">
              <a href="https://www.linkedin.com/in/joanne-lannon-m-ed-dlm-ascp-6664547/"><img src={linkedinGreen} className="icon"/></a> 
            </div>
          </div>

        <div className="xsm:w-1/2">
          <div className= "social">
              <a href="mailto:joannelannon@sslabconsultants.com"><img src={paperPlaneSolid} className="icon"/></a>
          </div>
        </div>
      </div>
    </div>


</div>
    
 
</div>

<div className="xsm:w-1/1 sm:w-1/2 md:w-1/2 ">
  <div className= "team">
  <img src={kathleenImage}/>
  <h3>Kathleen R. Oates, MT (ASCP) MPH</h3>
        <h5>Director of Quality Assurance</h5>
          <p>Director of Quality Assurance for South Shore Laboratory Consultants since 1993, Kathy Oates has worked in laboratory medicine for over 25 years.</p>
          <p>Her past employment includes Supervisor of the Clinical Laboratory Program at the Massachusetts Department of Public Health.</p>
          <p>Kathy is highly respected by her peers and well known by professionals throughout the industry. She is a Medical Technologist certified by the American Board of Clinical Pathologists and holds a Masters of Public Health from Boston University.</p>

    <div className = "flex flex-wrap ">
      <div className = "flex flex-wrap mx-auto">

        <div className="xsm:w-1/1">
          <div className= "social">
              <a href="mailto:koates@sslabconsultants.com"><img src={paperPlaneSolid} className="icon"/></a>
          </div>
        </div>
      </div>
    </div>
      </div>
  </div>


<div className="xsm:w-1/1 sm:w-1/2 md:w-1/2 lg:w-1/3 ">
  <div className= "team">
  <img src={glennImage}/>
  <h3>Glenn Bouchie, MT (ASCP)</h3>
        <h5>Senior Regulatory Consultant</h5>
          <p>Glenn Bouchie is an ASCP Board registered Medical Technologist.</p> <p>He has functioned as a Laboratory Manager, Senior Research Scientist, Principle Investigator, CAP Inspector, and Technical Supervisor with over 25 years of experience in method research and development, regulatory compliance, laboratory operations management, quality assurance, and process improvement in Research, Hospital, Clinical Diagnostic, Drug Development, and Life Sciences settings.</p>


    <div className = "flex flex-wrap ">
      <div className = "flex flex-wrap mx-auto">

        <div className="xsm:w-1/1">
          <div className= "social">
              <a href="mailto:gbouchie@sslabconsultants.com"><img src={paperPlaneSolid} className="icon"/></a>
          </div>
        </div>
      </div>
    </div>

      </div>
  </div>

<div className="xsm:w-1/1 sm:w-1/2 md:w-1/2 lg:w-1/3 ">
  <div className= "team">
  <img src={elizabethImage}/>
  <h3>Elizabeth Mullady, MT (ASCP)</h3>
        <h5>Senior Regulatory Consultant</h5>
          <p>Elizabeth Mullady is an ASCP Board registered Medical Laboratory Scientist with a Masters degree in Health Care Administration. She has 15 years of experience in clinical laboratories, first as a technologist in the Infection Disease Diagnostic lab at Boston Children’s Hospital and then in the quality assurance and regulatory affairs field in a molecular genetics lab. </p>
          <p>In her role as Director of Quality Assurance and Regulatory Affairs she was responsible to maintain the lab in a constant state of regulatory readiness while keeping the wheel of continual process improvement rolling. Elizabeth led the lab through the renewal of their CLIA certificate, gaining ISO 15189 accreditation, and securing licenses with Massachusetts, Rhode Island, Pennsylvania, Maryland, Florida, California, and New York State.</p>

    <div className = "flex flex-wrap ">
      <div className = "flex flex-wrap mx-auto">

        <div className="xsm:w-1/1">
          <div className= "social">
              <a href="mailto:emullady@sslabconsultants.com"><img src={paperPlaneSolid} className="icon"/></a>
          </div>
        </div>
      </div>
    </div>
      </div>
  </div>


<div className="xsm:w-1/1 sm:w-1/2 md:w-1/2 lg:w-1/3 ">
  <div className= "team">
  <img src={regulatoryImage}/>
  <h3>Kate Lannon</h3>
        <h5>Nurse Regulatory Consultant</h5>
          <p>Kate Lannon is a board registered RN with a BS in Nursing from Villanova University. She is also certified as a CCRN.  Kate has 17 years of nursing experience of which 10 years have been working as a Cardiac Critical Care nurse at Tufts Medical Center in Boston.  In addition, Kate has experience working over the past 3 years in the Electrophysiology lab and as a per diem employee of Baim Institute for Clinical Research, where she is responsible for writing adverse events for clinical trials.</p>
          <p>In her role at SSLC as a Nurse Regulatory Consultant, Kate is responsible for assisting our team with Point of Care auditing.  </p>
      </div>
  </div>


</div>


</div>

</section>
  
);

export default Team;
