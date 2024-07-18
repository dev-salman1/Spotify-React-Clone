import React from 'react'
import '../styles/SongRow.css'

const SongRow = track => {
  return (
    <div className='songRow'>
      <img
        className='songRow__album'
        src={track?.tracks?.album?.images[0]?.url}
        alt='Hello'
      />
      <div className='songRow__info'>
        <h1>{track?.tracks?.name}</h1>
        <p>
          {track?.tracks?.artists?.map(artist => artist?.name)}
          {track?.tracks?.album?.name}
        </p>
      </div>
    </div>
  )
}

export default SongRow
