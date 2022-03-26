import { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { BsPencilSquare } from 'react-icons/bs';
import { FaDownload } from "react-icons/fa";
import TagList from "../components/TagList";
import PictureServie from "../core/PictureService";
import IModalProps from "../interfaces/IModalProps";
import PictureTagUrlModel from "../models/PictureTagUrlModel";
import ChangeTagsModal from "./ChangeTagsModal";

export interface ShowPictureModalProps extends IModalProps {
    picture: PictureTagUrlModel | null
}

export default function ShowPictureModal(props: ShowPictureModalProps) {
    const pictureService = new PictureServie()
    const picture = props.picture
    const [showChangeTagsModal, setShowChangeTagsModal] = useState(false);

    const onDownload = () => {
        pictureService.downloadImage(picture?.download,picture?.picture?.originalname)
    }

    return (
        <div>
            <Modal size="xl" show={props.show} onHide={() => props.onClose()} centered>
                <ModalHeader closeButton>{picture?.picture?.name}</ModalHeader>
                <ModalBody>
                    <div className="d-flex justify-content-center">
                        <img src={picture?.url} alt={picture?.picture?.name} className="img-fluid" />
                    </div>
                    <hr />
                    <h4>Tags</h4>
                    <TagList tagList={picture?.tags ?? []} />
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
                    <Button className="ms-auto" variant="primary" onClick={onDownload}>
                        <FaDownload /> Download
                    </Button>
                </Modal.Footer>
            </Modal>

            <ChangeTagsModal show={showChangeTagsModal} onClose={() => setShowChangeTagsModal(false)} />
        </div>

    )

}