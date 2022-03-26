import { Container, Navbar } from "react-bootstrap";

export default function Header() {
    return (
        <div>
            <Navbar id="navbar" collapseOnSelect expand="sm" bg="dark" variant="dark" >
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img
                            width="auto"
                            height="50"
                            alt="Bilder DB Logo"
                            src={"./logo.svg"}
                        />
                        BilderDB
                    </Navbar.Brand>
                </Container>
            </Navbar >
        </div>
    )

}