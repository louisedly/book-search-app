import React from 'react';

const Book = (props) => {

    return (
        <div className="book-container">
            <a href={props.info} target={"_blank"} rel={"noopener noreferrer"}>
                <div className="book-info">
                        <img src={props.image} alt={props.title} />
                        <h2>Title: {props.title}</h2>
                        <h3>Author: {props.author}</h3>
                        <h3>Published: {props.year}</h3>
                </div>
            </a>
        </div>
    );
}


export default Book;