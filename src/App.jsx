import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./layout/Layout"

import Music from "./pages/Music"
import Videos from "./pages/Videos"
import Shows from "./pages/Shows"
import Gallery from "./pages/Gallery"
import Vlogs from "./pages/Vlogs"
import Facts from "./pages/Facts"

function App() {

  return (
    <Routes>
      <Route path="/*" element={<Layout/>}>
        <Route index element={<Home/>}/>

        <Route path="music" element={<Music/>}/>
        <Route path="videos" element={<Videos/>}/>
        <Route path="shows" element={<Shows/>}/>
        <Route path="gallery" element={<Gallery/>}/>
        <Route path="vlogs" element={<Vlogs/>}/>
        <Route path="facts" element={<Facts/>}/>
      </Route>
    </Routes>      
  )
}

export default App
