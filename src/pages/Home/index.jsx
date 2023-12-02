import Navbar from 'components/Navbar'
import React from 'react'
import Header from './components/Header'
import Summary from './components/Summary'
import About from './components/About'
import Footer from 'components/Footer'
import Contact from './components/Contact'

const Home = () => {
  return (
   <React.Fragment>
    <Navbar/>
    <Header/>
    <Summary/>
    <About/>
    <Contact/>
    <Footer/>
   </React.Fragment>
  )
}

export default Home