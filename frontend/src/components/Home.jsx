import { useState, useEffect } from 'react';
import useAuth from '../useAuth.js';
import { Container} from "@mui/material";
import { Form } from "react-bootstrap";
import SpotifyWebApi from "spotify-web-api-node";
import TrackSearchResult from './TrackSearchResult';
import Player from './Player';
import axios from 'axios';

const spotifyApi = new SpotifyWebApi({
  clientId: "e22082cdc99a4af8a1860788ee93fc4e",

})

export default function Home({code}) {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [currentTrack, setCurrentTrack] = useState()
  const [lyrics, setLyrics] = useState("")

  function chooseTrack(track) {
    setCurrentTrack(track)
    setSearch("")
    setLyrics("")
}
// console.log(searchResults);


useEffect(() => {
  if(!currentTrack) return 

  axios.get('http://localhost:8080/lyrics', {
      params: {
      track: currentTrack.title,
      artist: currentTrack.artist
      }
  })
  .then(response => {
      setLyrics(response.data.lyrics)
  })
}, [currentTrack])

useEffect(() =>{
  if(!accessToken) return
  spotifyApi.setAccessToken(accessToken)
}, [accessToken])

useEffect(() => {
  if(!search) return setSearchResults([])
  if(!accessToken) return
  let cancel = false;
  spotifyApi
  .searchTracks(search)
  .then(res => {
      // console.log(res.body.tracks.items)

     if(cancel)  return

     setSearchResults(res.body.tracks.items.map(track => {
          const smallestAlbumImage = track.album.images.reduce(
              (smallest, image) => {
                  if(image.height < smallest.height) return image 
                  return smallest
              }, track.album.images[0])

          return {
              artist: track.artists[0].name,
              title: track.name,
              uri: track.uri,
              albumUrl: smallestAlbumImage.url
          }
      }))
  })

  return ( ) => cancel = true
}, [search], [accessToken])


  return (
    <Container className="d-flex flex-column py-2" style={{ height: "100vh"}}>
        {/* {code} */}
    <Form.Control 
    type="search" 
    placeholder="Search Songs/Artists" 
    value={search} 
    onChange={e => setSearch(e.target.value)}
    />
    <div className="flex-grow-1 my-2" style={{overflowY: "auto"}}>
        {searchResults.map(track => (
            <TrackSearchResult 
            track={track} 
            key={track.uri}
            chooseTrack={chooseTrack} 
            />
        ))}
        {searchResults.length === 0  && (
            <div className="text-center" style={{whiteSpace: "pre"}}>
                {lyrics}
            </div>
        )}
        </div>
    <div><Player accessToken={accessToken} trackUri={currentTrack?.uri}/></div>
    </Container>
  )
}
