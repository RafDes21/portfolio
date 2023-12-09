import "./styles.css";
import pdf from "../../pdf/CVIsra.pdf";
import { FaHandPointRight } from "react-icons/fa";
import { BsCloudArrowDownFill } from "react-icons/bs";
import { Animation } from "./Animation";
import imageAbout from "../../assets/android.jpg";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about">
        <div className="about-content-1">
          <div className="about-content-1__detail">
            <h3>Hola, me llamo Israel</h3>
            <h2>DESARROLLADOR DE SOFTWARE</h2>
            <h3>WeB Y Mobile</h3>
            <div className="cv">
              <span>
                <a href={pdf} download>
                  <FaHandPointRight />
                  <span className="download"> Download CV</span>
                  <BsCloudArrowDownFill />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="about-content-2">
          <div className="about-content-2__image">
            <img src={imageAbout} />
          </div>
        </div>
        <Animation />
      </div>
    </div>
  );
};

export default About;
