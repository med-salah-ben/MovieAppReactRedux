import React, { Component } from "react";
import { Card, CardImg } from "reactstrap";
import { connect } from "react-redux";

import ModalComp from "../ModalComp/ModalComp";
import { addNewMovie } from "../../js/actions/Actions";

class AddnewMovie extends Component {
  state = {
    isOpen: false
  };
  toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen
    });
  render() {
    return (
      <div>
        <Card style={{ width: "20rem" }}>
          <CardImg
            top
            src={require("../../assets/add.svg")}
            alt="..."
            className="Card"
            onClick={() => this.toggle()}
          />
        </Card>
        <ModalComp
          isOpen={this.state.isOpen}
          toggle={this.toggle}
          handleclick={this.props.addNewMovie}
        />
      </div>
    );
  }
}
export default connect(null, { addNewMovie })(AddnewMovie);
