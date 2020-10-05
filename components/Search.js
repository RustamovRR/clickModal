import React, { useState } from 'react'

export function Search({ getQuery }) {
    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e)
        getQuery(e)
    }

    return (
        <div >
            <form >
                <input
                    autoFocus
                    type='text'
                    value={text}
                    className='search'
                    placeholder='Search characters'
                    onChange={(e) => onChange(e.target.value)}
                />
            </form>
        </div>
    )
}
