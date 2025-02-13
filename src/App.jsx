import React from 'react'
import Announcements from './components/Announcements'
import Navbar from './components/Navbar'
import TabsComponent from './components/TabsComponent'
export default function App() {
  return (
    <div>
      <Announcements/>
      <Navbar/> 
      <TabsComponent/>
    </div>
  )
}
