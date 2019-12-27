import React from 'react'

export default function Post(props) {
    return (
        <div className="reactPost">
            <h2> Posts:</h2>
            <p>Title :{props.list.title}</p>
            <p>Info :{props.list.info}</p>
        </div>
    )
}
