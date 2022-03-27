import { useState } from 'react'
import { FormControl, InputGroup, ListGroup } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
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
    ).then(res => {

    })
  }


  const render = () => {
    const jsxElement = []
    const bufferPic = {
      path: "",
      id: 1,
      url: "",
      thumbnail: ""
    }
    for (const key in metaData) {
      if (bufferPic.hasOwnProperty(key)) {
        continue
      }
      if (metaData!.hasOwnProperty(key)) {
        const copy = metaData as any
        if (copy[key]) {
          console.log(key);
          jsxElement.push(<MetaDataItem key={key} keyItem={key} value={copy[key]} onSave={onSaveMetaData} />)
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