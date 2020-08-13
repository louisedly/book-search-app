import React from 'react';

const SearchBar = (props) => {

    return (
        <form onSubmit={props.getBooks} action="">
            <label htmlFor="search-bar"></label>
            <input onChange={props.handleUserInput} type="text" placeholder="Search for your favorite book" id="search-bar" required/>
            <button type="submit">Search</button>

        </form>
    )
}


export default SearchBar;