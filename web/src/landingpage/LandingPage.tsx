import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaUpload } from 'react-icons/fa';
import PictureList from '../components/ImageList';
import SearchBar from '../components/Searchbar';
import PictureServie from '../core/PictureService';
import ShowPictureModal from '../modals/ShowPictureModal';
import UploadModal from '../modals/UploadModal';
import PictureTagUrlModel from '../models/PictureTagUrlModel';
import './LandingPage.scss';


export default function LandingPage() {

    const pictureService = new PictureServie()
    const [showPictureModal, setShowPictureModal] = useState(false);
    const [currentPicture, setCurrentPicture] = useState<PictureTagUrlModel | null>(null);
    const [pictureList, setPictureList] = useState<PictureTagUrlModel[]>([]);
    const [showUploadModal, setShowUploadModal] = useState(false)


    useEffect(() => {
        setRandomImages()
        return () => { }
    }, [])

    const setRandomImages = () => {
        pictureService.getRandomImages().then((res: PictureTagUrlModel[]) => {
            setPictureList(res)
        })
    }

    const onSearch = async (text: string, prev?: string) => {
        if (text.length == 0) {
            setRandomImages()
            return
        }

        const urlEncoded = encodeURIComponent(text)
        await pictureService.searchForPictures(urlEncoded).then(res => {
            setPictureList(res)
        })
    }

    return (
        <div className="body">
            <Row>
                <Col>
                    <SearchBar onSearch={onSearch} onChange={() => { }} />
                </Col>
                <Col>
                    <Button variant="secondary" onClick={() => setShowUploadModal(true)}>
                        <span className="nobreak" >Hochladen <FaUpload /></span>
                    </Button>
                </Col>
            </Row>
            <UploadModal show={showUploadModal} onClose={() => {
                setShowUploadModal(false)
                setRandomImages()
            }} />
            <ShowPictureModal show={showPictureModal} onClose={() => setShowPictureModal(false)} picture={currentPicture} />
            <Container fluid>
                <PictureList pictures={pictureList} onClickPicture={(item) => {
                    setShowPictureModal(true)
                    setCurrentPicture(item)
                }} />

            </Container>
        </div >
    )
}

