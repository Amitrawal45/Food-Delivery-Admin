import React from 'react'
import{ assets} from '../../assets/assets.js'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.hamrochulo} alt=""  className='logo'/>
        <img src={assets.profile_image} className='profile'  alt="" />

    </div>
  )
}

export default Navbar