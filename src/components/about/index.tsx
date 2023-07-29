import "./styles.css";
import pdf from "../../pdf/CVIsra.pdf";
import { FaHandPointRight } from "react-icons/fa";
import { BsCloudArrowDownFill } from "react-icons/bs";
import { Animation } from "./Animation";
import imageAbout from "../../assets/android.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <div className="about-content-1">
          <h3>Hola, me llamo Israel...</h3>
          <h2>DESARROLLADOR DE SOFTWARE</h2>
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
        <div className="about-content-2">
          <div>
            <img src={imageAbout} />
          </div>
        </div>

        <Animation />
      </div>
    </div>
  );
};

export default About;
