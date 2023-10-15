import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloComponent from './Components/HelloComponent'
import BookListComponent from './Components/BookListComponent'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <HeaderComponent/>
       <BookListComponent/>
       <FooterComponent/>
    </>
  )
}

export default App
