import React from 'react';
import styles from'./App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Sweets from './components/Sweets';
import Promotion from './components/Promotion';
import Login from './components/Login';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  
  return (
    <div className={styles.App}>
      {/* <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Sweets></Sweets>
      <Promotion></Promotion>
      <Footer></Footer>  */}
<Router>
<Routes>
        <Route exact path="/" element={
        <React.Fragment>
          <Navbar/>
          <Hero/>
          <Features/>
          <Sweets/>
          <Promotion/>
          <Footer></Footer>
        </React.Fragment>
        }/>
        <Route exact path='/Login' element={<Login/>}/>
      </Routes>
      </Router>
    </div>
      
    
  )
}

export default App
