import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

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
        },
        {
          title: "EasyMenu",
          description: "HTML, CSS, Javascript, React, Node, Mongo",
          imgUrl: projImg3,
        }
    ];

    return (
        <section className ="projects" id="projects">
            <Container>
                <Row>
              <div>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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