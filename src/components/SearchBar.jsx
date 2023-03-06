import { useState } from "react";
const SearchBar = ({search, setSearch, maxLength, setMaxLength, flip, setFlip}) => {

    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

    const maxLengthHandler = (e) => {
        setMaxLength(e.target.value);
    }

    const handleEvent = () => {
        setFlip(!flip)
        console.log(flip)
    }

    return <>
        <label htmlFor="search">Search Query</label>
        <input type="text" name="search" onChange={searchHandler} value={search} />
        <label htmlFor="max-length">Max Length</label>
        <input type="number" name="max-length" onChange={maxLengthHandler} value={maxLength} />
        <button className="flipButton" onClick={() => handleEvent()}>Flip</button>
    </>
}

export default SearchBar;