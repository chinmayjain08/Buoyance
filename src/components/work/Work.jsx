import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import './work.css'
const Work = () => {
  return (
    <div className="workSection">
      <div className="workLeft">
        <div className="workheading"><span>W</span>ork</div>
        <div className="workContent">POWERFUL COMPELLING EXPERIENCES</div>
        <div className="scroolheading"><p>Scrool to See </p><FaArrowRight /></div>
      </div>
     

      <div className="workRight">
        <div className="Project">
          <div className="Projectimage">
            <img src="./images/JSR.jpg" alt="error" />
          </div>
          <div className="projectinfo">
            <div className="Projectname">JSR International</div>
            <FaExternalLinkAlt className="projectLink"></FaExternalLinkAlt>
          </div>
        </div>
        <div className="Project">
          <div className="Projectimage">
            <img src="./images/Rentellar.jpg" alt="error" />
          </div>
          <div className="projectinfo">
            <div className="Projectname">Rentellar</div>
            <FaExternalLinkAlt className="projectLink"></FaExternalLinkAlt>
          </div>
        </div>
        <div className="Project">
          <div className="Projectimage">
            <img src="./images/LegalYodha.jpg" alt="error" />
          </div>
          <div className="projectinfo">
            <div className="Projectname">Legal Yodha</div>
            <FaExternalLinkAlt className="projectLink"></FaExternalLinkAlt>
          </div>
        </div>
        <div className="Project">
          <div className="Projectimage">
            <img src="./images/AryanPortfolio.jpg" alt="error" />
          </div>
          <div className="projectinfo">
            <div className="Projectname">Portfolio</div>
            <FaExternalLinkAlt className="projectLink"></FaExternalLinkAlt>
          </div>
        </div>
        <div className="Project">
          <div className="Projectimage">
            <img src="./images/ChinmayPortfolio.jpg" alt="error" />
          </div>
          <div className="projectinfo">
            <div className="Projectname">Porfolio</div>
            <FaExternalLinkAlt className="projectLink"></FaExternalLinkAlt>
          </div>
        </div>
        <div className="Project">
          <div className="Projectimage">
            <img src="./images/ClientPorfolio.jpg" alt="error" />
          </div>
          <div className="projectinfo">
            <div className="Projectname">Porfolio</div>
            <FaExternalLinkAlt className="projectLink"></FaExternalLinkAlt>
          </div>
        </div>
        <div className="Project">
          <div className="Projectimage">
            <img src="./images/LakhanPorfolio.jpg" alt="error" />
          </div>
          <div className="projectinfo">
            <div className="Projectname">Porfolio</div>
            <FaExternalLinkAlt className="projectLink"></FaExternalLinkAlt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
