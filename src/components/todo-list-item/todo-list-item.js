import React, { Component } from "react";

import './todo-list-item.css';

export default class  extends Component {

  render () {
      const { label, onDelete, onToggleImportant, onToggleDone, done, important } = this.props;
      
      let classNames = "todo-list-item";
    
      if( done ){
        classNames += " done";
      }

      if( important ){
        classNames += " important";
      }
    
      return (
        <span className={classNames}>
          <span
            onClick={ onToggleDone }
            className="todo-list-item-label" 
            >
            { label }
          </span>

          <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={ onToggleImportant }>
            <i className="fa fa-exclamation" />
          </button>

          <button type="button"
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={ onDelete }>
            <i className="fa fa-trash-o" />
          </button>
        </span>
      )  
    }
}

// const ToduListItem = ({ label, important = false}) => {

//   const style = {
//     color: important ? "tomato" : "black"
//   }

//   return <span style={style}>{ label }</span>  
// }

// export default ToduListItem;