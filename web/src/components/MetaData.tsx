import { ListGroup } from 'react-bootstrap'
import PictureServie from '../core/PictureService'
import PictureDto from '../models/PictureDto'
import PictureTagUrlModel from '../models/PictureTagUrlModel'
import MetaDataItem from './MetaDataItem'


export interface MetaDataProps {
  picture: PictureTagUrlModel | null
}


function MetaData(props: MetaDataProps) {

  const pictureService = new PictureServie()
  let metaData: PictureDto | undefined = props.picture?.picture

  const onSaveMetaData = (key: string, value: string) => {
    if (!metaData?.id)
      return

    (metaData as any)[key] = value

    pictureService.changeData(
      metaData?.id,
      metaData?.name,
      metaData?.artist,
      metaData?.usercomment,
      metaData?.Orientation
    )
  }


  const render = () => {
    const jsxElement = []
    const addedKeys: string[] = []

    const bufferPic = {
      path: "",
      id: 1,
      url: "",
      thumbnail: ""
    }
    for (const key in metaData) {
      //Use bufferpic for not displaying some properties
      if (bufferPic.hasOwnProperty(key)) {
        continue
      }
      
      if (metaData!.hasOwnProperty(key)) {
        const copy = metaData as any
        if (copy[key]) {
          addedKeys.push(key)
          jsxElement.push(<MetaDataItem key={key} keyItem={key} value={copy[key]} onSave={onSaveMetaData} />)
        }
      }
    }
    //Keys being available to edit
    const keysToAdd = ["artist", "usercomment", "Orientation"]
    keysToAdd.forEach(item => {
      if (!addedKeys.includes(item)) {
        jsxElement.push(<MetaDataItem key={item} keyItem={item} value={""} onSave={onSaveMetaData} />)
      }
    })

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