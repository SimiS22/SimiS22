import React from 'react'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Contact from './components/Contact/Contact'
import './App.scss'

const App: React.FC = () => {
  return (
    <div className='app'>
      <Header />
      <Content />
      <Contact />
    </div>
  )
}
export default App