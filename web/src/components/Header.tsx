import { Container, Navbar } from "react-bootstrap";

export default function Header() {
    return (
        <div>
            <Navbar id="navbar" collapseOnSelect expand="sm" bg="dark" variant="dark" >
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img
                            width="auto"
                            height="70"
                            alt="Bilder DB Logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar >
        </div>
    )

}