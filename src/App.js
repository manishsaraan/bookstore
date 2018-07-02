import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testAction } from "./actions/book";
import './App.css';

class App extends Component {
  componentWillMount(){
    this.props.testAction();
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <form className="form-wrapper">
            <input type="text" id="search" placeholder="Search for..." required/>
            <input type="submit" value="go" id="submit"/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ book }) => ({book: book.data});

export default connect(mapStateToProps, { testAction })(App);
