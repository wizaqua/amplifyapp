import React, { Component } from 'react';

export class FormApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            message: ''
        };
    }
    handleInput({ target: { value } }) {
        this.setState({
          value
        });
      }
    send() {
        console.log('send called!');
    }
    render() {
        return (
            <div>
              <input type="text" value={this.state.value} onChange={this.handleInput.bind(this)} />
              <button onClick={this.send.bind(this)}>SEND</button>
              <div>{this.state.message}</div>
            </div>
          );
    }
}