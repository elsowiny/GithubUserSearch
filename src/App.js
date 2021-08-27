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
    .then(responseData => {
      console.log(responseData); 
      setUser(responseData);
    })
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
        <img src={user ? user.avatar_url : ""} className="image-adjust" alt="user avatar"></img>
      </div>
      <div className="error-info"><p>{errorOnSearch ? errorOnSearch : ''}</p></div>
      <div className="text-center" style={{ whiteSpace: "pre" }}>
        
          </div>
          <div>
            {user ? user.login : ''}<br></br>
            {user ? user.bio : ''}<br></br>
            followers: {user ? user.followers : ''}<br></br>
            following: {user ? user.following : ''}<br></br>
            repositories: {user ? user.public_repos : ''}<br></br>

            Github : {user ? <a href={user.html_url}>{user.html_url}</a> : ''}<br></br>
            {/*
            {login: "elsowiny", id: 6583011, node_id: "MDQ6VXNlcjY1ODMwMTE=", avatar_url: "https://avatars.githubusercontent.com/u/6583011?v=4", gravatar_id: "", …}
avatar_url: "https://avatars.githubusercontent.com/u/6583011?v=4"
bio: null
blog: "elsowiny.com"
company: null
created_at: "2014-02-04T09:19:52Z"
email: null
events_url: "https://api.github.com/users/elsowiny/events{/privacy}"
followers: 12
followers_url: "https://api.github.com/users/elsowiny/followers"
following: 10
following_url: "https://api.github.com/users/elsowiny/following{/other_user}"
gists_url: "https://api.github.com/users/elsowiny/gists{/gist_id}"
gravatar_id: ""
hireable: true
html_url: "https://github.com/elsowiny"
id: 6583011
location: null
login: "elsowiny"
name: "Sherief Elsowiny"
node_id: "MDQ6VXNlcjY1ODMwMTE="
organizations_url: "https://api.github.com/users/elsowiny/orgs"
public_gists: 0
public_repos: 65
received_events_url: "https://api.github.com/users/elsowiny/received_events"
repos_url: "https://api.github.com/users/elsowiny/repos"
site_admin: false
starred_url: "https://api.github.com/users/elsowiny/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/elsowiny/subscriptions"
twitter_username: null
type: "User"
updated_at: "2021-08-22T07:24:16Z"
url: "https://api.github.com/users/elsowiny"

*/}
           




















          </div>

      </div>
      </Container>

  );
}

export default App;
