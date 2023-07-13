import React from 'react'
import { MdOutlineStart } from 'react-icons/md';
import {ImYoutube} from 'react-icons/im';
import {FaFreeCodeCamp,FaReact,FaCloudUploadAlt} from 'react-icons/fa';
import {SiPhp,SiAngular,SiDjango,SiExpress,SiMongodb,SiFlask} from 'react-icons/si';
import {SlChemistry} from 'react-icons/sl';
import {IoLogoNodejs} from 'react-icons/io';
import {TbBrandNextjs} from 'react-icons/tb';
import {TiTick} from 'react-icons/ti';
import '../App.css';

const Cards = (params) => {
  const card=[];
  const image_=[<svg className="margin-bottom-2" fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.337502 29.6323C-1.78847 12.2793 6.10798 3.26896 24.6343 0.26564C43.1607 -2.73768 64.2085 20.3698 59.2693 37.0257C54.895 51.7771 44.7813 60 26.7601 60C17.3393 60 2.46348 46.9853 0.337502 29.6323Z" fill="#6551E0" opacity="0.1">
  </path>
  <path d="M39 39C39 40.6569 37.6569 42 36 42H23.0003C21.3435 42 20.0003 40.6569 20.0003 39.0001L20.0001 30.0001C20 28.3432 21.3432 27 23.0001 27H36C37.6569 27 39 28.3431 39 30V39Z" stroke="#6551E0" stroke-miterlimit="10" stroke-width="1.5">
  </path>
  <path d="M23.915 27.1746V22.6529C23.915 19.5329 26.4186 17.0007 29.5033 17.0007C32.588 17.0007 35.0915 19.5329 35.0915 22.6529V27.1746" stroke="#6551E0" stroke-miterlimit="10" stroke-width="1.5">
  </path>
  <path d="M29.5 38C29.1847 38 28.9144 37.785 28.8443 37.485L28.0385 33.795C27.8232 32.875 28.539 32 29.5 32C30.461 32 31.1768 32.875 30.9615 33.795L30.1557 37.485C30.0856 37.785 29.8153 38 29.5 38Z" fill="#6551E0">
  </path>
  </svg>,
  <svg className="margin-bottom-2" fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.355876 41.2223C-1.93343 22.6023 6.8179 9.03207 26.739 1.52093C46.66 -5.99022 64.3621 15.8388 59.0435 33.7108C54.3332 49.5392 48.5778 60 29.1721 60C19.0275 60 2.64518 59.8423 0.355876 41.2223Z" fill="#6551E0" opacity="0.1">
  </path>
  <path d="M29.5661 42.9878C36.7389 42.6746 42.2998 36.606 41.9866 29.4331C41.6735 22.2602 35.6048 16.6994 28.432 17.0125C21.2591 17.3257 15.6982 23.3943 16.0114 30.5672C16.3246 37.7401 22.3932 43.301 29.5661 42.9878Z" stroke="#6551E0" stroke-miterlimit="10" stroke-width="1.5">
  </path>
  <path d="M16.0117 30.5671L42 29" stroke="#6551E0" stroke-miterlimit="10" stroke-width="1.5">
  </path>
  <path d="M20.3613 20.377C21.654 21.6256 23.4433 23.7258 29.166 23.6814C34.8887 23.637 36.3779 21.576 37.8728 20.2412" stroke="#6551E0" stroke-miterlimit="10" stroke-width="1.5">
  </path>
  <path d="M20.8196 40.1529C22.0105 39.071 23.7897 37.094 29.0068 37.1944C34.2238 37.2947 35.6746 39.2206 37.0289 40.4152" stroke="#6551E0" stroke-miterlimit="10" stroke-width="1.5">
  </path>
  <path d="M29 43C31.2029 42.9615 33.8322 37.1057 33.7069 29.9271C33.5816 22.7484 30.8138 16.9999 28.8836 16.9999C27.4538 16.9999 23.4797 22.9248 23.605 30.1034C23.7303 37.282 27 43.0349 29 43Z" stroke="#6551E0" stroke-miterlimit="10" stroke-width="1.5">
  </path>
  <rect fill="white" height="13.5" rx="3.25" stroke="#6551E0" stroke-width="1.5" width="28.5" x="14.75" y="23.75">
  </rect>
  <path d="M18.7716 32.9999L17.4932 28.0908H19.0624L19.724 31.2357H19.7655L20.4751 28.0908H22.0059L22.7346 31.2133H22.7762L23.4186 28.0908H24.9878L23.7062 32.9999H22.0347L21.2677 30.1395H21.2133L20.4463 32.9999H18.7716Z" fill="#6551E0">
  </path>
  <path d="M26.5323 32.9999L25.2539 28.0908H26.8232L27.4847 31.2357H27.5263L28.2358 28.0908H29.7667L30.4954 31.2133H30.5369L31.1793 28.0908H32.7486L31.467 32.9999H29.7955L29.0284 30.1395H28.9741L28.207 32.9999H26.5323Z" fill="#6551E0">
  </path>
  <path d="M34.2931 32.9999L33.0146 28.0908H34.5839L35.2455 31.2357H35.287L35.9965 28.0908H37.5274L38.2561 31.2133H38.2977L38.9401 28.0908H40.5093L39.2277 32.9999H37.5562L36.7892 30.1395H36.7348L35.9678 32.9999H34.2931Z" fill="#6551E0">
  </path>
  </svg>,
  <svg className="margin-bottom-2" fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.46822 30.577C-1.8175 39.3417 4.60601 51.2048 12.3352 55.6084C20.0644 60.0121 43.7202 62.948 52.2301 55.1449C63.6621 44.6624 61.6452 14.3333 51.6055 10.49C41.5658 6.64674 40.2569 4.3933 32.3998 1.14188C24.5426 -2.10954 11.6276 1.62504 9.05619 11.8034C6.48476 21.9818 2.75393 21.8123 0.46822 30.577Z" fill="#6551E0" opacity="0.1">
  </path>
  <path d="M38 40L44.5858 33.4142C45.3668 32.6332 45.3668 31.3668 44.5858 30.5858L38 24" stroke="#6551E0" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5">
  </path>
  <path d="M22 40L15.4142 33.4142C14.6332 32.6332 14.6332 31.3668 15.4142 30.5858L22 24" stroke="#6551E0" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5">
  </path>
  <path d="M27 43L33 21" stroke="#6551E0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
  </path>
  </svg>,<svg className="margin-bottom-2" fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg">
  <path d="M29.957 0.470643C21.0332 -1.8269 8.95485 4.62985 4.47125 12.399C-0.0123458 20.1682 -3.00146 43.9465 4.94323 52.5004C15.616 63.9916 45.8166 60.9595 51.2467 52.251C56.6768 43.5425 58.7131 38.1834 59.7313 28.4701C60.7494 18.7568 59.2341 9.61853 48.871 7.03379C38.508 4.44905 38.8807 2.76819 29.957 0.470643Z" fill="#6551E0" opacity="0.1">
  </path>
  <path d="M43 39C43 41.2091 41.2091 43 39 43H19.0004C16.7913 43 15.0004 41.2092 15.0004 39.0001L15.0001 23.0001C15 20.7909 16.7909 19 19.0001 19H22.7639C24.1343 19 25.3871 19.7743 26 21V21C26.6129 22.2257 27.8657 23 29.2361 23H39C41.2091 23 43 24.7909 43 27L43 39Z" stroke="#6551E0" stroke-miterlimit="10" stroke-width="1.5">
  </path>
  <path d="M32.6432 31.152C33.2699 31.5437 33.2699 32.4563 32.6432 32.848L27.53 36.0438C26.864 36.46 26 35.9812 26 35.1958V28.8042C26 28.0188 26.864 27.54 27.53 27.9562L32.6432 31.152Z" fill="#6551E0">
  </path>
  </svg>];
  const card_main_text=["SSL Certificate","Personal Domain","Code Editor","Media Storage"]
  const card_sub_text=["No hassle of adding https to your website. We provide a free SSL certificate.",
  "Make sure your brand-new website will be unique and different.",
  "No need to switch in between tabs anymore. Make changes right here.",
  "Store content for your website right in Static (like images, videos, docs etc.)"]

  const option_type=[<h4 className="d-flex justify-content-center align-items-center" style={{color:"rgb(153, 51, 255)"}}>Free</h4>,"","",<h4 className="d-flex justify-content-center align-items-center" style={{color:"rgb(153, 51, 255)"}}>Free</h4>]

  card.push(Array(4).fill(0).map((_,i)=>{
            return <div className="shadow  card" key={i} style={{width: "16rem",margin:"8px"}}>
              <span className="d-flex justify-content-center align-items-center m-4">{image_[i]}</span>
              <div className="card-body ">
                {option_type[i]}
                <h4 className='d-flex justify-content-center align-items-center'>{card_main_text[i]}</h4>
                <p className="card-text text-center">{card_sub_text[i]}</p>
              </div>
          </div>
          }));
    return card;
}

const priceCard = (params) => {
  const card=[];
  const price_text=["Free","Basic","Pro","Enterprise"];
  const price=[0,5,10,15];
  const website_count=["1 website","5 websites","10 websites","Unlimited websites"];
  const storage_count=["1 GB","5 GB","10 GB","Unlimited"];
  const domain_type=["Free Sub Domain","Personal Domain","Personal Domain","Personal Domain"];
  const time_period=["30","1 Year","1 Year","1 Year"];
  const proceed_text=["Try Now","Buy Now","Buy Now","Buy Now"];

  card.push(Array(4).fill(0).map((_,i)=>{
        return <div key={i} class="col-sm-3 mb-3 mb-sm-0 shadow">
                <div className="card bg-success " style={{color:"white"}}>
                  <div className="card-body ">
                    <h5 className="card-title mt-2">{price_text[i]}</h5>
                    <span className='d-flex mt-4 justify-content-start'><h2>${price[i]}</h2>/Month</span>
                    <div className='mt-3'>
                      <TiTick style={{fontSize:"30px",marginRight:"5px"}}/>{website_count[i]}<br/>
                      <TiTick style={{fontSize:"30px",marginRight:"5px"}}/>{storage_count[i]}<br/>
                      <TiTick style={{fontSize:"30px",marginRight:"5px"}}/>{domain_type[i]}<br/>
                      <TiTick style={{fontSize:"30px",marginRight:"5px"}}/>SSL Certificate<br/>
                      <TiTick style={{fontSize:"30px",marginRight:"5px"}}/>{time_period[i]}<br/>
                    </div>
                    <div className="d-flex justify-content-center mt-5 ">
                      <a href="/" className="btn btn-light">{proceed_text[i]}</a>
                    </div>
                  </div>
                </div>
              </div>
  }))
  return card;
}


function Home() {
  return (
    <div className='container'>
        <div className='row'>
          <div className='col-4 d-flex justify-content-center align-items-center'>
            <div className='row'>
              <span style={{fontSize:"72px",fontWeight:"boald",lineHeight: "55px",fontFamily:"Kulfi"}}>One-click solution for your <span style={{color:"rgb(51, 153, 255)"}}>static website.</span></span>
              <span style={{fontSize:"20px",marginTop:"15px"}}>Drag-n-drop an archive with your page or a website and we will take care of the rest.</span>
              <div className='col'>

                <button type="button" className="btn btn-success m-1 mt-2 p-3">
                <FaCloudUploadAlt style={{marginRight:"10px",fontSize:"20px"}}/>
                Upload for Free</button>

                <button type="button" className="btn btn-secondary m-1 mt-2 p-3">
                <ImYoutube style={{marginRight:"10px",fontSize:"20px"}}/>
                Watch Videos</button>

              </div>
            </div>
          </div>
          <div className='col d-flex justify-content-center align-items-center'>
            <img src='../images/image.svg' alt='' width='100%' height='100%'/>
          </div>
        </div>
        <div className='row' style={{marginTop:"10%"}}>
          <div className='col d-flex' style={{position:"relative",height:"500px"}}>
            <img src='../images/img-3.jpg' alt='' style={{position:"absolute",left:"15%",bottom:"20%"}}/>
            <img src='../images/img-2.jpg' alt='' style={{position:"absolute"}}/>
          </div>

          <div className='col-6 d-flex align-items-center'>
            <div className='row '>
              <span style={{fontSize:"72px",fontWeight:"boald",lineHeight: "55px",fontFamily:"Kulfi"}}>Try it now, it works anywhere.</span>
              <span style={{fontSize:"20px",marginTop:"15px"}}>Upload an archive here and go ● live . We’ll unpack it, find and create a URL for each page that’s inside.</span>
              {/* <input type='button' className='btn btn-primary' value='Upload' style={{marginTop:"10px"}}/> */}
              <div className='col'><button type="button" className="btn btn-success mt-4 p-3">Get started<MdOutlineStart style={{fontSize:"20px",marginLeft:"5px"}}/></button></div>
            </div>
          </div>
        </div>

        <div className="row m-5 d-flex justify-content-center">
          <span className="m-5 d-flex justify-content-center" style={{fontWeight:"boald",fontSize:"35px"}}>Learn, what’s included:</span>
        </div>

        <div className='row'>
          <div className='col-6 d-flex justify-content-center align-items-center'>
            <div className='row'>
              <span style={{fontSize:"72px",fontWeight:"boald",lineHeight: "55px",fontFamily:"Kulfi"}}>Hosting solution with <span style={{color:"rgba(51, 51, 255,1)"}}>benefits.</span></span>
              <span style={{fontSize:"20px",marginTop:"15px"}}>Turn your ideas into reality with Static.
              With a lot of powerful features, we guarantee simplicity and clarity.</span>
              <div className='col'><button type="button" className="btn btn-success mt-4 p-3">Start For Free<FaFreeCodeCamp style={{fontSize:"20px",marginLeft:"5px"}}/></button></div>
            </div>
          </div>
          <div className='col'>
            {/* <img src='../images/image.svg' alt='image' width='100%' height='100%'/> */}
            <div className='row'>
              {Cards()}
            </div>
          </div>
        </div>
        <div className='row' style={{marginTop:"10%"}}>
          <div className='col d-flex'>
            <div className="d-flex justify-content-center align-items-center logo" >
              <div class="row d-flex justify-content-center align-item-center">

              <div class="container text-center">
                <div class="row">
                  <div class="col">
                    <div className='box d-flex justify-content-center align-items-center'>
                      <SiAngular className="reverse_rotate"/>
                    </div>
                  </div>
                  <div class="col">
                    <div className='box d-flex justify-content-center align-items-center'>
                      <SiFlask className="reverse_rotate"/>
                    </div>
                  </div>
                  <div class="col">
                    <div className='box d-flex justify-content-center align-items-center'>
                      <SiDjango className="reverse_rotate"/>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <div className='box d-flex justify-content-center align-items-center'>
                    <SiExpress className="reverse_rotate"/>
                    </div>
                  </div>
                  <div class="col">
                    <div className='box d-flex justify-content-center align-items-center'>
                    <FaReact className="reverse_rotate"/>
                    </div>
                  </div>
                  <div class="col">
                    <div className='box d-flex justify-content-center align-items-center'>
                    <SiMongodb className="reverse_rotate"/>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <div className='box d-flex justify-content-center align-items-center'>
                    <IoLogoNodejs className="reverse_rotate"/>
                    </div>
                  </div>
                  <div class="col">
                    <div className='box d-flex justify-content-center align-items-center'>
                    <TbBrandNextjs className="reverse_rotate"/>
                    </div>
                  </div>
                  <div class="col">
                    <div className='box d-flex justify-content-center align-items-center'>
                    <SiPhp className="reverse_rotate"/>
                    </div>  
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className='col-6 d-flex align-items-center'>
            <div className='row '>
              <span style={{fontSize:"72px",fontWeight:"boald",lineHeight: "55px",fontFamily:"Kulfi"}}><span style={{color:"rgb(0, 204, 153)"}}>Progressive</span> JavaScript apps are here<span style={{color:"rgb(0, 204, 153)"}}>!</span></span>
              <span style={{fontSize:"20px",marginTop:"15px"}}>Upload an archive here and go ● live . We’ll unpack it, find and create a URL for each page that’s inside.</span>
              {/* <input type='button' className='btn btn-primary' value='Upload' style={{marginTop:"10px"}}/> */}
              <div className='col'><button type="button" className="btn btn-success mt-4 p-3">Try It Now<SlChemistry style={{fontSize:"20px",marginLeft:"5px"}}/></button></div>
            </div>
          </div>
        </div>
      <div className="row m-5 d-flex justify-content-center">
          <span className="mt-5 d-flex justify-content-center" style={{fontWeight:"boald",fontSize:"65px"}}>Purchase</span>
          <span style={{fontSize:"25px",textAlign:"center"}}>Start using static.app as a hosting for your websites today to get the best features to buck ratio on the market.</span>
      </div>

      <div className="row">
        {priceCard()}
        
        
      </div>
    </div>
  )
}

export default Home
