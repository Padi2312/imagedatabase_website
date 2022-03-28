import { useEffect, useState } from "react";
import { Button, Collapse, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { BiShow } from 'react-icons/bi';
import { BsPencilSquare } from 'react-icons/bs';
import { FaDownload } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
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
    const [showMetaData, setShowMetaData] = useState(false);

    useEffect(() => {
        setPicture(props.picture)

        return () => { }
    }, [props.picture])


    const onHandleClose = () => {
        props.onClose()
        setShowMetaData(false)
        setShowChangeTagsModal(false)
        setPicture(null)
    }

    const onDownload = () => {
        pictureService.downloadImage(picture?.download, picture?.picture?.originalname)
    }

    return (
        <div>
            <Modal size="lg" show={props.show} onHide={onHandleClose} centered>
                <ModalHeader closeButton>{picture?.picture?.name}</ModalHeader>
                <ModalBody>
                    <div className="d-flex justify-content-center">
                        <img src={picture?.url} alt={picture?.picture?.name} className="img-fluid" />
                    </div>
                    <hr />
                    <h5>Tags</h5>
                    <TagList tagList={picture?.tags ?? []} />
                    <div onClick={() => setShowChangeTagsModal(true)}>
                        <span className="clickableSmall">Tags ändern <BsPencilSquare /></span>
                    </div>
                    <hr />

                    <h5>Metadaten</h5>
                    <div
                        onClick={() => setShowMetaData(!showMetaData)}
                        aria-controls="meta-data"
                        aria-expanded={showMetaData}>
                        <span className="clickableSmall">
                            {
                                showMetaData ? <>Schließen <GrClose /></> : <>Anzeigen <BiShow /></>
                            }

                        </span>
                    </div>
                    <Collapse in={showMetaData} className="mt-3">
                        <div id="meta-data">
                            <MetaData picture={picture} onMetaDataUpdated={(pic) => {
                                setPicture(null)
                                setPicture(pic)
                            }} />
                        </div>
                    </Collapse>
                </ModalBody>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHandleClose}>
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