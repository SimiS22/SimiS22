import React from 'react'
import Header from './components/Header/Header'
import Content from './pages/Content/Content'
// import Contact from './components/Contact/Contact'
import './App.scss'

import Navbar from './components/Navbar/Navbar'

const App: React.FC = () => {
  return (
    <div className='app'>
      <Header />
      <Content />
      <Navbar />
      {/* <Contact /> */}
    </div>
  )
}
export default App