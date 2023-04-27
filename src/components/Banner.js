import React,{useState,useEffect} from 'react'
import { Container, Row,Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../img/graph.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


const Banner = () => {
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const toRotate = ["Sahira Tejada","Web Developer","Software Engineer"];
    const [text,setText] = useState('');
    const period = 2000;
    const [delta,setDelta] = useState(300 - Math.random() * 100);

    useEffect(()=>{
        let ticker = setInterval (()=>{
            tick();
        },delta)
        return ()=>{clearInterval(ticker)};
    },[text])

    const tick = ()=> {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0,text.length +1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);

        }

    }
  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({isVisible}) => 
                    <div  className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    {/*<span className='tagline'>
                        Welcome to my Portfolio
                    </span>*/}
                    <h1>{`Hello,`}<br/><span className='wrap'>{`I'm ` + text}</span></h1>
                    <p>My name is Sahira Tejada and I enjoy creating things that live on the internet.By merging creativity with functionality, I'm able to create engaging online environments that leave a lasting impact on users.
                    </p>
          
                    {/*<button onClick={()=> console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>*/ }
                    </div>}
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    {/*
                <img src={headerImg} alt='Header img'/>*/}
                <div className='boxes-container'>
                <div class="boxes">
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div></div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner