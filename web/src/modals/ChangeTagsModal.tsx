import { Button, FormControl, FormGroup, InputGroup, Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import IModalProps from "../interfaces/IModalProps";

export default function ChangeTagsModal(props : IModalProps){

    return(

        <Modal show={props.show} onHide={() => props.onClose()} centered>
            <ModalHeader closeButton>Tags ändern</ModalHeader>
            <ModalBody>
            <FormGroup>
                <InputGroup>
                    <InputGroup.Text>Tags</InputGroup.Text>
                    <FormControl type="tetx" />
                </InputGroup>
            </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button variant="secondary" onClick={() => props.onClose()}>
                    Abbrechen
                </Button>
                <Button className="ms-auto" variant="primary">
                    Ändern
                </Button>
            </ModalFooter>
        </Modal>

    )

}