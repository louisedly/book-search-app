import React from 'react';

const BookResults = (props) => {

    return (
        <div className="book-results">
            {
                props.books.map((book) => {
                    return (
                        <div className="book-container" key={book.id}>
                            <a href={book.volumeInfo.infoLink} target={"_blank"} rel={"noopener noreferrer"}>
                                <div className="book-info">
                                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                                    <h2>Title: {book.volumeInfo.title}</h2>
                                    <h3>Author: {book.volumeInfo.authors}</h3>
                                    <h3>Published: {book.volumeInfo.publishedDate}</h3>
                                </div>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    );
}


export default BookResults;

