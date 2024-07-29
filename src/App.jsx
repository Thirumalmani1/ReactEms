import { useState } from 'react'
import './App.css'
import ListEmployeeComponent from './assets/compontents/ListEmployeeComponent'
import HeaderComponent from './assets/compontents/HeaderComponent'
import FooterComponent from './assets/compontents/FooterComponent'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import EmployeeComponent from './assets/compontents/EmployeeComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
            <Route path ="/" element={<ListEmployeeComponent />}></Route>
            <Route path ="/employees" element={<ListEmployeeComponent />}></Route>
            <Route path = "/add-employee" element={<EmployeeComponent />}></Route>
            <Route path = "/edit-employee/:id" element={<EmployeeComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
