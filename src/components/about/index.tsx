import "./styles.css";
import pdf from "../../pdf/CV_TINEO.pdf";
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
            <p className="about_me">Soy desarrollador con experiencia en creación de <strong>aplicaciones web y aplicaciones Mobile.</strong>  Me gusta estar en constante aprendizaje como así también colaborar y enseñar a quien necesite. Destaco por mis habilidades de <strong>trabajo en equipo y buena comunicación.</strong>
              Mis conocimientos en <strong>lógica de programación</strong> me dan la facilidad de poder trabajar con distintos lenguajes y frameworks y así poder encarar cualquier proyecto.</p>
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
