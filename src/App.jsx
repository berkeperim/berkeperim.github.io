import React from 'react'
import './index.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import CustomCursor from "./components/cursor/Cursor"
import Contact from './components/contact/Contact'
import WorkBefore from './components/workbefore/Workbefore'
import Welcome from './components/welcome/Welcome'

import Footer from './components/footer/Footer'

const App = () => {
  const experienceArr = [
    {name: "1", test: "a"},
    {name: "2", test: "b"},
    {name: "3", test: "c"},
    {name: "4", test: "d"},
  ];
  const ExperienceTab = [];
  return (
      <>
        <CustomCursor/>
        <Welcome></Welcome>
        <Header></Header>
        <Nav></Nav>
        <About></About>
        <Portfolio></Portfolio>
        <WorkBefore></WorkBefore>
        <Contact></Contact>
        <Footer></Footer>
      </>
  )
}

export default App
