import React from 'react'
import Sidebar from "../SideBar/Sidebar"
import Navbar from "../Navbar/Navbar";
import Content from "../Content"
export default function AdminDashboard() {
  return (
    <div>
      <Navbar/>
        <div className="container">
            <Sidebar/>
        </div>
        <Content/>
    </div>
  )
}
