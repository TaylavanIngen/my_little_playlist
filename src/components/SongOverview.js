import React from "react"
import SongForm from "./SongForm"
import SongList from "./SongList"

class SongOverview extends React.Component {

  constructor() {
    super()
    this.state =
    {
      songs:[]

    }
  }

  componentDidMount() {
 this.fetchData();
  }

  async fetchData(){
       try {
         const result = await fetch('https://wincacademydatabase.firebaseio.com/tayla/songs.json', {
           method: "GET"
         })
         const data = await result.json();
         console.log("Before (the raw result):", data);
         let songs = Object.keys(data).map(key => ({
           id: key,
           name: data[key].name,
           artist: data[key].artist,
           genre: data[key].genre,
           rating: data[key].rating
         }));
         console.log("After the songs array", {songs});

         this.setState({songs: songs})

       } catch (err) {
         console.log(err.message);
       }
     }

      async postData(data) {
       try {

         const resultPost = await fetch('https://wincacademydatabase.firebaseio.com/tayla/songs.json', {
           method: 'POST',
           body: data
           })
         const dataPost = await resultPost.json();
         console.log(dataPost);
       } catch (err) {
         console.log(err.message)
       }
     }



  handleSubmit = (event)=> {
    event.preventDefault();
    const formData=new FormData(event.target);
    console.log("I've been submitted");
    console.log(stringifyFormData(formData))
    const newSong= stringifyFormData(formData)
    this.postData(newSong);
    this.addSong (newSong);
  }

  addSong = (song)=>{
			console.log("I am clicked!")
      const oldSongList= this.state.songs
      const newSongParsed=JSON.parse(song)
      this.setState({songs:[...oldSongList, newSongParsed]})

  }



  render() {
    return (
      <div>
	      <SongForm handleSubmit={this.handleSubmit}/>
				<div className="tableDiv"	><table >
		        <tbody><tr className="song-header">
			        <th className="song-row__item">Song</th>
			        <th className="song-row__item">Artist</th>
			        <th className="song-row__item">Genre</th>
			        <th className="song-row__item">Rating</th>
			      </tr>
            <SongList songs={this.state.songs}/>
            </tbody>
				</table>
        </div>

      </div>
    );
  }
}

function stringifyFormData(fd) {
  const data = {};
	for (let key of fd.keys()) {
  	data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}



export default SongOverview;
