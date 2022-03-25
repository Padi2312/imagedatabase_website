import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader, Stack } from "react-bootstrap";
import IModalProps from "../interfaces/IModalProps";
import { BsPencilSquare } from 'react-icons/bs';
import ChangeTagsModal from "./ChangeTagsModal";

export default function ShowPictureModal(props: IModalProps) {

    const [showChangeTagsModal, setShowChangeTagsModal] = useState(false);

    return (
        <div>        
            <Modal fullscreen={true} show={props.show} onHide={() => props.onClose()} centered>
                <ModalHeader closeButton>Owner</ModalHeader>
                <ModalBody>
                    <img src="https://mdbootstrap.com/img/new/standard/city/042.webp" alt="alt" className="img" />
                    <hr />
                    <h2>Tags</h2> <br />
                    Beispiel 1
                    Beispiel 2
                    <br />
                    <div onClick={() => setShowChangeTagsModal(true)}>
                        <span className="clickableSmall">Tags ändern <BsPencilSquare /></span>
                    </div>
                    <hr />
                    <h2>Metadaten</h2><br />
                    <details>
                        <summary>Metadaten</summary>
                        <p>Genaue Metadaten</p>
                    </details>
                </ModalBody>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.onClose()}>
                        Schließen
                    </Button>
                    <Button className="ms-auto" variant="primary" onClick={() => props.onClose()}>
                        Download
                    </Button>
                </Modal.Footer>
            </Modal>

            <ChangeTagsModal show={showChangeTagsModal} onClose={() => setShowChangeTagsModal(false)} />
        </div>

    )

}