export const endpoint = 'https://accounts.spotify.com/authorize'

const redirectUri = 'http://localhost:3000/'

const clientID = 'd81755361b9a4b859dd5133a42816024'

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state'
]

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, part) => {
      let parts = part.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])
      return initial
    }, {})
}

export const loginUrl = `${endpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`
