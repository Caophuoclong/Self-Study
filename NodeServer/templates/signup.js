import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const element = (
    <div>
        <label name="username" for="username"></label>
        <input name="username"></input>
    </div>
)
ReactDOM.render(
    element,
    document.getElementById('root')
);