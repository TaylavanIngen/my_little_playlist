import React from "react"
import SongForm from "./SongForm"
import SongList from "./SongList"

class SongOverview extends React.Component {

  constructor() {
    super()
    this.state =
    {
      songs: [
        {id:1,
         name:"Psycho",
         artist:"The Sonics",
         genre: "Rock 'n' Roll",
         rating:"4"
       }
      ]
    }
  }


  handleSubmit = (event)=> {
    event.preventDefault();
    const formData=new FormData(event.target);
    let randomId=Math.random();
    formData.append("id", randomId)
    console.log("I've been submitted");
    console.log(stringifyFormData(formData))
    const newSong= stringifyFormData(formData)
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
					<table >
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
