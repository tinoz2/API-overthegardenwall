import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import NavbarComponent from './components/Navbar.jsx'
import AllAPI from './components/API/AllAPI.jsx'
import PostmanAPI from './components/API/PostmanAPI.jsx'
import SidebarComponent from './components/Sidebar.jsx'
import ThunderClientAPI from './components/API/ThunderClientAPI.jsx'
import SoundtracksAPI from './components/API/SoundtracksAPI.jsx'
import CharactersAPI from './components/API/CharactersAPI.jsx'

const APIRoutes = () => {
  return (
    <div className="flex sm:m-4">
      <SidebarComponent />
      <div className="flex flex-grow justify-center sm:justify-normal">
        <Routes>
          <Route path="all" element={<AllAPI />} />
          <Route path="postman" element={<PostmanAPI />} />
          <Route path="thunderclient" element={<ThunderClientAPI />} />
          <Route path="soundtracks" element={<SoundtracksAPI />} />
          <Route path="characters" element={<CharactersAPI />} />
        </Routes>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavbarComponent />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/api/*" element={<APIRoutes />} />
    </Routes>
  </BrowserRouter>
)