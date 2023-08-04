import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const MyNavbar = () => {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            sticky="top"
        >
            <div className="container-fluid">
                <Navbar.Brand href="home">
                    <img
                        alt=""
                        src="/vite.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    SportChaos
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    className="ml-auto"
                />

                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className="justify-content-end"
                >
                    <Nav className="ml-auto">
                        <NavDropdown
                            title={<span><FaShoppingCart /></span>}
                            id="collapsible-nav-dropdown"
                        >
                            {/* Shopping cart content here */}
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
            <Outlet />
        </Navbar>
    );
};

export default MyNavbar;
