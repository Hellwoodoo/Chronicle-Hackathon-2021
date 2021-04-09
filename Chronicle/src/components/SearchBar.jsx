import React from 'react'

const SearchBar = ({input: keyword, onChange: setKeyword}) => {
    return (
        <input key='random1' value={keyword} placeholder={"search company"} onChange={(e) => setKeyword(e.target.value)}/>
    )
}

export default SearchBar