import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Posts from './components/post'
import PostForm from './components/postForm'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

const store = createStore( () => {
  [] , applyMiddleware()
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm></PostForm>
          <Posts></Posts>
        </div>
      </Provider>
    );
  }
}

export default App;
