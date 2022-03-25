import { useState } from "react";
import { Button, FormControl, Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";
import { AlertBox } from "../components/AlertBox";
import HttpRequester from "../core/HttpRequester";
import IModalProps from "../interfaces/IModalProps";
import { SuccessResponse } from "../models/SuccessResponse";

export default function UploadModal(props: IModalProps) {


    const [loading, setLoading] = useState(false)
    const [showResult, setShowResult] = useState(false)

    const [variant, setVariant] = useState("info")
    const [text, setText] = useState("")

    const httpRequester = new HttpRequester()
    let fileList: FileList | null = null


    const handleClose = () => {
        props.onClose()
        setShowResult(false)
    }



    const uploadImages = async () => {
        if (fileList === null) {
            return
        }
        setLoading(true)
        await httpRequester.uploadFile("/api/image/upload", fileList).then((res: SuccessResponse) => {
            if (res.success) {
                setVariant("success")
                setText("Bilder erfolgreich hochgeladen.")
            }
            else {
                setVariant("danger")
                setText("Bilder konnten nicht hochgeladen werden.")
            }
            setShowResult(true)
            setLoading(false)
        })
    }


    const renderLayout = () => {
        if (loading && !showResult) {
            return <Modal show={props.show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Hochladen...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex justify-content-center mb-3 mt-3'>
                        <ClipLoader size={50} />
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Schließen
                    </Button>
                </Modal.Footer>
            </Modal>
        }
        else if (!loading && !showResult) {
            return <Modal show={props.show} onHide={() => props.onClose()} centered>
                <ModalHeader closeButton>Bild Hochladen</ModalHeader>
                <ModalBody>
                    <p>Fotos zum hochladen auswählen.</p>
                    <FormControl
                        type="file"
                        onChange={(e: any) => { fileList = e.target.files }}
                        multiple
                        placeholder="Wählen sie ihr Foto aus" />
                </ModalBody>
                <ModalFooter>
                    <Button variant="secondary" onClick={() => props.onClose()}>
                        Abbrechen
                    </Button>
                    <Button className="ms-auto" variant="primary" onClick={uploadImages}>
                        Hochladen
                    </Button>
                </ModalFooter>
            </Modal>
        }
        else if (!loading && showResult) {
            return <Modal show={props.show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Import-Ergebnis</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AlertBox variant={variant} text={text} show={showResult} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Schließen
                    </Button>
                </Modal.Footer>
            </Modal>
        }
        else {
            return <></>
        }
    }

    return (
        <div>
            {renderLayout()}
        </div>

    )

}