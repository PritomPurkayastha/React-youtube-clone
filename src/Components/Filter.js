import React from 'react'
import "./Filter.css"


function Filter() {
  return (
    <div className='filter'>
        <button className="filter-btn">All</button>
        <button className="filter-btn">Gaming</button>
        <button className="filter-btn">Movies</button>
        <button className="filter-btn">HTML</button>
        <button className="filter-btn">CSS</button>
        <button className="filter-btn">Java Script</button>
        <button className="filter-btn">React</button>
        <button className="filter-btn">Anime</button>
        <button className="filter-btn">Manga</button>
        <button className="filter-btn">Sports</button>
        <button className="filter-btn">Cricket</button>
        <button className="filter-btn">Chess</button>
        <button className="filter-btn">Gadgets</button>
        <button className="filter-btn">Recetly Uploaded</button>
        <button className="filter-btn">Watched</button>
        <button className="filter-btn">New to you</button>
    </div>
  )
}

export default Filter