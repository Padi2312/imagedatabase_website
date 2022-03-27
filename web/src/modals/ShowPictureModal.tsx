import { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { BsPencilSquare } from 'react-icons/bs';
import { FaDownload } from "react-icons/fa";
import MetaData from "../components/MetaData";
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
    const [showChangeTagsModal, setShowChangeTagsModal] = useState(false);
    const [picture, setPicture] = useState<PictureTagUrlModel | null>(null);

    useEffect(() => {
        setPicture(props.picture)

        return () => { }
    }, [props.picture])


    const onDownload = () => {
        pictureService.downloadImage(picture?.download, picture?.picture?.originalname)
    }

    return (
        <div>
            <Modal size="lg" show={props.show} onHide={() => props.onClose()} centered>
                <ModalHeader closeButton>{picture?.picture?.name}</ModalHeader>
                <ModalBody>
                    <div className="d-flex justify-content-center">
                        <img src={picture?.url} alt={picture?.picture?.name} className="img-fluid" />
                    </div>
                    <hr />
                    <h5>Tags</h5>
                    <TagList tagList={picture?.tags ?? []} />
                    <br />
                    <div onClick={() => setShowChangeTagsModal(true)}>
                        <span className="clickableSmall">Tags ändern <BsPencilSquare /></span>
                    </div>
                    <hr />
                    <h5>Metadaten</h5>
                    <details>
                        <summary>Metadaten</summary>
                        <MetaData picture={picture} />
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

            <ChangeTagsModal picture={picture} show={showChangeTagsModal} onChange={(item) => setPicture(item)} onClose={() => setShowChangeTagsModal(false)} />
        </div>

    )

}