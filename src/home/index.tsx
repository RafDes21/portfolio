import { About, Footer, NavBar, Projects, Tools } from "../components";
import "./styles.css";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="container-about" id="about">
        <About />
      </div>
      <div className="container-tools" id="tools">
        <Tools />
      </div>
      <div className="container-projects" id="projects">
        <h1>PROYECTOS</h1>
        <Projects />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
