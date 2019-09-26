import React, { Component } from "react";

export default class ItemAddForm extends Component {
  
  constructor () {
    super();

    this.state = {
      label: ""
    };

    this.onLabelChange = ( e ) => {
      this.setState({
        label: e.target.value
      });
    }

    this.onSubmit = ( e ) => {
      e.preventDefault();
      this.props.addItem(this.state.label);
    }
  }
  

  render () {
    return (
      <form 
        className="item-add-form d-flex"
        onSubmit={this.onSubmit}
        >
        <input 
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to by done"
        />
        <button className="btn btn-outline-secondary" >
          Add Item
        </button>
      </form>
    )
  }
}