import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchBooks } from "./actions/book";
import Search from './components/search';
import ViewBook from './components/view-book';
import Pagination from './components/Pagination';
import './App.css';

class App extends Component {
  state = {
    pageCount: 1,
  };

  handleSubmit = (e, value) => {
       e.preventDefault();
       this.props.searchBooks(value);
  }

  LoadMoreBooks = (type) => {
    const { pageCount } = this.state;
    type === 'add' ? pageCount + 1 : pageCount -1;
    this.setState({ pageCoun });
  }
  render() {

    const { books } = this.props;
    const { books: booksData, isLoading } = books;
    const { items = [], totalItems  } = booksData;

    const viewBooks = items.map((book, key) => <ViewBook book={book} key={key} />);

    return (
      <div>
        <Search
          handleSubmit={ this.handleSubmit }
          isLoading= {isLoading }
          />
        { items.length > 0 && (<div className="container">
                <div className="row">
                    {viewBooks}
                </div>
                <div className="pagination-container">
                  <button onClick={ () => this.LoadMoreBooks('add') } disabled={this.state.pageCount === 1}>Previous</button>
                  <button onClick={ () => this.LoadMoreBooks('remove') } >Next</button>
                </div>
        </div>
        )
        }
      </div>
    );
  }
}

const mapStateToProps = ( {books} ) => ({ books });

export default connect(mapStateToProps, { searchBooks })(App);
