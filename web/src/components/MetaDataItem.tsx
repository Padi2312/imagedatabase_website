import React, { useEffect, useState } from 'react'
import { ListGroup, InputGroup, FormControl, Button } from 'react-bootstrap'
import { FaEdit, FaSave } from 'react-icons/fa'


export interface MetaDataItemProps {
    keyItem: string
    value: string
    onSave: (key: string, value: string) => void
}


function MetaDataItem(props: MetaDataItemProps) {

    const [key, setKey] = useState("")
    const [text, setText] = useState("")
    const [showEdit, setShowEdit] = useState(false)

    useEffect(() => {
        setKey(props.keyItem)
        setText(props.value)
        console.log(props);
    }, [props.keyItem, props.value])


    const onChangeText = (e: any) => {
        const value = e.target.value
        setText(value)
    }

    const onSaveChange = () => {
        props.onSave(key, text)
        setShowEdit(false)
    }


    return (
        <div>
            <ListGroup.Item className="d-flex justify-content-between w-100">
                <div style={{ width: "75%" }}>
                    <div className="fw-bold">{key}</div>
                    {
                        showEdit ?
                            <InputGroup className="mb-3">
                                <InputGroup.Text>
                                    {props.keyItem}
                                </InputGroup.Text>
                                <FormControl
                                    className="w-50"

                                    type="text"
                                    value={text}
                                    onChange={(e) => onChangeText(e)}
                                />
                                <Button onClick={onSaveChange}>
                                    <FaSave />
                                </Button>
                            </InputGroup>
                            :
                            <>
                                {text}
                            </>
                    }

                </div>
                {
                    ( props.keyItem?.toLowerCase() == "name" || props.keyItem?.toLowerCase() == "orientation") ?
                        <span role="button" onClick={() => {
                            setShowEdit(!showEdit)
                            setText(props.value)
                        }}>
                            <FaEdit />
                        </span>
                        : <></>
                }

            </ListGroup.Item></div >
    )
}

export default MetaDataItem