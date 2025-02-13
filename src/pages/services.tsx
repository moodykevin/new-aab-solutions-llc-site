import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from 'react-bootstrap'

const services = () => {
    return(
        <>
            <Head>
                <title>Services</title>
            </Head>

            <Container fluid className='main-container'>

                <Container fluid className="container-fluid services-hero-bg"/>
                
                <Container fluid className="section-container">
                    <h2> Services </h2>
                    <p> We specilize in healthcare construction and commercial applications. Our expertise 
                    in healthcare construction allows us to provide specialized services that meet your specific needs 
                    and industry regulations. We offer a wide range of construction services, including 
                    pre-construction planning, design, permitting, construction, and project management.
                    <br></br><br></br>
                    Additionally, we pride ourselves on completing construction projects quickly, which may be particularly
                    important in the healthcare industry where delays could have significant consequences.
                    With our specialization in healthcare and efficient construction processes, we are well-equipped to provide
                    high-quality services to all clients.</p>
                </Container>

                <Container fluid className="services-hero-bg2">
                    <h2 className='hero-cover-text'>Company leaders have proven expertise in project management, scheduling, 
                    job cost accounting, quality control, and project closeout.</h2>
                    <Container fluid style={{ display:"flex" , justifyContent:"center" }}>
											<Link href='/healthcare' className='button services-button' style={{right:"2%"}}>Healthcare </Link>
											<Link href='/commercial' className='button services-button' style={{left:"2%"}}>Commercial </Link>
                    </Container>
                </Container>

                <Container className="dual">
                    <Row>
                            <Col md={12} lg={6}>
                                <h2 className="dual-header" >Our Process</h2>
                                <h4>Design Build</h4>
                                <ul>
                                    <li>Collaborative Working Relationships with Consultants, Suppliers, & Subcontractors </li>
                                    <li>Total Quality Assurance</li>
                                    <li>Project Updates and Check-Ins</li>
                                    <li>Critical Pathway to On-Time Delivery</li>
                                    <li>Resolute Focus on Safety</li>
                                </ul>

                                <h4>General Contracting</h4>
                                <ul>
                                    <li>Pre-Construction Services</li>
                                    <li>Bid Management</li>
                                    <li>Comprehensive Estimating & Scheduling</li>
                                    <li>Project Cost Analysis</li>
                                    <li>Subcontractor Management</li>
                                    <li>Closeout Management</li>
                                    <li>Warranty</li>
                                </ul>

                                <h4> Construction Management </h4>
                                <ul>
                                    <li>Design Consultations</li>
                                    <li>Value Engineering</li>
                                    <li>Maintain Schedules</li>
                                    <li>Project Cost Administration</li>
                                    <li>Property Administration</li>
                                    <li>Safety Logistics and Implementation</li>
                                    <li>Budget Tracking and Scheduling</li>
                                </ul>
                            </Col>
                            <Col md={12} lg={6}className="dual-pic-container"></Col>
                        </Row>
                </Container>

            <Container className="bottom-pic-container">
								<Image src="/imgs/aab_fencing.webp" alt="" className="home-pic" width={500} height={300}/>
								<Image src="/imgs/carwash_interior.webp" alt="" className="home-pic" width={500} height={500}/>
								<Image src="/imgs/hotel_work.webp" alt="" className="home-pic" width={500} height={300} />
								<Image src="/imgs/mri4.webp" alt="" className="home-pic" width={500} height={300} />
            </Container>
        </Container>
        </>
    )
}

export default services;