import React from 'react'

// imported icons
import {AiFillHome, AiOutlineMessage} from 'react-icons/ai'
import {BsSearch, BsCameraReels} from 'react-icons/bs'
import {MdExplore} from 'react-icons/md'
import {FaRegHeart} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {TbGridDots} from 'react-icons/tb'



function Sidebar() {
  return (
    <div className="container-fluid">
    <div className="row vh-100">
      <div className="col-2 bg-light d-flex flex-column align-items-start ps-3 border-end">
        <h2 className="font-brand m-2">Instagram</h2> {/* This will be the top logo/font */}
        <span className=' my-4'><AiFillHome className="icon me-3"/> Home</span>
        <span className=' my-4'><BsSearch className="icon me-3"/>Search</span>
        <span className=' my-4'><MdExplore className="icon me-3"/>Explore</span>
        <span className=' my-4'><BsCameraReels className="icon me-3"/>Reels</span>
        <span className=' my-4'><AiOutlineMessage className="icon me-3"/>Messages</span>
        <span className=' my-4'><FaRegHeart className="icon me-3"/>Notifications</span>
        <span className=' my-4'><CgProfile className="icon me-3"/>Profile</span>
        <span className=' my-4'><TbGridDots className="icon me-3"/>Profile</span>

      </div>
    </div>
  </div>
  )
}

export default Sidebar