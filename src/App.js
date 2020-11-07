import { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { getTokenFromUrl } from './spotify';

function App() {

  // States
  const [token, setToken] = useState(null);

  // Get Access Token from Loading Component
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; // clear the info from url
    const _token = hash.access_token; //"tmp token" '_' 4not misunderstanding the 'token state'
    // console.log('access_token->', token);

    if (_token) {
      setToken(_token);
    }

  }, []);

  return (
    <div className="App">
      
      { // if have token, return the PlayerComponent, else return LoginComponent
        token ?
          {/*<Player />*/}
         : (
          <Login />
        )
      }

    </div>
  );
}

export default App;
