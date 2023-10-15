import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloComponent from './Components/HelloComponent'
import BookListComponent from './Components/BookListComponent'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
          <Routes>
            {/* <BookListComponent> is enable for both end points 
            http://localhost:3000/ & http://localhost:3000/employees */}
            <Route path='/' element={<BookListComponent/>}></Route>
            <Route path='/employees' element={<BookListComponent/>}></Route>
          </Routes>
       
        <FooterComponent/>
      </BrowserRouter>
       
    </>
  )
}

export default App
