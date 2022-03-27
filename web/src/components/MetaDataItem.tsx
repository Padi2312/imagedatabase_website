import React, { useEffect, useState } from 'react'
import { ListGroup, InputGroup, FormControl, Button } from 'react-bootstrap'
import { FaEdit, FaSave } from 'react-icons/fa'


export interface MetaDataItemProps {
    keyItem: string
    value: string
    onSave: (key: string, value: string) => void
}


function MetaDataItem(props: MetaDataItemProps) {

    const keysToEdit = ["artist", "name", "orientation", "usercomment"]
    const [key, setKey] = useState("")
    const [text, setText] = useState("")
    const [showEdit, setShowEdit] = useState(false)

    useEffect(() => {
        setKey(props.keyItem)
        setText(props.value)
    }, [props.keyItem, props.value])


    const onChangeText = (e: any) => {
        const value = e.target.value
        setText(value)
    }

    const onSaveChange = () => {
        props.onSave(key, text)
        setShowEdit(false)
    }

    const capitalizeFirstLetter = (text: string) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }


    return (
        <div>
            <ListGroup.Item className="d-flex justify-content-between w-100">
                <div style={{ width: "75%" }}>
                    <div className="fw-bold">{capitalizeFirstLetter(key)}</div>
                    {
                        showEdit ?
                            <InputGroup className="mb-3">
                                <InputGroup.Text>
                                    {capitalizeFirstLetter(props.keyItem)}
                                </InputGroup.Text>
                                <FormControl
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
                    (keysToEdit.includes(props.keyItem?.toLowerCase())) ?
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