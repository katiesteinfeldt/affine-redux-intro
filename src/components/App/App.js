import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  state = {
    input: '',
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    })
  }
   

  render() {
    return (
      <div className="App">
        Hello Redux
        <button onClick={() => { this.props.dispatch({ type: 'BUTTON_ONE' }) }}> Button One </button>
        <button onClick={() => { this.props.dispatch({ type: 'BUTTON_TWO' }) }}> Button Two </button>
       <input value={this.state.input} onChange={this.handleChange} placeholder="Element Name"></input>
        <button 
          onClick={() => { this.props.dispatch({ type: 'ADD_ELEMENT', payload: this.state.input }) }}
        >
          Add element
          </button>
        <div>
          <pre>
            {JSON.stringify(this.props, null, 2)}
          </pre>
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);
