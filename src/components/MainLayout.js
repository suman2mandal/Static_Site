import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import {BiSolidToTop} from 'react-icons/bi';

function MainLayout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>

      {/* To up */}
      <div className="to-up">
        <a href="#top"><BiSolidToTop className="bg-success" style={{fontSize:"50px",position: "fixed",bottom: "15",right: "15",color:"white",borderRadius:"50% 50%",padding:"10px"}}/></a>
      </div>
    </>
  )
}

export default MainLayout
