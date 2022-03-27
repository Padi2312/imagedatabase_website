import { FormEvent, useState } from 'react'
import { Button, Form, Stack } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'

export interface SearchBarProps {
    onSearch: (text: string) => void
    onChange: (text: string, prevText?: string) => void
}

function SearchBar(props: SearchBarProps) {

    const [searchText, setSearchText] = useState("")

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
                </Stack>
                <Form.Text muted >
                    Suchen Sie nach Tags, um Bilder des zugehörigen Tags angezeigt zu bekommen.
                </Form.Text>
            </Form>
        </div>
    )
}

export default SearchBar