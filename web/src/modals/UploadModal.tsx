import { Button, FormControl, InputGroup, Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import IModalProps from "../interfaces/IModalProps";

export default function UploadModal(props : IModalProps){

    return(

        <Modal show={props.show} onHide={() => props.onClose()} centered>
            <ModalHeader closeButton>Bild Hochladen</ModalHeader>
            <ModalBody>
                <FormControl type="file" placeholder="Wählen sie ihr Foto aus" />
            </ModalBody>
            <ModalFooter>
                <Button variant="secondary" onClick={() => props.onClose()}>
                    Abbrechen
                </Button>
                <Button className="ms-auto" variant="primary">
                    Hochladen
                </Button>
            </ModalFooter>
        </Modal>

    )

}