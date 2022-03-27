import { Card } from 'react-bootstrap'
import PictureTagUrlModel from '../../models/PictureTagUrlModel'
import './PictureThumbnail.scss'

export interface PictureThumbnailProps {
    picture: PictureTagUrlModel
}

function PictureThumbnail(props: PictureThumbnailProps) {
    return (
        <Card className="PictureThumbnail  m-3" >
            <Card.Body className="image-card-body">
                <img className="imagethumbnail" src={props.picture?.thumbnail} alt={props.picture?.picture?.name} width={250} height={250} />
            </Card.Body>
        </Card>
    )
}

export default PictureThumbnail