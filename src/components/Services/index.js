import React from "react";
import Link from "gatsby-link";

import heroImage from "../../images/flasks-606611.jpg";
import regulatoryImage from "../../images/ani-kolleshi-684082-unsplash.jpg";
import etcImage from "../../images/louis-reed-747388-unsplash.jpg";
import qualityImage from "../../images/lucas-vasques-453684-unsplash.jpg";
import shieldImage from "../../images/shield.png";
import supportImage from "../../images/tools.png";
import checklistImage from "../../images/checklist.png";



const Services = () => (

<section id="services">
<div className = "flex flex-wrap bg-services section">


<div className="xsm:w-1/1">
    <h2 className="text-center">Services</h2>
    <hr />
    <p></p>
</div>
<div className = "flex flex-wrap">
<div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 ">
  <div className="services">
  <img src={supportImage} className="x-small"/>
    <h3>Complete Regulatory Support</h3>
    <p>Running a lab is complicated, demanding, and ever-evolving. We do our job so that you can do yours. We’ll make sure your lab operates in compliance with federal accreditation (CLIA), state licensures (MA, NY, CA, MD, PA, RI), as well as other accrediting agencies (CAP, The Joint Commission, A2LA:ISO 15189). That way, you can focus on what you do best - directing a high-performance laboratory while we handle the regulations.</p>

<p>We have decades of experience with independent labs that perform CLIA moderate and high complexity laboratory developed tests (LDTs) as well as those performing clinical trial tests. Our current and past clients include biotechnology, biopharmaceutical, and diagnostic testing companies.</p>

<p>In addition, we offer Point of Care Testing (POCT) auditing. POCT auditing is available for physician office labs and large multi-site hospital systems to ensure regulatory compliance and the highest quality of patient care. SSLC provides a comprehensive audit report with their findings and actionable recommendations to achieve continual regulatory readiness. We utilize CLIA, CAP, MA state and the Joint Commission guidelines to conduct our comprehensive audit.</p>

<p>Our expertise has grown with the technology in labs and we can help you specifically with your genetic testing, including Sanger and Next-Generation Sequencing.</p>

  </div>


</div>

<div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 ">
  <div className= "services">
  <img src={shieldImage} className="x-small"/>
    <h3>Complete Quality Assurance</h3>
    <p>As part of our ongoing support, we provide consistent QA Reviews - comprehensive audits of all required pre - analytic, analytic, and post - analytic laboratory operations using fixed quality monitors.</p>
      <p>Our QA Reviews also ensure that the quality of your key systems such as QA, QC, Proficiency Testing, Equipment Maintenance, and Training / Competency are always maintained at the highest level.</p>
      <p>After the reports, we’ll be there for any corrective and preventative actions that may arise, including assistance with required Procedure Manual documentation: MA / CLIA / CAP / NY - compliant policy and procedural templates are provided.Let us know what you need and we can start working together today.</p>
  </div>
</div>

<div className="xsm:w-1/1 sm:w-1/2 md:w-1/3 ">
  <div className= "services">
  <img src={checklistImage} className="x-small"/>
    <h3>New Lab Start-Up</h3>
    <hr className="short" />
    <h3>Personnel Qualification</h3>
    <hr className="short" />
    <h3>Equipment Evaluation and Validation</h3>
    <hr className="short" />
    <h3>Support of Training and Competency</h3>
    <hr className="short" />
    <h3>Assessment of Laboratory Efficiency & Organizational Issues</h3>
    <hr className="short" />
    <h3>Point of Care Testing (POCT) Auditing</h3>
    <hr className="short" />
  </div>

</div>



</div>


</div>
</section>
  
);

export default Services;
