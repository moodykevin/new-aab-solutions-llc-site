import { Container, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from "next/image";

const Footer = () => {
  return (
    <div style={{ backgroundColor: 'rgb(41,58,97)', color: 'rgb(240,240,240)' }}>
      <br />
      <Link href="/" className="logo-container">
        <Image
          src="/assets/AllAccessBuilding_logo_wide_white_red.webp"
          alt="All Access Building Logo"
					width={500}
					height={300}
					className="home-pic"
        />
      </Link>
      <br />
      <Row className="footer-text-container">
        <Col xs={12} sm={4} md={4} lg={2} className="footer-item-container">
          <Link href="/" className="footer-link-text">
            HOME
          </Link>
        </Col>

        <Col xs={12} sm={4} md={4} lg={2} className="footer-item-container">
          <Link href="/about" className="footer-link-text">
            ABOUT
          </Link>
        </Col>

        <Col xs={12} sm={4} md={4} lg={2} className="footer-item-container">
          <Link href="/services" className="footer-link-text">
            SERVICES
          </Link>
        </Col>

        <Col xs={12} sm={4} md={4} lg={2} className="footer-item-container">
          <Link href="/healthcare" className="footer-link-text">
            HEALTHCARE
          </Link>
        </Col>

        <Col xs={12} sm={4} md={4} lg={2} className="footer-item-container">
          <Link href="/commercial" className="footer-link-text">
            COMMERCIAL
          </Link>
        </Col>

        <Col xs={12} sm={4} md={4} lg={2} className="footer-item-container">
          <Link href="/contact" className="footer-link-text">
            CONTACT
          </Link>
        </Col>
      </Row>
      <Container className='container-center'>
        <div
          className="text-center"
          style={{
            justifyContent: 'center',
            fontSize: 'small',
            color: 'rgb(220,220,220)',
          }}
        >
          <br />
          © 2025, All Access Building Solutions L.L.C.
          <br />
          ____________
          <br></br>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
