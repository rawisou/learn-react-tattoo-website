import React from "react"

const Search = (props) => {
    const { value, onValueChange } = props
    return (
        <div className="search">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={value}
          onChange={(event) => { onValueChange(event.target.value) }}
        />
      </div>
    )
}

export default Search