import React from 'react';
import Book from './Book';

const BookResults = (props) => {

    return (
        <div className="book-results">
            {
                props.books.map((book) => {
                    return <Book 
                                key={book.id}
                                image={book.volumeInfo.imageLinks.thumbnail} 
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                year={book.volumeInfo.publishedDate}
                                info={book.volumeInfo.infoLink}
                            />
                })
            }
        </div>
    );
}


export default BookResults;