import Head from "next/head";
import { Container, Carousel } from 'react-bootstrap'


const healthcare = () => {
    return(
        <>
            <Head>
                <title>Services</title>
            </Head>

            <Container fluid className='main-container'>
							
							<Container fluid className="container-fluid healthcare-hero-bg" />
							
							<Container fluid className="section-container">
									<h2> Healthcare </h2>
									<p> We specialize in medical facility construction that provide patients and providers
									with the best possible care. Our team of expert builders and designers work hand-in-hand with healthcare professionals
									to create facilities that are functional, efficient, and polished. We understand the unique requirements
									of healthcare construction and use our expertise to deliver high-quality projects that meet or exceed our clients' 
									expectations. Whether you are building a new medical facility or renovating an existing one, we have the experience 
									and skills to get the job done right.</p>
							</Container>

							<Container fluid className="border-hero">
									<h3> Customer Service is Our Priority </h3>
									<p> From the initial consultation to the final walkthrough, we work closely with 
									our healthcare clients to ensure that their construction project is completed to their satisfaction. We believe 
									that our commitment to customer service sets us apart from other construction companies and has helped us build 
									a reputation as a trusted partner in the healthcare sector.
									<br></br><br></br>
									Our commitment to quality control means that our healthcare clients can trust that their construction project
									will be completed to the highest standards, with no compromises on safety, durability, or functionality. </p>
							</Container>

							<Container className="carousel-container">
									<Carousel 
											variant="light"
											nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
											interval={4000}
											touch={true}
									>
										{['mri1.webp', 'mri_room_1.webp', 'mri2.webp', 'mri_room_2.webp', 'mri3.webp', 'mri4.webp', 'waiting.webp'].map((img, index) => (
										<Carousel.Item key={index}>
											<img src={`/imgs/${img}`} alt="" className="carousel-pic" />
										</Carousel.Item>
										))}
									</Carousel>
							</Container>
        </Container>
        </>
    )
}

export default healthcare;