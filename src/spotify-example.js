// // https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
// // 1-Login(spotifyAPI), 2-Redirect Spotify LoginPage, 3-Redirect HomePage

// export const authEndpoint = "https://accounts.spotify.com/authorize";
// const redirectUri = "http://localhost:3000/"; // exact uri that we set in SpotifyDeveloperCli->EditSettings
// const clientId = "YOUR_CLIENT_ID_FROM_API";

// const scopes = [
//   "user-read-currently-playing",
//   "user-read-recently-played",
//   "user-read-playback-state",
//   "user-top-read",
//   "user-modify-playback-state",
// ];

// // Get Access Token From loginURL
// export const getTokenFromUrl = () => {
//   return window.location.hash // #accessToken=mysupersecretkey&name=foobar&abc=123
//     .substring(1) // #
//     .split('&') //delete "&, AND" from uri
//     .reduce((initial, item) => {
//       let parts = item.split('='); // =mysupersecretkey == index[0]
//       initial[parts[0]] = decodeURIComponent(parts[1]) // mysupersecretkey

//       return initial;
//     }, {})
// }

// export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;