import React from "react"
import SongListItem from "./SongListItem"

function SongList(props) {

const stateSongs=props.songs
const individualSongs= stateSongs.map(song=> <SongListItem key={song.id} name={song.name} artist={song.artist} genre={song.genre} rating={song.rating}/>)

  return individualSongs


  }

  export default SongList
