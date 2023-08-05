import { Container, Nav } from 'react-bootstrap';

const Footer = () => {
    const footerLinks = [
        { label: 'T & C', link: 'terms' },
        { label: 'Privacy Policy', link: 'policy' },
        { label: 'Contact Us', link: 'contact' },
    ];

    return (
        <footer className="footer bg-dark text-white">
            <Container>
                <Nav className="justify-content-center">
                    {footerLinks.map((link, index) => (
                        <Nav.Link
                            key={index}
                            href={link.link}
                            className="text-white mx-3"
                        >
                            {link.label}
                        </Nav.Link>
                    ))}
                </Nav>
            </Container>
        </footer>
    );
};

export default Footer;
