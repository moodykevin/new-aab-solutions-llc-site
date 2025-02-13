import Head from "next/head";
import { Container, Carousel } from 'react-bootstrap'


const commercial = () => {
    return(
        <>
            <Head>
                <title>Commercial</title>
            </Head>

            <Container fluid className='main-container'>

            <Container fluid className="container-fluid commercial-hero-bg" />

            <Container fluid className="section-container">
                <h2> Commercial </h2>
                <p> As a leading provider of commercial construction services, All Access specializes
                in creating buildings that meet the specific needs of your business. Our team of expert builders and 
                designers have extensive experience in commercial construction, and use their knowledge and skills to
                deliver projects that are functional and efficienct. Whether you need a new 
                office building, retail space, or industrial facility, we are dedicated to providing you with 
                the highest quality construction services. Our commitment to excellence and attention to detail 
                ensure that your project is completed on time, on budget, and to your complete satisfaction</p>
            </Container>

            <Container fluid className="border-hero">
							<h3> Speed and Efficiency </h3>
							<p> We understand that commercial facilities need to be operational and accessible 
							to customers throughout the construction process. Our experience includes retail, hospitality, institutional,
							government and academics.
							<br></br><br></br>
							We work closely with our clients to develop a timeline that 
							minimizes disruption and ensures that the project is completed on time and within budget. 
							Our speed and efficiency have helped us become a go-to firm for commercial projects, 
							and we take pride in delivering results that exceed our clients' expectations. </p>
						</Container>                        

            <Container className="carousel-container">
            <Carousel
                variant="light"
                nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
                interval={4000}
                touch={true}
            >
                {[
                '/imgs/aab_fencing.webp',
                '/imgs/carwash_bays.webp',
                '/imgs/carwash_exterior.webp',
                '/imgs/cement_pour.webp',
                '/imgs/exterior_crane.webp',
                '/imgs/hotel_lobby.webp',
                '/imgs/hotel_room.webp',
                '/imgs/interior_lighting.webp',
                '/imgs/interior_ventilation.webp',
                '/imgs/exterior_walls.webp'
                ].map((src, index) => (
                <Carousel.Item key={index}>
                    <img src={src} alt="" className="carousel-pic" />
                </Carousel.Item>
                ))}
            </Carousel>
            </Container>
            <br></br>
        </Container>
        </>
    )
}

export default commercial;