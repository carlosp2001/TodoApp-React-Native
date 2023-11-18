import React, {Component, StrictMode} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';

import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import TodoList from './TodoList';
import TabBar from './TabBar';

let todoIndex = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
    // Se hace binding en el constructor para pasarle la clase,
    // porque se está utilizando clases y las clases no hacen binding automatico
    this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setType = this.setType.bind(this);
  }

  /**
   * Método para cambiar el estado de inputValue
   * @param inputValue
   */
  inputChange(inputValue) {
    console.log(' Input Value: ', inputValue);
    this.setState({inputValue});
  }

  submitTodo() {
    if (this.state.inputValue.match(/^\s*$/)) {
      return;
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex: this.state.todos.length,
      complete: false,
    };
    todoIndex++;
    const todos = [...this.state.todos, todo];
    this.setState({todos, inputValue: ''}, () => {
      console.log('State: ', this.state);
    });
  }

  toggleComplete(todoIndex) {
    let todos = this.state.todos;
    todos.forEach(todo => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
    });
    this.setState({todos});
  }

  setType(type) {
    this.setState({type});
  }

  deleteTodo(todoIndex) {
    console.log(todoIndex);
    let {todos} = this.state;
    todos = todos.filter(todo => todo.todoIndex !== todoIndex);
    this.setState({todos});
  }

  render() {
    const {inputValue, todos, type} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          {/*Aquí se agrega el componente Input que recibe dos props, inputValue y el metodo inputChange*/}
          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
          <TodoList
            type={type}
            todos={todos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
          />
          <Button submitTodo={this.submitTodo} />
        </ScrollView>
        <TabBar type={type} setType={this.setType} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
