import React from 'react';

const ViewBook = ({ book }) => {
    const { volumeInfo } = book;
    const { authors, averageRating, publishedDate, imageLinks = [], title } = volumeInfo;
    return (
        <div className="col-md-3 book_container">
        <div className="card">
                <img className="card-img-top" src={imageLinks.thumbnail} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"> {authors && authors.join(', ')}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Rating: {averageRating}</li>
                    <li className="list-group-item">Published Date: {publishedDate}</li>
                </ul>
        </div>
      </div>
    );
}

export default ViewBook;