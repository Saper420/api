import { Navbar, Container, Nav } from "react-bootstrap"

export const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" className="my-4 rounded">
            <Container >
            <Navbar.Brand href="/">Waiter.app</Navbar.Brand>
            <Nav className="justify-content-end">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}