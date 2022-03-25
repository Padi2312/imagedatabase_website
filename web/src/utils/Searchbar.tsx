import React, { FormEvent, useState } from 'react'
import { Form, Row, Col, Button, FormGroup, InputGroup, Stack } from 'react-bootstrap'
import { FaSearch, FaUpload } from 'react-icons/fa'
import UploadModal from '../modals/UploadModal'

export interface SearchBarProps {
    onSearch: (text: string) => void
    onChange: (text: string, prevText?: string) => void
}

function SearchBar(props: SearchBarProps) {

    const [searchText, setSearchText] = useState("")
    const [showUploadModal, setShowUploadModal] = useState(false)

    const onChangeText = (e: any) => {
        const prev = searchText
        const value = e.target.value
        setSearchText(value)
        props.onChange(value, prev)
    }

    const submitSearch = (e: FormEvent) => {
        e.preventDefault()
        e.stopPropagation()
        props.onSearch(searchText)
    }

    return (
        <div className='SearchBar'>
            <Form onSubmit={submitSearch} className="mb-3">
                <Stack direction="horizontal" gap={3}>
                        <Form.Control
                            className='me-auto'
                            type="text"
                            aria-describedby="searchbar"
                            placeholder='Suchen Sie nach Tags'
                            onChange={onChangeText}
                        />
                        <Button variant="primary" onClick={submitSearch}>
                            <FaSearch />
                        </Button>
                        <div className='vr'/>
                        <Button variant="secondary" onClick={() => setShowUploadModal(true)}>
                            <span className="nobreak" >Hochladen <FaUpload /></span>
                        </Button>
                </Stack>
                <Form.Text muted >
                    Suchen Sie nach Tags, um Bilder des zugehörigen Tags angezeigt zu bekommen.
                </Form.Text>
            </Form>

            <UploadModal show={showUploadModal} onClose={() => setShowUploadModal(false)} />

        </div>
    )
}

export default SearchBar