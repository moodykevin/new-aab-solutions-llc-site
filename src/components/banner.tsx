import { Container, Navbar, Nav } from 'react-bootstrap';
import Image from "next/image";

const Banner = () => {
    return (
        <div className="banner">
            <Container style={{ paddingBottom: "10px" }}>
                <Navbar className="d-flex justify-content-center align-items-center"
                    expand="lg"
                    variant="light"
                    id="banner"
                    style={{ padding: "0px" }}
                >
                    {/* Logo */}
                    <Navbar.Brand href="/" className="d-flex align-items-center">
                        <Image src='/assets/AllAccessBuilding_logo_wide.webp' alt="Logo" width="240" height="80" />
                    </Navbar.Brand>

                    {/* Menu Toggle */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

                    {/* Collapsing Menu */}
                    <Navbar.Collapse className="justify-content-end" style={{ padding: "15px" }}>
                        <Nav>
                            <Nav.Link className="banner-link" href="/">Home</Nav.Link>
                            <Nav.Link className="banner-link" href="/about">About</Nav.Link>
                            <Nav.Link className="banner-link" href="/services">Services</Nav.Link>
                            <Nav.Link className="banner-link" href="/healthcare">Healthcare</Nav.Link>
                            <Nav.Link className="banner-link" href="/commercial">Commercial</Nav.Link>
                            <Nav.Link className="banner-link" href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
}

export default Banner;
