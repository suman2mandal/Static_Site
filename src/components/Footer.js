import React from 'react'
import {PiNyTimesLogoBold} from 'react-icons/pi'

function Footer() {
  return (
    <div className="container-fluid bg-dark text-white mt-5">
      <div className=" row d-flex justify-content-evenly">
        <div className="col p-3 text-center">
          <span className="d-flex justify-content-center mb-4" style={{fontSize:"50px"}}><PiNyTimesLogoBold/></span>
          <div className="mb-4">One-click solution for your static website. Copyright © 2019-2023.
          All Rights Reserved.</div>

          Made by <span style={{color:"green",fontSize:"20px"}}>Suman Mandal</span>
        </div>
        <div className="col p-3">
          <div className="mb-4" style={{color:"rgb(255,255,255,0.5)"}}>SERVICE</div>

          <div class="p-2">Status</div>
          <div class="p-2">FAQ</div>
          <div class="p-2">Help Docs</div>
          <div class="p-2">Privacy Policy</div>
          <div class="p-2">Terms of Use</div>
        </div>
        <div className="col p-3">
        <div className="mb-4" style={{color:"rgb(255,255,255,0.5)"}}> FEATURES</div>

          <div class="p-2">HTML File Upload</div>
          <div class="p-2">HTML Website Hosting</div>
          <div class="p-2">Free Image Hosting</div>
          <div class="p-2">Static Website Form</div>
          <div class="p-2">Upload PDF Online</div>
          <div class="p-2">Free Zip File Hosting</div> 
        </div>
        <div className="col p-3">
          <div className="mb-4 d-flex flex-column" style={{color:"rgb(255,255,255,0.5)"}}>ACCOUNT</div>
          <div class="p-2">Login</div>
          <div class="p-2">Sign up</div>
          <div class="p-2">Reset Password</div>
          <div class="p-2">Support</div>
          <div class="p-2">Affiliates</div>
        </div>
        <div className="col p-3">
          <div className="mb-4" style={{color:"rgb(255,255,255,0.5)"}}>STAY IN TOUCH</div>
          <input type="text" placeholder="Enter your email" className="form-control mb-3"/>
          <input type="checkbox" className="form-check-input" style={{marginRight:"5px"}}/>I accept the <span style={{color:"rgba(255,255,255,0.5)"}}>Privacy Policy</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
