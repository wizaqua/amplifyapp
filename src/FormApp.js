import React, { Component } from 'react';

export class FormApp extends Component {
    handleInput() {
        console.log('handleInput called!');
    }
    send() {
        console.log('send called!');
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleInput.bind(this)} />
                <button onClick={this.send.bind(this)}>SEND</button>
            </div>
        );
    }
}