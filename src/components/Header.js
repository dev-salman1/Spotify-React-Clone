import React from 'react'
import '../styles/Header.css'
import SearchIcon from '@mui/icons-material/Search'
import { Avatar } from '@mui/material'
import { useDataLayerValue } from '../context/DataLayer'

const Header = () => {
  const [{user}, dispatch] = useDataLayerValue()
  return (
    <div className='header'>
      <div className='header__left'>
        <SearchIcon />
        <input placeholder='Search for Artists, Songs' type='text' />
      </div>
      <div className='header__right'>
        {console.log(user)}
        <Avatar src={user?.images[0]?.url} alt='S'/>
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header
