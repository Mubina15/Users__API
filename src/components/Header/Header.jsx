import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <div>

        <ul style={{display: "flex", justifyContent:"space-between", padding: "0", margin:"0"}}>
            <NavLink className={({isActive}) => isActive ? "isActive link" : "link"} to={"/users"}>Users</NavLink>
        </ul>

    </div>
  )
}
