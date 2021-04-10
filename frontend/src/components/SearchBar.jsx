import React from 'react'
import './SearchBar.css';
const SearchBar = ({input: keyword, onChange: setKeyword}) => {
    return (
        <form class="example" action="">
        <input id="search_bar" key='random1' name="search" value={keyword} placeholder={"Search Company"} onChange={(e) => setKeyword(e.target.value)}/>
        {/* <button type="submit"><i class="fa fa-search"></i></button> */}
        </form>
        
    )
}

export default SearchBar