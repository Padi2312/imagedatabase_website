import { useEffect, useState } from "react";
import { Badge, Button, FormControl, FormGroup, InputGroup, Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { FaPlus, FaTrash } from "react-icons/fa";
import IModalProps from "../interfaces/IModalProps";

export default function ChangeTagsModal(props: IModalProps) {

    const [currentTag, setCurrentTag] = useState("")
    const [tags, setTags] = useState(["sonne", "mond", "stern", "etc"])

    useEffect(() => {

        return () => { }
    }, [tags])


    const removeTag = (_index: number) => {
        setTags([...tags.filter((tag, index) => index !== _index)])
    }

    const addTag = () => {
        const newTags = tags
        newTags.push(currentTag)
        setTags([...newTags])
        setCurrentTag("")
    }

    const onSave = () => {

    }


    return (

        <Modal show={props.show} onHide={() => props.onClose()} centered>
            <ModalHeader closeButton>Tags ändern</ModalHeader>
            <ModalBody>
                <div className="mb-3">
                    {
                        tags.map((element, index) => {
                            return (
                                <Badge bg="primary" key={index} className="me-1">
                                    {element} <FaTrash onClick={() => { removeTag(index) }} />
                                </Badge>
                            )
                        })
                    }
                </div>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Text>Tag hinzufügen</InputGroup.Text>
                        <FormControl type="text" value={currentTag} placeholder="Tag eingeben" onChange={(e) => { setCurrentTag(e.target.value) }} />
                        <Button onClick={addTag}>
                            <FaPlus />
                        </Button>
                    </InputGroup>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button variant="secondary" onClick={() => props.onClose()}>
                    Abbrechen
                </Button>
                <Button className="ms-auto" variant="primary" onClick={onSave}>
                    Ändern
                </Button>
            </ModalFooter>
        </Modal>

    )

}