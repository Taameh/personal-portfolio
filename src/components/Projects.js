import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
    
    const projects = [
        {
          title: "My portfolio",
          description: "HTML, CSS and React",
          imgUrl: projImg1,
          link: "./#"
        },
        {
          title: "Choele Turismo",
          description: "Kotlin and Firebase",
          imgUrl: projImg2,
          link: "https://play.google.com/store/apps/details?id=ar.gob.choeleciudad.guiaturistica"
        },
        {
          title: "EasyMenu",
          description: "HTML, CSS, Javascript, React, Node, Mongo",
          imgUrl: projImg3,
          link: "./#"
        }
    ];

    return (
        <section className ="project" id="project">
            <Container>
                <Row>
              <div>
                <h2>Developer Projects</h2>
                <p/>
                <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    
              </div>
                </Row>
            </Container>
        </section>
    )
}