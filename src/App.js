import { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Player from './Components/Player/Player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

// Communication with spotify
const spotify = new SpotifyWebApi();

function App() {

  // set Token in States
  // const [token, setToken] = useState(null);

  const [{ user, token }, dispatch] = useDataLayerValue();

  // Get Access Token from Loading Component
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; // clear the info from url
    const _token = hash.access_token; //"tmp token" '_' 4not misunderstanding the 'token state'
    // console.log('access_token->', token);

    if (_token) {
      // setToken(_token); //state set
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      }) 
      spotify.setAccessToken(_token);

      // get user account
      spotify.getMe().then((user) => { 
        dispatch({
          type: 'SET_USER',
          user: user, // (user: user === user) in es6, same key same value, can call one time only
        })
      }); 

      // get user playlist
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      });

      spotify.getPlaylist('37i9dQZEVXcIJazRV9ISoM').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      })

    }

    // console.log(user);
    // console.log(token);
  }, []);

  return (
    <div className="App">
      
      { // if have token, return the PlayerComponent, else return LoginComponent
        token ?  
          <Player spotify={spotify} />
         : (     
          <Login />
        )
      }

    </div>
  );
}

export default App;
