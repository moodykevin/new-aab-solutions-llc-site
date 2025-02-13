import Head from "next/head";
import { Container } from 'react-bootstrap'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
        <Container fluid className='main-container'>
                    <div className="hero-header-container">
                    <h1 className="hero-header-text"> "Together, We Can Build Anything." </h1>
                    <p className="hero-header-subtext" > Design Build, General Contracting, & Construction Management </p>
                </div>
            <Container fluid className="home-hero-bg" />

            <Container fluid className="section-container">
                <h2> Building Projects from Coast to Coast </h2>
                <p> Our team of professionals is dedicated to providing the highest quality 
                service and workmanship, while ensuring your project is completed on time and within budget. We understand 
                the unique requirements of healthcare construction and have the knowledge and experience to meet all necessary 
                regulations and standards. We'll work closely with you to establish a timeline that meets your needs while 
                ensuring that we deliver the highest quality workmanship.</p>
            </Container>

            <Container fluid className="container-fluid home-hero-bg2">
              <h2 className='hero-cover-text'>Our dedicated construction professionals have over 35 years of extensive 
              experience in healthcare & commercial building.</h2>
              <a href='/services' className='button'>Our Services</a>
            </Container>

            <Container fluid className="section-container">
                <h2> Our Team and Mission </h2>
                <p> Our project management team is equipped with the skills and tools to plan, 
                execute, and control every aspect of your project. We understand the importance of maintaining a clear line 
                of communication with our clients, which is why we work closely with you to ensure that your project's 
                objectives and deadlines are met. With our extensive experience in the industry, we're well-versed in managing 
                projects of all sizes and complexities, and we'll work tirelessly to ensure your project's success.</p>
            </Container>
            <Container className="bottom-pic-container">
                <img alt="" className="home-pic" src='./imgs/internal_work.webp'></img>
                <img alt="" className="home-pic" src='./imgs/mri3.webp'></img>
                <img alt="" className="home-pic" src='./imgs/clay_ground.webp'></img>
                <img alt="" className="home-pic" src='./imgs/mri1.webp'></img>
            </Container>
        </Container>
    </>
  );
}


