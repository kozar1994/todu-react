import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import './index.css';


export default class App extends Component {

  constructor (){
    super();

    this.onToggleImportant = (id) => {
      this.setState(({ todosData })=>{
        return {
          todosData: this.onToggleParams(todosData, id, "important")
        }
      })
    }
    
    this.onToggleDone = (id) => {
      this.setState(({ todosData })=>{
        return {
          todosData: this.onToggleParams(todosData, id, "done")
        }
      })
    }

    this.state = {
      todosData: [
        this.createNewItems("Випити каву"),
        this.createNewItems("Вивчити React"),
        this.createNewItems("Поїсти")
      ],
      term: ""
    };

    this.deleteItem = (id) => {
      this.setState(({ todosData }) => {
        const idx = todosData.findIndex((el) => el.id === id);
        
        const newArray = [
          ...todosData.slice(0,idx),
          ...todosData.slice(idx + 1)
        ];

        return {
          todosData: newArray
        }

      });   
    }

    this.addNewItems = (items) => {
      this.setState(({todosData}) => {
        const newArray = [
          ...todosData,
          this.createNewItems(items)
        ];
        console.log(newArray);
        
        return {
          todosData: newArray
        }
      });
    }

    this.getSearchString = (term) => {
      console.log(term);
      this.setState({term})
      
    }
  } 

  search (items, term) {    
    if(term.length === 0){
      return items;
    }
    console.log(items);

    const search = items.filter((el)=> {
      return el.label.toLowerCase().indexOf(term.toLowerCase()) > 0;
    });
    return search;
  }

  createNewItems (name) {
    return {
      id: Math.random() * 100,
      label: name,
      done: false,
      important: false
    }
  }

  onToggleParams (arr, id, propsName) {
    const idx = arr.findIndex((el) => el.id === id);
    const newArray = arr.slice();
    newArray[idx][propsName] = !newArray[idx][propsName];
    return newArray;
  }

  render () {
    const {todosData,term} = this.state;
    const doneCount = todosData
                      .filter((el) => el.done).length;
    const todoCount = todosData.length - doneCount;
    const viewItems = this.search(todosData, term);

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel getSearchString={this.getSearchString}/>
          <ItemStatusFilter />
        </div>
  
        <TodoList 
          onToggleImportant={ this.onToggleImportant } 
          onToggleDone={this.onToggleDone} 
          onDelete={ this.deleteItem } 
          todos={viewItems} />

        <ItemAddForm addItem={this.addNewItems} />
      </div>
    );
  }
}