import React from 'react'
import Announcements from './components/Announcements'
import Navbar from './components/Navbar'
import TabsComponent from './components/TabsComponent'
import Banner from './components/Banner'
import HowDoReffer from './components/HowDoReffer'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
export default function App() {
  return (
    <div>
      <Announcements/>
      <Navbar/> 
      <TabsComponent/>
      <Banner/>
      <HowDoReffer/>
      <FAQ/>
      <Contact/>
    </div>
  )
}
