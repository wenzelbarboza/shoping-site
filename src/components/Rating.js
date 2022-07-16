import React from 'react'

const Rating = ({ rate, style, onClick }) => {
    return (
        <span >
            {[...Array(5)].map((_, i) => {
                return (
                    <span key={i} style={style} onClick={() => onClick(i + 1)}>
                        {rate > i ? <span>1</span> : <span>0</span>}
                    </span>
                )
            })}
        </span>
    )
}

export default Rating