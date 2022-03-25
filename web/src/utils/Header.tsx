import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import UploadModal from "../modals/UploadModal";

export default function Header(){

    return(

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