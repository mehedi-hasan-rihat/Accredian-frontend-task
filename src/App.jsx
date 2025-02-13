import React from 'react'
import Announcements from './components/Announcements'
import Navbar from './components/Navbar'
import TabsComponent from './components/TabsComponent'
import Banner from './components/Banner'
export default function App() {
  return (
    <div>
      <Announcements/>
      <Navbar/> 
      <TabsComponent/>
      <Banner/>
    </div>
  )
}
