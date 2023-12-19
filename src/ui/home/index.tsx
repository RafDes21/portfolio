import { Card, NavBar, Projects, Studies, Tools } from "../../components";
import { STUDIES } from "../../db";

import "./styles.css";

const Home = () => {
  const Render = () => {
    return STUDIES.map((study) => (
      <Card
        key={study.id} 
        title={study.title}
        description={study.description}
        img={study.img}
        period={study.period} 
        state={study.state}
      />
    ));
  };

  return (
    <div className="home">
      <NavBar />
      <div className="container-tools" id="tools">
        <h2>ESTUDIOS</h2>
        <Studies>{Render()}</Studies>
        <Tools />
      </div>
      <div className="container-projects" id="projects">
        <h1>PROYECTOS</h1>
        <Projects />
      </div>
    </div>
  );
};

export default Home;
