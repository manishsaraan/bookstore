import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchBooks } from "./actions/book";
import Search from './components/search';
import './App.css';

class App extends Component {
  componentWillMount(){
    this.props.searchBooks();
  }

  handleSubmit = (e, value) => {
       e.preventDefault();
       this.props.searchBooks(value);
  }
  render() {
    const { isLoading, books } = this.props;
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

const mapStateToProps = ({ books }) => ({ books: { books }});

export default connect(mapStateToProps, { searchBooks })(App);
