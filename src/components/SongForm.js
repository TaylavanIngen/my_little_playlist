import React from "react"

function SongForm (props){

  return(
    <div className="formDiv"><form onSubmit={props.handleSubmit}>
    <label htmlFor="name">Song:</label>
    <input type="text" id="songInput" name="name"/>
    <label htmlFor="artist">Artist:</label>
    <input type="text" id="artistInput" name="artist"/>
      <label htmlFor="genre">Genre:</label>
    <select id="genreInput"name="genre">
    <option value="Jazz">Jazz</option>
    <option value= "Rock 'n' Roll">Rock 'n' Roll</option>
    <option value= "Death Metal">Death Metal</option>
    </select>
      <label htmlFor="rating">Rating:</label>
    <select id= "ratingInput" name="rating">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    </select>
    <input type="submit"/>
    </form>

</div>
  )
}

export default SongForm
