import React, { Component } from "react";

export default class Register extends Component {
  state = {
    username: {
      val: "",
      bgc: "white"
    },
    password: {
      val: "",
      bgc: "white"
    },
    email: {
      val: "",
      bgc: "white"
    },
    age: {
      val: "",
      bgc: "white"
    },

  };
  validField = (element) => {
    let tmp=element.target.value;
    switch (element.target.name) {
      case "userName":
        // this.state.username.setState({value:element.target.value});
        this.setState({ username: { val: tmp } });
        // if (
        //   this.state.username.val.length > 5 &&
        //   this.state.username.val.length < 9
        // ) {
          if (
            tmp.length > 5 &&
            tmp.length < 9
          ) {
          this.setState({ username: { bgc: "green" } });
        } else {
          this.setState({ username: { bgc: "white" } });
        }
        break;
      case "password":
        this.setState({ password: { val: tmp } });
        console.log(this.state.password);
        if (tmp.length > 1 && tmp.length <= 7) {
          this.setState({ password: { bgc: "green" } });
        } else if (tmp.length > 7) {
          this.setState({ password: { bgc: "red" } });
        } else {
          this.setState({ password: { bgc: "white" } });
        }
        break;
      case "email":
        this.setState({ email: { val: tmp } });
        if (tmp[3] === "@") {
          this.setState({ email: { bgc: "green" } });
        } else {
          this.setState({ email: { bgc: "white" } });
        }
        break;

      case "age":
        this.setState({ age: { val: tmp } });

        console.log(tmp);
        if(tmp.length==0 && this.state.age.bgc!="white"){
          this.setState({ age: { bgc: "white" } });

        }
        else if(0 === tmp %(!isNaN(parseFloat(tmp)) && 0 <= ~~tmp)){
          this.setState({ age: { bgc: "green" } });
        }
        else{
          this.setState({ age: { bgc: "red" } });
        }
        break;
      default:
    }
    // if (element.target.value.length > 5){
    //     this.setState({title:element.target.value, bgc:'green'});
    // }else{
    //     this.setState({bgc: 'white'});
    // }
  };

  render() {
    return (
      <div className="reactReg">
        <div className="row">
          <div className="col-md-8 col-lg-1"></div>

          <input
            name="userName"
            onChange={this.validField}
            style={{ backgroundColor: this.state.username.bgc }}
            type="text"
            placeholder="userName"
            className="col-md-8 col-lg-3 inpfield"
          />

          <div className="col-md-8 col-lg-8"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-8 col-lg-1"></div>

          <input
            name="password"
            onChange={this.validField}
            style={{ backgroundColor: this.state.password.bgc }}
            type="password"
            placeholder="Password"
            className="col-md-8 col-lg-3 inpfield"
          />

          <div className="col-md-8 col-lg-8"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-8 col-lg-1"></div>

          <input
            name="email"
            onChange={this.validField}
            style={{ backgroundColor: this.state.email.bgc }}
            type="text"
            placeholder="Email"
            className="col-md-8 col-lg-3 inpfield"
          />

          <div className="col-md-8 col-lg-8"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-8 col-lg-1"></div>

          <input
            name="age"
            onChange={this.validField}
            style={{ backgroundColor: this.state.age.bgc }}
            type="text"
            placeholder="Age"
            className="col-md-8 col-lg-3 inpfield"
          />

          <div className="col-md-8 col-lg-8"></div>
        </div>
        <br />

        <div className="row">
          <div className="col-md-8 col-lg-4"></div>
          <button className="col-md-8 col-lg-4 btn-submit">submit</button>
          <div className="col-md-8 col-lg-4"></div>
        </div>
      </div>
    );
  }
}
