import { useState, useEffect } from "react"
import './App.css';
import Container from '@material-ui/core/Container';

function App() {
  const url = 'https://api.github.com/users/';
  const [user, setUser] = useState(null);
  const [errorOnSearch, setError] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const handleInputChange = (event) => {
    const value = event.target.value;
    setUser(value);
   // console.log(value);
  }
  const handleSearch = async (event) => {
    fetch(`https://api.github.com/users/${user}`, {
        method: 'GET',
        headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
        }
    })
    .then(response => { return response.json();})
    .then(responseData => {console.log(responseData); return responseData;})
   // .then(data => {this.setState({"questions" : data});})

    .catch(err => {
        console.log("fetch error" + err);
    });








/*

   const res = await fetch(`https://api.github.com/users/${user}`)
   if(res.status === 200) {
     setError(null);
    // setUser(res.json());
    //setSearchResults(res.json());
    console.log(res.json());
   }


    //console.log(searchResults);
    */
  }
  return (
    <Container className="d-flex flex-column py-2">
    <div className="App">
        <div className="input">
          <h1>Search for a user</h1>
          <input className="inputElem" placeholder="Search GitHub" onChange={handleInputChange}/>
        </div>
      <button onClick={handleSearch}>Search</button>



    
      <div className="image-wrapper">
        <img src="https://source.unsplash.com/random" className="image-adjust" alt="user avatar"></img>
      </div>
      <div className="error-info"><p>{errorOnSearch ? errorOnSearch : ''}</p></div>
      <div className="text-center" style={{ whiteSpace: "pre" }}>
        <p className="text-stuff">
              </p>
          </div>

      </div>
      </Container>

  );
}

export default App;
