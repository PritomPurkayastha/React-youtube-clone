import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./SidebarRow.css"

function SidebarRow({Icon, title, navigateTo}) {
  const navigate= useNavigate();
  return (
    <div className='sidebarRow' onClick={()=>{
      navigate(navigateTo);
    }}>
        <Icon className="sidebar_icon" />
        <div className="sidebar_title">{title}</div>
    </div>
  )
}

export default SidebarRow