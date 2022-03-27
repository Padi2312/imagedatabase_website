import { ListGroup } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import PictureDto from '../models/PictureDto'
import PictureTagUrlModel from '../models/PictureTagUrlModel'


export interface MetaDataProps {
  picture: PictureTagUrlModel | null
}


function MetaData(props: MetaDataProps) {

  const metaData: PictureDto | undefined = props.picture?.picture

  const render = () => {
    const jsxElement = []
    const bufferPic = {
      originalname: "",
      path: "",
      id: 1,
      url: ""
    }
    for (const key in metaData) {
      if (bufferPic.hasOwnProperty(key)) {
        continue
      }
      if (metaData!.hasOwnProperty(key)) {
        const copy = metaData as any
        if (copy[key]) {
          jsxElement.push(
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">{key}</div>
                {copy[key]}
              </div>
              {
                (key.toLowerCase() == "name" || key.toLowerCase() == "orientation") ?
                  <span role="button" onClick={() => { console.log("first") }}>
                    <FaEdit />
                  </span>
                  : <></>
              }

            </ListGroup.Item>
          )
        }
      }
    }


    return jsxElement
  }

  return (
    <div>
      <ListGroup variant="flush">
        {render()}
      </ListGroup>
    </div>
  )
}

export default MetaData