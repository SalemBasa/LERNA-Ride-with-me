import React from 'react'

export default function ExpandMoreIcon(props) {
    const { color, size } = { color: props.color, size: props.size };

    return (
        <svg fill={color} xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 96 960 960" width={size}><path d="M479.889 715q-8.889 0-17.339-3.545Q454.1 707.909 447 701L249 503q-13-13.25-12.5-33.125T250 436.5q15-15.5 33.5-14T316 437l164 164 164-164q13.5-13 33.75-14T711 437.429q15 13.428 13.5 33Q723 490 710 504L513 701q-7.167 6.909-15.694 10.455Q488.778 715 479.889 715Z" /></svg>
    )
}