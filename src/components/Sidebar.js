import React from 'react'
import '../styles/Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import { useDataLayerValue } from '../context/DataLayer'

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue()
  return (
    <div className='sidebar'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg'
        alt='Spotify Logo'
        className='sidebar__logo'
      />
      <SidebarOption title='Home' Icon={HomeIcon} />
      <SidebarOption title='Search' Icon={SearchIcon} />
      <SidebarOption title='Your Library' Icon={LibraryMusicIcon} />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map(playlist => {
        return <SidebarOption title={playlist.name} />
      })}
    </div>
  )
}

export default Sidebar
