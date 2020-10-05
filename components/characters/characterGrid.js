import React from 'react'
import { CharacterItem } from './characterItem';
import { Progress } from './../Progress';

export function CharacterGrid({ items }) {

    return (
        items.length === 0
            ? <Progress />
            : <section className='cards'>{items.map((item) => <CharacterItem key={item.char_id} item={item}></CharacterItem>)}</section>
    )
}
