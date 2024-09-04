import { Route, Routes } from "react-router"
import Home from "./view/Home"
import Booking from "./view/Booking"


function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Booking" element={<Booking />} />
    </Routes>
  )
}

export default App
