/* src/Router.js */

import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Public from './Public'
import Profile from './Profile'
import Protected from './Protected'
import Public608 from './Public608'; 

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav/>}>
        <Route index element={<Public/>}/>
        <Route path="/protected" element={<Protected/>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*" element={<Public/>}/>
        <Route path="public608" element={<Public608 />} />
      </Route>
    </Routes>
  )
}

export default Router