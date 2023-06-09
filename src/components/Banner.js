import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowDownCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.png";
import resume from '../resume/resume-tomas-arroyo.pdf'



export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(80 - Math.random() * 50);
    const toRotate = [ "Systems Engineering", "Graphic Designer", "Junior Developer"];
    const period = 2000;


    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate [i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum (loopNum +1);
            setDelta(500);
        }
    }


    return (
        <section className ="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Tomás! `}<br/><span className="wrap">{text}</span><span className="bar">|</span></h1>
                        <p>I am Tomás Arroyo, a self-taught Junior Fullstack Developer and graphic designer. Currently, I am pursuing a degree in Systems Engineering at UNS. My passion is seeking innovative solutions to problems. I focus on continuous learning and strive to constantly evolve as a professional.</p>
                        <button onClick={() => window.open(resume, "_blank")}>Download resume <ArrowDownCircle  size={25}/></button>
                    </Col>
                    
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}