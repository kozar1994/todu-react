import React, { Component } from "react";

import './search-panel.css';

export default class SearchPanel extends Component {

  constructor () {
    super();

    this.state = {
      label: ""
    }

    this.labelSearch = (e) => {      
      this.setState({
        label: e.target.value
      })
      this.props.getSearchString(e.target.value);
    }
  }


  render () {
    return <input 
              className="form-control search-input" 
              placeholder="search element"
              onChange={ this.labelSearch }
              value={ this.state.label }
            />   
  }
}