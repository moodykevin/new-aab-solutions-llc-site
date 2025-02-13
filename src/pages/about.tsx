import Head from "next/head";
import Image from "next/image";
import { Container } from 'react-bootstrap'

const about = () => {
    return(
        <>
            <Head>
                <title>About</title>
            </Head>
            <Container fluid className='main-container'>
                
                <Container fluid className="about-hero-bg" />

                <Container fluid className="section-container">
                    <h2> About Us</h2>
                    <p> All Access Building Solutions LLC. specializes in a comprehensive range of
                    new construction services, offering turnkey design build, franchise development, and commercial additions
                    & upfits. With a decade of dedicated expertise, we have successfully developed and delivered over one million
                    square feet in cutting-edge medical and radiology spaces. Our seasoned team excels not only in constructing new
                    facilities but also in executing renovations for diverse sectors, including retail, hospitality, institutional,
                    government, and academic projects. Trust us to bring innovation, precision, and excellence to every aspect of your
                    construction needs. </p>
                </Container>
                
                <Container fluid className="border-hero">
                    <h3 >Why Us?</h3>
                    <ol>
                        <li>Our team of highly experienced professionals has years of ground up vertical construction experience, with the tools to hit on-time opening dates.</li>
                        <li>Our project cost analysis and administration means that our clients receive the highest level of competency from the general contractor role to deliver projects within your budget needs.</li>
                        <li>Our service model enables us to align our resources to meet each client&apos;s need, which ensures clients receive the most efficient solution with the necessary expertise and experience required to get the job done.</li>
                        <li>All Access Building Solutions offers construction management services to help clients maximize their investment. We embrace a collaborative team approach at every step of development.</li>
                        <li>Our Company and team of professionals are work zone safety first and therefore can be innovative, strategic, and complete all aspects of the project while providing the most accurate solution to our client&apos;s issues.</li>
                    </ol>
                </Container>

                <Container fluid className="section-container">
                    <h3 style={{textAlign:"center"}}> We are a preffered vendor for multiple national corporations.</h3>
                        <Container fluid className="vendor-pic-container">
													<Image src="/assets/ge_healthcare.webp" alt="" className="vendor-pic" width={500} height={300}/>
													<Image src="/assets/fujifilm.webp" alt="" className="vendor-pic" width={500} height={500}/>
                        </Container>
                </Container>

                <Container className="bottom-pic-container">
										<Image src="/imgs/interior_ventilation.webp" alt="" className="home-pic" width={500} height={300}/>
										<Image src="/imgs/hotel_lobby.webp" alt="" className="home-pic" width={500} height={500}/>
										<Image src="/imgs/mri1.webp" alt="" className="home-pic" width={500} height={300} />
										<Image src="/imgs/cement_pour.webp" alt="" className="home-pic" width={500} height={300} />

                </Container>
            </Container>
        </>
    )
}

export default about;