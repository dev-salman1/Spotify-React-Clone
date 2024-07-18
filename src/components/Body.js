import React from 'react'
import '../styles/Body.css'
import Header from './Header'
import { useDataLayerValue } from '../context/DataLayer'
import { Favorite, MoreHoriz, PlayCircleFilled } from '@mui/icons-material'
import SongRow from './SongRow'

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue()
  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className='body__info'>
        <img src={discover_weekly?.images[0]?.url} alt='Playlist' />
        <div className='body__infoText'>
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body__songs'>
        <div className='body__icons'>
          <PlayCircleFilled className='body__play' />
          <Favorite fontSize='large' />
          <MoreHoriz />
        </div>

        {discover_weekly?.tracks?.items?.map(item => (
          <SongRow tracks={item?.track} />
        ))}
      </div>
    </div>
  )
}

export default Body
