import React, { Component } from 'react'

export default class Post extends Component {
    closePost = () =>{
        alert(`Closing post: ${this.props.title}`);
    }
    
    render(props) {
        return (
            <div className="reactPost row">
        <div className="col-4"></div>
        <div className="col-4">
        <button onClick={this.closePost} className="close"></button>
        <div className="row">
            <div className="col-4"></div>
            <h2 className="col-4"> Post:</h2>
            <div className="col-4"></div>
        </div>
        <div className="row"><p  id="postTitle">Title :{this.props.title}</p></div>
        <div className="row"><p>Info :{this.props.info}</p></div>

        </div>
        <div className="col-4"></div>

    </div>
        )
    }
}
