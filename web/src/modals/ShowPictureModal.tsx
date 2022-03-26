import { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { BsPencilSquare } from 'react-icons/bs';
import { FaDownload } from "react-icons/fa";
import TagList from "../components/TagList";
import IModalProps from "../interfaces/IModalProps";
import ChangeTagsModal from "./ChangeTagsModal";

export default function ShowPictureModal(props: IModalProps) {

    const [showChangeTagsModal, setShowChangeTagsModal] = useState(false);

    return (
        <div>
            <Modal size="xl" show={props.show} onHide={() => props.onClose()} centered>
                <ModalHeader closeButton>Owner</ModalHeader>
                <ModalBody>
                    <div className="d-flex justify-content-center">
                        <img src="https://mdbootstrap.com/img/new/standard/city/042.webp" alt="alt" className="img-fluid" />
                    </div>
                    <hr />
                    <h4>Tags</h4>
                    <TagList tagList={["ein", "2ein", "sdf5r", "3rfed"]} />
                    <div onClick={() => setShowChangeTagsModal(true)}>
                        <span className="clickableSmall">Tags ändern <BsPencilSquare /></span>
                    </div>
                    <hr />
                    <h4>Metadaten</h4>
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
                        <FaDownload /> Download
                    </Button>
                </Modal.Footer>
            </Modal>

            <ChangeTagsModal show={showChangeTagsModal} onClose={() => setShowChangeTagsModal(false)} />
        </div>

    )

}