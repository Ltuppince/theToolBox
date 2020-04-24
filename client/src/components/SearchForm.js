import React from "react";

function SearchForm(props) {
console.log(props)
  return (
    
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleChange}
          // value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="I'd like to explore..."
          id="search"
        />
        <br />
       
      </div>
    </form>
  );
}


export default SearchForm;