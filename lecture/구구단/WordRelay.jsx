const React = require('react');
const {Component} = React;

class WordRelay extends Component{
    state ={
        data:'hello world',
    }
    render(){
        return(
         <h1>{this.state.data}</h1>
        );
    }
}
module.exports = WordRelay;
