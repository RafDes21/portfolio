import React from "react";
import { Container, Row } from "react-bootstrap";
import ProyectComp from "./ProyectComp";
import "./proyects.scss";

export const ProyectsComp = () => {
  const proyectos = [
    {
      id: 1,
      titulo: "Carrito de Compras",
      github: "https://github.com/RafDes21/app-tineo.git",
      vercel: "https://app-tineo.vercel.app/",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZnJ_5TNe98WcX_lMZmHlDJhNxf2mDtFWAg&usqp=CAU",
    },
    {
      id: 2,
      titulo: "compra de tickets",
      github: "https://user-images.githubusercontent.com/83146564/137408912-013f0d0c-37d1-4dc2-a1b5-77356c1003f3.png",
      vercel: "https://tineo-bootstrap.vercel.app/index.html",
      img: "https://user-images.githubusercontent.com/83146564/137408912-013f0d0c-37d1-4dc2-a1b5-77356c1003f3.png",
    },
    {
      id: 3,
      titulo: "Servicio de Catering",
      github: "https://github.com/RafDes21/prueba1.git",
      vercel: "https://catering-mu.vercel.app/",
      img: "https://thegrandeseventos.com/pic/kekabose1.png",
    },
  ];
  return (
    <Container className="proyects">
      <Row>
        <h2>PROYECTOS</h2>
        {proyectos.map((proyecto, index) => (
          <ProyectComp
            key={index}
            titulo={proyecto.titulo}
            github={proyecto.github}
            img={proyecto.img}
            vercel={proyecto.vercel}
          />
        ))}
      </Row>
    </Container>
  );
};
