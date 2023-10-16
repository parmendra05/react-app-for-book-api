import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloComponent from './Components/HelloComponent'
import BookListComponent from './Components/BookListComponent'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BookComponent from './Components/BookComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
          <Routes>
            {/* <BookListComponent> is enable for both end points 
            http://localhost:3000/ & http://localhost:3000/books */}
            <Route path='/' element={<BookListComponent/>}></Route>
            <Route path='/books' element={<BookListComponent/>}></Route>
            <Route path='/add-book' element={<BookComponent/>}></Route>
          </Routes>
       
        <FooterComponent/>
      </BrowserRouter>
       
    </>
  )
}

export default App
