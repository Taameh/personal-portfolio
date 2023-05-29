import javaIcon from "../assets/img/skills/java-icon.svg";
import javascriptIcon from "../assets/img/skills/javascript-icon.svg";
import nodeIcon from "../assets/img/skills/node-icon.svg";
import reactIcon from "../assets/img/skills/react-icon.svg";
import firebaseIcon from "../assets/img/skills/firebase-icon.svg";
import kotlinIcon from "../assets/img/skills/kotlin-icon.svg";
import photoshopIcon from "../assets/img/skills/photoshop-icon.svg";
import lightroomIcon from "../assets/img/skills/lightroom-icon.svg";
import illustratorIcon from "../assets/img/skills/illustrator-icon.svg";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp2.png"


export const Skills = () => {
    const skills = [
        {
            title: 'Java',
            imgUrl: javaIcon
        },
        {
            title: 'Javascript',
            imgUrl: javascriptIcon
        },
        {
            title: 'React',
            imgUrl: reactIcon
        },
        {
            title: 'Firebase',
            imgUrl: firebaseIcon
        },
        {
            title: 'Kotlin',
            imgUrl: kotlinIcon
        },
        {
            title: 'Node',
            imgUrl: nodeIcon
        },
        {
            title: 'Illustrator',
            imgUrl: illustratorIcon
        },
        {
            title: 'Photoshop',
            imgUrl: photoshopIcon
        },
        {
            title: 'Lightroom',
            imgUrl: lightroomIcon
        }
    ];

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        {
                            skills.map((element, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <img src={element.imgUrl} alt={element.title + ' icon'} />
                                        <h5>{element.title}</h5>
                                    </div>

                                )
                            })
                        }
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}