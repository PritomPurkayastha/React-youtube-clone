import React from 'react'
import "./SuggestedVideos.css"
// import { useContext } from 'react'
// import setContext from '../../Context/Context';
import SuggestedVideoCard from './SuggestedVideoCard';

function SuggestedVideos() {
  let newData = localStorage.getItem("data");
  let data=(JSON.parse(newData));
  // const{data, setData}=useContext(setContext);
  if(data!==null){
    return (
      <div className="suggestedVideos">
       { data.items.map((element)=>{
          return <SuggestedVideoCard
          image={element.snippet.thumbnails.medium.url}
          title={element.snippet.title}
          channelLogo=""
          views={element.statistics.viewCount}
          likes={element.statistics.likeCount}
          time="3 days ago"
          channel={element.snippet.channelTitle}
          channelId={element.snippet.channelId}
          key={element.id}
          id={element.id}
          description={element.snippet.description}
          NumberOfComments={element.statistics.commentCount}
        />
       })}
      </div>
    );
  }
}

export default SuggestedVideos