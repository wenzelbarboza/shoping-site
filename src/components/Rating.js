import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Rating = ({ rate, style, onClick }) => {
    return (
        <span >
            {[...Array(5)].map((_, i) => {
                return (
                    <span key={i} style={style} onClick={() => onClick(i + 1)}>
                        {rate > i ? <AiFillStar /> : <AiOutlineStar />}
                    </span>
                )
            })}
        </span>
    )
}

export default Rating