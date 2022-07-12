import React,{useEffect,useState} from 'react';
import { Link,useParams } from 'react-router-dom';

function Navbar() {

  function logout(){
    localStorage.clear();
    window.location.href="/";
   }
   let isLoggedIn = JSON.parse(localStorage.getItem("user"));
  // console.log(isLoggedIn.id)
  return (
    <div>
      
       <div id="__next">
      
      <header className="header-area fixed-top">
        <div className="top-header-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6">
                <ul className="header-content-left">
                  <li>
                    <a
                      href="cdn-cgi/l/email-protection.html#dbb3beb7b7b49ba8afb4b5f5b8b4b6"
                      ><i className="bx bx-envelope"></i>Email:
                      <span
                        className="__cf_email__"
                        data-cfemail="97fff2fbfbf8d7e4e3f8f9b9f4f8fa"
                        >goClean@gmail.com</span
                      ></a
                    >
                  </li>
                 
                  <li>
                    <a href="tel:+61-821-456"
                      ><i className="bx bx-phone-call"></i>Call Us: 0778985432</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-sm-6">
                <ul className="header-content-right">
                  <li>Opening Hour: 9:00 am - 9:00 pm</li>
                  {/* <li><a href="/Signup" style={{fontWeight:'bolder'}}>Sign In</a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="navbar" className="navbar-area">
          <div className="main-nav">
            <nav className="navbar navbar-expand-lg ">
              <div className="container">
                <Link className="navbar-brand" to="/"
                  ><img src="img/logo.png" alt="logo" height={"90px"} width={"150px"} /></Link>
                  <button
                  className="navbar-toggler navbar-toggler-right collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span
                  ><span className="icon-bar middle-bar"></span
                  ><span className="icon-bar bottom-bar"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="/"
                        >Home </a>
                      
                    </li>
                   
                    {/* <li className="nav-item">
                          <a className="nav-link" href="/appointment"
                            >Appointment</a
                          >
                        </li> */}
                  
                       
                        {/* <li className="nav-item">
                          <a className="nav-link" href=""
                            >User <i className="bx bx-chevron-down"></i
                          ></a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a className="nav-link" href="sign-up.html"
                                >Sign Up</a
                              >
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="sign-in.html"
                                >Sign In</a
                              >
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="recover-password.html"
                                >Recover Password</a
                              >
                            </li> */}
                          {/* </ul> */}
                        {/* </li> */}
                        {/* <li className="nav-item">
                          <a className="nav-link" href="faq.html">FAQ</a>
                        </li> */}
                        {/* <li className="nav-item">
                          <a className="nav-link" href="coming-soon.html"
                            >Coming Soon</a
                          >
                        </li> */}
                        {/* <li className="nav-item">
                          <a className="nav-link" href="terms-conditions.html"
                            >Terms &amp; Conditions</a
                          >
                        </li> */}
                        {/* <li className="nav-item">
                          <a className="nav-link" href="privacy-policy.html"
                            >Privacy Policy</a
                          >
                        </li> */}
                        {/* <li className="nav-item">
                          <a className="nav-link" href="404.html">404 Error Page</a>
                        </li> */}
                      {/* </ul>
                     
                    </li> */}
                    <li className="nav-item">
                          <a className="nav-link" href="/Testimonials"
                            >Testimonials</a
                          >
                        </li>
                    <li className="nav-item">
                          <a className="nav-link" href="/Team">Team</a>
                        </li>
                    
                    <li className="nav-item">
                      <a className="nav-link" href="/about">About us</a>
                    </li>
            
                    <li className="nav-item">
                      <a className="nav-link" href="/contact">Contact us</a>
                    </li>
                    <li className="nav-item">
                      {/* <a className="nav-link" href=""
                        >User <i className="bx bx-chevron-down"></i
                      ></a> */}
                        <a className="nav-link"  style={{color:"white",marginLeft:"190px"}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg></a>
                      <ul className="dropdown-menu">
                       {!isLoggedIn ?     <li className="nav-item">
                          <a className="nav-link" href="/login"
                            >Log in</a
                          >
                        </li> :null}
                        {!isLoggedIn ? 
                        <li className="nav-item">
                          <a className="nav-link" href="/signup"
                            >Sign up</a
                          >
                        </li> :null}
                        {/*  */}
                        {isLoggedIn ?
                        <li className="nav-item">
                          <Link to={"/profile/"+isLoggedIn.id} className="nav-link" 
                            >Profile</Link
                          >
                        </li> :null}
                        {isLoggedIn ? 
                        <li className="nav-item">
                          <a className="nav-link"  onClick={logout}
                            >Log out</a
                          >
                        </li> :null}
                      </ul>
                    </li>
                  </ul>
                  {/* user icon */}

                  {/* <li className="nav-item">
                      <a className="nav-link" href="/"
                        >Pages <i className="bx bx-chevron-down"></i
                      ></a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="nav-link" href="/Team">Team</a>
                        </li> 
                        <li className="nav-item">
                          <a className="nav-link" href="pricing.html">Pricing</a>
                        </li> 
                       
                        <li className="nav-item"> 
                          <a className="nav-link" href="index.html#"
                            >Projects <i className="bx bx-chevron-down"></i
                          ></a> 
                        <ul className="dropdown-menu"> 
                            <li className="nav-item">
                              <a className="nav-link" href="projects.html"
                                >Projects</a
                              >
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="project-details.html"
                                >Project Details</a
                              >
                            </li>
                          </ul>
                        </li> </ul> </li> */}

                  {/* end of user icon */}
                 
               
                  {/* <div className="others-option">
                    <div className="cart-icon">
                      <a className="" href="cart.html"
                        ><i className="bx bx-cart"></i><span>0</span></a
                      >
                    </div> */}
                    {/* {users.map((user)=>{
                    <div className="get-quote">
                     <h1>hello</h1>
                        <button class="btn btn-secondary">
                    <Link   to={{pathname:"/profile/"+user.id}}  >profile</Link>
                    </button>
                     
                    </div>
                     })} */}
                  {/* </div> */}
                </div>
                <div className="mobile-cart-icon">
                  <div className="cart-icon">
                    <a className="" href="cart.html"
                      ><i className="bx bx-cart"></i><span>0</span></a
                    >
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      </div>


{/* Hero-slider */}
{/* <div className="main-banner-area jarallax">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-9">
                  <div className="banner-text">
                    <h1>We Provide COVID 19 Disinfecting Services</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nihil architecto laborum eaque! Deserunt maxime, minus
                      quas molestiae reiciendis esse natus nisi iure.
                    </p>
                    <div className="banner-btn">
                      <a className="default-btn" href="contact.html">Contact Us</a
                      ><a className="default-btn active" href="about-us.html"
                        >Learn More</a
                      >
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="video-btn-animat one">
                    <a
                      className="video-btn popup-youtube"
                      href="index2.html#play-video"
                      ><i className="bx bx-play"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="response-time-area pb-100">
        <div className="container">
          <div className="response-wrap">
            <h3>
              Fast Response Time - Local &amp; Professional-Open 24/7 Call Now
              at<a href="tel:+61-821-456">+61-821-456</a>
            </h3>
            <div className="shape">
              <img src="img/shape/shape1.png" alt="Image" />
            </div>
          </div>
        </div>
      </div> */}
         {/* End-Header */}
   </div>
   
 
  )
}

export default Navbar;
