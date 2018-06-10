import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchBooks } from "./actions/book";
import Search from './components/search';
import ViewBook from './components/view-book';
import './App.css';

class App extends Component {
  handleSubmit = (e, value) => {
       e.preventDefault();
       this.props.searchBooks(value);
  }
  render() {
    const {  books: booksData } = this.props;
    const { isLoading, books } = booksData;
    const viewBooks = Object.keys(books).map((book, key) => <ViewBook book={books[key]} key={key} />);
    return (
      <div>
        <Search
          handleSubmit={ this.handleSubmit }
          isLoading= {isLoading }
          />
        <div className="container">
          <div className="row">
              {viewBooks}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ( {books} ) => ({ books });

export default connect(mapStateToProps, { searchBooks })(App);
