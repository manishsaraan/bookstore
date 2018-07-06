import React from 'react';

const ViewBook = ({ book }) => {
    console.log(book);
    const { best_book } = book;
    const { author } = best_book;
    return (
        <div className="col-md-3 book_container">
        <div className="card">
                <img className="card-img-top" src={best_book.image_url} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{best_book.title}</h5>
                    <p className="card-text"> {author.name}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Rating: {book.average_rating}</li>
                    <li className="list-group-item">Rating Count: {book.ratings_count}</li>
                </ul>
        </div>
      </div>
    );
}

export default ViewBook;