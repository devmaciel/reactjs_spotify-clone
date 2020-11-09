// Initial State, based on Spotify-Web-API
export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: 'BQBBejLbosKfvvRjYt1JPMtxaxyQTE7qNApXUrlMTs_G8lldHh9wakrgfe7di71bJUXn07MsGNYfZCW_GpsFxWUg_aHpygE8ueFkU5nkNMqmhmPSczNmWH8p6-K4g8IPYYdJC8KkD1aUiHkqsdIK3_-QYiGyROdeTqUnBOhsNjOzWOxYcgK'
  token: null,
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch(action.type) {

    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }
    
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      }
    
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      }

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly
      }

    default:
      return state;
  }

}

export default reducer;