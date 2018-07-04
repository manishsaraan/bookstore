import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchBooks } from "./actions/book";
import Search from './components/search';
import './App.css';

class App extends Component {
  handleSubmit = (e, value) => {
       e.preventDefault();
       this.props.searchBooks(value);
  }
  render() {
    const {  books: booksData } = this.props;
    const { isLoading, books } = booksData;

    return (
      <div>
        <Search
          handleSubmit={ this.handleSubmit }
          isLoading= {isLoading }
          />
      </div>
    );
  }
}

const mapStateToProps = ( {books} ) => ({ books });

export default connect(mapStateToProps, { searchBooks })(App);
