import React from 'react'
import { Badge } from 'react-bootstrap'

export interface TagListProps {
    tagList: string[]
}

function TagList(props: TagListProps) {
    return (
        <div>
            {
                props.tagList.length == 0 ?
                        <p><b>Noch keine Tags</b></p>
                    : props.tagList?.map((element, index) => {
                        return (
                            <Badge bg="info" key={index} className="me-1">
                                {element}
                            </Badge>
                        )
                    })
            }
        </div>
    )
}

export default TagList