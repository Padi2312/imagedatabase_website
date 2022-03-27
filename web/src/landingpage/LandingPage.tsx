import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AlertBox } from '../components/AlertBox';
import PictureThumbnail from '../components/picturethumbnail/PictureThumbnail';
import SearchBar from '../components/Searchbar';
import PictureServie from '../core/PictureService';
import ShowPictureModal from '../modals/ShowPictureModal';
import PictureTagUrlModel from '../models/PictureTagUrlModel';
import './LandingPage.scss';


export default function LandingPage() {

    const pictureService = new PictureServie()
    const [showPictureModal, setShowPictureModal] = useState(false);
    const [currentPicture, setCurrentPicture] = useState<PictureTagUrlModel | null>(null);

    const [elements, setElements] = useState<JSX.Element[]>([]);


    useEffect(() => {
        pictureService.getRandomImages().then((res: PictureTagUrlModel[]) => {
            renderGrid(res)
        })
        return () => { }
    }, [])

    const onSearch = async (text: string) => {
        const urlEncoded = encodeURIComponent(text)
        await pictureService.searchForPictures(urlEncoded).then(res => {
            renderGrid(res)
        })
    }

    const renderCols = (columnAmount: number, pictures: PictureTagUrlModel[], currentRow: number): JSX.Element[] => {
        const columnViews = []
        for (let column = 0; column < columnAmount; column++) {
            const element = pictures[(currentRow + (currentRow * 3)) + column]
            columnViews.push(
                <Col onClick={() => {
                    setShowPictureModal(true)
                    setCurrentPicture(element)
                }
                } key={currentRow + column}>
                    <PictureThumbnail picture={element} />
                </Col>
            )
        }
        return columnViews
    }

    const renderGrid = (pictures: PictureTagUrlModel[]) => {
        if (pictures.length > 3) {
            const rows = Math.ceil(pictures.length / 4)
            const remainingCols = pictures.length % 4

            const jsxElement: JSX.Element[] = []
            for (let row = 0; row < rows; row++) {
                if (row == rows - 1) {
                    jsxElement.push(
                        <Row className="mb-3" xs={1} sm={1} md={2} lg={2} xl={4} xxl={4} key={row}>
                            {
                                renderCols(remainingCols, pictures, row)
                            }
                        </Row>
                    )
                }
                else {
                    jsxElement.push(
                        <Row className="mb-3" xs={1} sm={1} md={2} lg={2} xl={4} xxl={4} key={row}>
                            {
                                renderCols(4, pictures, row)
                            }
                        </Row>
                    )
                }
            }
            setElements(jsxElement)
        }
        else {
            if (pictures.length == 0)
                return
                
            const jsxElement = []
            jsxElement.push(
                <Row className="mb-3" xs={1} sm={1} md={2} lg={2} xl={4} xxl={4} key={1}>
                    {
                        renderCols(pictures.length, pictures, 0)
                    }
                </Row>
            )
            setElements(jsxElement)
        }
    }

    return (
        <div className="body">
            <SearchBar onSearch={onSearch} onChange={() => { }} />
            <ShowPictureModal show={showPictureModal} onClose={() => setShowPictureModal(false)} picture={currentPicture} />
            <Container fluid>
                {
                    elements.length != 0 ? elements :
                        <AlertBox show={true} variant='info' text={"Noch keine Bilder vorhanden."} />
                }
            </Container>
        </div >
    )
}

