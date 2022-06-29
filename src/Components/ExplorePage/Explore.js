import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Explore.css";
import Trending from './Trending';

function Explore() {
    let navigate=useNavigate();
  return (
    <div className='explore'>
        <div className='categories'>
            <div className='TrendingCategory' onClick={()=>{
                navigate("/feed/trending")
            }}>
                <img src="https://www.youtube.com/img/explore/destinations/icons/trending_color_32.png" alt="category"/>
                <p>Trending</p>
            </div>
            <div className='TrendingCategory'>
                <img src="https://www.youtube.com/img/explore/destinations/icons/music_color_32.png" alt="category"/>
                <p>Music</p>
            </div>
            <div className='TrendingCategory'>
                <img src="https://www.youtube.com/img/explore/destinations/icons/movies_color_32.png" alt="category"/>
                <p>Films</p>
            </div>
            <div className='TrendingCategory'>
                <img src="https://www.youtube.com/img/explore/destinations/icons/live_color_32.png" alt="category"/>
                <p>Live</p>
            </div>
            <div className='TrendingCategory'>
                <img src="https://www.youtube.com/img/explore/destinations/icons/gaming_color_32.png" alt="category"/>
                <p>Gaming</p>
            </div>
            <div className='TrendingCategory'>
                <img src="https://www.youtube.com/img/explore/destinations/icons/news_color_32.png" alt="category"/>
                <p>News</p>
            </div>
            <div className='TrendingCategory'>
                <img src="https://www.youtube.com/img/explore/destinations/icons/sports_color_32.png" alt="category"/>
                <p>Sport</p>
            </div>
            <div className='TrendingCategory'>
                <img src="https://www.youtube.com/img/explore/destinations/icons/learning_color_32_v1.png" alt="category"/>
                <p>Learning</p>
            </div>
            <div className='TrendingCategory'>
                <img src="https://www.youtube.com/img/explore/destinations/icons/fashion_and_beauty_color_32.png" alt="category"/>
                <p>Fashion & beauty</p>
            </div>
        </div>
        <h2>Trending Videos</h2>
        <Trending/>
    </div>
  )
}

export default Explore