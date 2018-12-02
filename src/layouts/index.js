import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";
import favicon from "../images/favicon.png";

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
    <Helmet
      title="South Shore Laboratory Consultants"
      meta={[
        { name: "description", content: "South Shore Lab Consultans is the premiere provider of lab consultation for point of care testing, doctors' offices, and biotechs." },
        { name: "keywords", content: "biotechs, poct, point of care, point of care testing, doctors offices, lab, consulting, lab set-up, lab management, regulations, state regulations" }
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
    ]}
    />
    <Header />
    <div className="flex flex-col flex-1 mx-auto w-full">
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
