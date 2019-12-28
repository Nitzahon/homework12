import React, { Component } from "react";

export default class Register extends Component {
  state = {
    username: "",
    usernameBgc: "white",
    password: "",
    passwordBgc: "white",
    email: "",
    emailBgc: "white",
    age: "",
    ageBgc: "white"
  };
  // state = {
  //   username: {
  //     val: '',
  //     bgc: "white"
  //   },
  //   password: {
  //     val: '',
  //     bgc: "white"
  //   },
  //   email: {
  //     val: '',
  //     bgc: "white"
  //   },
  //   age: {
  //     val: '',
  //     bgc: "white"
  //   },
  //   tester:''
  // };
  submit = () => {
    let str = "";
    console.log(str);
    if (this.state.usernameBgc != "green") {
      str = str + "-Username must be between 6 and 8 characters.\n";
      console.log(str);
    }

    if (this.state.passwordBgc != "green") {
      str = str + "-Password must be at most 7 characters.\n";
    }
    if (this.state.emailBgc != "green") {
      str = str + '-E-mail must have "@" symbol as 4th char.\n';
    }
    if (this.state.ageBgc != "green") {
      str = str + "-Age must be positive number.\n";
    }
    console.log(str);
    if (str !== "") {
      alert(`Errors found: \n ${str}`);
    } else {
      alert("Submission Valid!");
    }
  };
  validField = element => {
    let tmp = element.target.value;
    switch (element.target.name) {
      case "userName":
        // this.state.username.setState({value:element.target.value});
        this.setState({ username: tmp });

        if (tmp.length > 5 && tmp.length < 9) {
          this.setState({ usernameBgc: "green" });
        } else {
          this.setState({ usernameBgc: "white" });
        }
        break;
      case "password":
        this.setState({ password: tmp });
        if (tmp.length > 1 && tmp.length <= 7) {
          this.setState({ passwordBgc: "green" });
        } else if (tmp.length > 7) {
          this.setState({ passwordBgc: "red" });
        } else {
          this.setState({ passwordBgc: "white" });
        }
        break;
      case "email":
        this.setState({ email: tmp });
        if (tmp[3] === "@") {
          this.setState({ emailBgc: "green" });
        } else {
          this.setState({ emailBgc: "white" });
        }
        break;

      case "age":
        this.setState({ age: tmp });

        if (tmp.length === 0 && this.state.ageBgc !== "white") {
          this.setState({ ageBgc: "white" });
        }
        // else if(0 === tmp %(!isNaN(parseFloat(tmp)) && 0 <= ~~tmp)){
        else if (/^\+?\d+$/.test(tmp)) {
          this.setState({ ageBgc: "green" });
        } else {
          this.setState({ ageBgc: "red" });
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
            style={{ backgroundColor: this.state.usernameBgc }}
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
            style={{ backgroundColor: this.state.passwordBgc }}
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
            style={{ backgroundColor: this.state.emailBgc }}
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
            style={{ backgroundColor: this.state.ageBgc }}
            type="text"
            placeholder="Age"
            className="col-md-8 col-lg-3 inpfield"
          />

          <div className="col-md-8 col-lg-8"></div>
        </div>
        <br />

        <div className="row">
          <div className="col-md-8 col-lg-4"></div>
          <button
            onClick={this.submit}
            className="col-md-8 col-lg-4 btn-submit"
          >
            submit
          </button>
          <div className="col-md-8 col-lg-4"></div>
        </div>
      </div>
    );
  }
}
