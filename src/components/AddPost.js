import React, { Component } from 'react'
import { element } from 'prop-types'

export default class AddPost extends Component {

    state = {
        title: '',
        info: '',
        bgc: "white"
    }

    validTitle = (char) =>{
        // console.log("works");
        // console.log(char.target.value)
        if (char.target.value.length > 5){
            this.setState({title:char.target.value, bgc:'green'});
        }else{
            this.setState({bgc: 'white'});
        }
        
    }



    render() {
        return (
            <div>

                { <input onChange = {this.validTitle} style={{backgroundColor: this.state.bgc}} placeholder = "title" /> /*this makes sure that it will take the function in the class and not in the function render */}
                <input placeholder = "info" />
                <button>Submit</button>

                
            </div>
        )
    }
}
