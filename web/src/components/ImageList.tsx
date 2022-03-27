import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import PictureTagUrlModel from '../models/PictureTagUrlModel'
import { AlertBox } from './AlertBox'
import PictureThumbnail from './picturethumbnail/PictureThumbnail'

export interface PictureListProps {
    pictures: PictureTagUrlModel[]
    onClickPicture: (picture: PictureTagUrlModel) => void
}

function PictureList(props: PictureListProps) {

    const [elements, setElements] = useState<JSX.Element[]>([]);

    useEffect(() => {
        renderGrid(props.pictures)
        return () => { }
    }, [props.pictures])

    const renderCols = (columnAmount: number, pictures: PictureTagUrlModel[], currentRow: number): JSX.Element[] => {
        const columnViews = []
        for (let column = 0; column < columnAmount; column++) {
            const element = pictures[(currentRow + (currentRow * 3)) + column]
            columnViews.push(
                <Col onClick={() => {
                    props.onClickPicture(element)
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
                if (row == rows - 1 && rows - 1 > 0) {
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
        <div>
            {
                elements.length != 0 ? elements :
                    <AlertBox show={true} variant='info' text={"Noch keine Bilder vorhanden."} />
            }
        </div>
    )
}

export default PictureList