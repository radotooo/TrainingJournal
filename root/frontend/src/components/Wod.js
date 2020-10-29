import React from 'react'

export default function Wod({ data }) {
    return (
        <div dangerouslySetInnerHTML={{ __html: data }}>
        </div>
    )
}
