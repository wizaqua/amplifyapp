import React, { Component } from 'react';

export class FormApp extends Component {
    send() {
        console.log('send called!');
    }
    render() {
        return (
            <div>
                <input type="text" />
                <button onClick={this.send.bind(this)}>SEND</button>
            </div>
        );
    }
}