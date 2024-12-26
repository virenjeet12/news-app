import './App.css'
import {Navbar} from "./component/navbar"
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { NavbarWithButtons } from './component/catgory_navbar'
import { News } from './component/news'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <NavbarWithButtons></NavbarWithButtons>
    <Routes>
      <Route path='/' element = {<News catgory = "other"/>} />
      <Route path='/entertainment' element = {<News catgory = "entertainment"/>} />
      <Route path='/sports' element = {<News catgory = "sports"/>} />
      <Route path='/technology' element = {<News catgory = "technology"/>} />
      <Route path='/health' element = {<News catgory = "health"/>} />
      <Route path='/business' element = {<News catgory = "business"/>} />
      <Route path='/world' element = {<News catgory = "world"/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
