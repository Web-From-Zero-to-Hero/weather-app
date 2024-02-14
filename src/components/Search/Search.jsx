import React from 'react'
import './Search.css'

const Search = ({handleChange, handleClick}) => {
  return (
    <div className='search'>
      <input className='search-line' type='text' placeholder="Enter the city name" onChange={handleChange}></input>
      <button className='enter-button' onClick={handleClick}>Enter</button>
    </div>
  )
}

export default Search
