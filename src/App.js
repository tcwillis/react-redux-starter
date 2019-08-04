import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './store/actions/postActions';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>

          <button onClick={() => this.props.fetchPosts()}>Test redux action</button>
          <pre>
            {
              JSON.stringify(this.props)
            }
          </pre>

        </header>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: user => dispatch(fetchPosts(user))
})

export { App };

export default connect(mapStateToProps, mapDispatchToProps)(App);
