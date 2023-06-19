import "./styles.css";
import pdf from "../../pdf/CVIsra.pdf";
import { FaHandPointRight } from "react-icons/fa";
import { BsCloudArrowDownFill } from "react-icons/bs";
import { Animation } from "./Animation";

const About = () => {
  return (
    <div className="about">
      <h3>Hola, me llamo Israel...</h3>
      <h2>DESARROLLADOR DE SOFTWARE</h2>
      <p>
        Actualmente radico en Argentina,
        <br /> desde el 2020 he estado capacitandome de manera autodidacta y
        cursos,
        <br /> tengo conocimientos en <b>lógica de programación</b>, luego me
        preparé con <b>Javascript</b>,
        <br /> manejando en el frontend la libreria de <b>React.js</b> y{" "}
        <b>React-Native para App Mobile</b> y en el Backend <b>Node.js</b> como
        entorno de desarrollo de Javascript.
        <br />
        agrego también el manejo de <b>Base de Datos</b> como MongoDB Y MysQL.
      </p>
      <div className="cv">
        <span>
          <a href={pdf} download>
            <FaHandPointRight />
            <span className="download"> Download CV</span>
            <BsCloudArrowDownFill />
          </a>
        </span>
      </div>
      <Animation />
    </div>
  );
};

export default About;
