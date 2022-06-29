import React, { useState, useContext } from "react";
import axios from "axios";
// import {LyricsContext} from "./Helpers/context"
// import "../styles/lyrics.css";
function Lyrics() {
  //creating a state to store the lyrics of a song
  const [lyrics, setLyrics] = useState("Loading...");
  const [track, setTrack] = useState();
  const [artist, setArtist] = useState();
  //to use contesxt
  // const AppContext=useContext(LyricsContext)//Since appContext can be null, you need to handle that case

  // const{artist,track,searchState,setLyricsState}=LyricsContext

  //function to frtch data from API
  function getlyrics() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${track}&q_artist=${artist}&apikey=c8a353104f63b9c1065d57fc9d8349cb`
      )
      .then((res) => {
        setLyrics(res.data.message.body.lyrics.lyrics_body);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLyrics("An ERROR occurred please try again");
      });
    console.log("done");
  }
  //to check if user has searched for a new lyrics
  // if(searchState===true)
  // {
  //    getlyrics();
  // }
  return (
    <div className="lyrics">
      <div className="titles">
        <span>
          Song Name: {track}
          <br /> Artist Name: {artist}
          <br />
        </span>
      </div>
      <div className="lyrics-container">
        <p className="lyrics-txt">{lyrics}</p>
      </div>
      <button onClick={() => getlyrics()} className="close-btn">
        CLOSE &#10006;
      </button>
    </div>
  );
}

export default Lyrics;
