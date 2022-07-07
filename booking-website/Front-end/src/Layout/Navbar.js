import React,{useEffect,useState} from 'react';
// import {Link}from 'react-router-dom';
function Navbar() {
  // const[users,setUsers]=useState([]);
  // useEffect(()=>{
  //   const data=async()=>{
  //        const response=await fetch(`http://localhost:8000/api/users/${id}`)
  //        const dbData=await response.json() 
  //        setUsers(dbData);
  //        console.log(dbData);
  //   }
  //   data()
  // },[])
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
                        >[email&#160;protected]</span
                      ></a
                    >
                  </li>
                 
                  <li>
                    <a href="tel:+61-821-456"
                      ><i className="bx bx-phone-call"></i>Call Us: +61-821-456</a
                    >
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-sm-6">
                <ul className="header-content-right">
                  <li>Opening Hour: 9:00 am - 9:00 pm</li>
                  <li><a href="sign-in.html">Sign In</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="navbar" className="navbar-area">
          <div className="main-nav">
            <nav className="navbar navbar-expand-lg">
              <div className="container">
                <a className="navbar-brand" href="index.html"
                  ><img src="img/logo.png" alt="logo" /></a
                ><button
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
                      <a className="nav-link" href="index.html#"
                        >Home <i className="bx bx-chevron-down"></i
                      ></a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="nav-link active" href="index.html"
                            >Home One</a
                          >
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="index2.html">Home Two</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="index3.html">Home Three</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about-us.html">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="index.html#"
                        >Pages <i className="bx bx-chevron-down"></i
                      ></a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="nav-link" href="team.html">Team</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pricing.html">Pricing</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="testimonials.html"
                            >Testimonials</a
                          >
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
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="appointment.html"
                            >Appointment</a
                          >
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="index.html#"
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
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="faq.html">FAQ</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="coming-soon.html"
                            >Coming Soon</a
                          >
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="terms-conditions.html"
                            >Terms &amp; Conditions</a
                          >
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="privacy-policy.html"
                            >Privacy Policy</a
                          >
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="404.html">404 Error Page</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="index.html#"
                        >Services <i className="bx bx-chevron-down"></i
                      ></a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="nav-link" href="services-style-one.html"
                            >Services Style One</a
                          >
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="services-style-two.html"
                            >Services Style Two</a
                          >
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="service-details.html"
                            >Services Details</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="index.html#"
                        >Shop <i className="bx bx-chevron-down"></i
                      ></a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="nav-link" href="shop.html">Shop</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="cart.html">Cart</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="checkout.html">Checkout</a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="product/5f0cc6063ab06e21b560184b.html"
                            >Product Details</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="index.html#"
                        >Blog <i className="bx bx-chevron-down"></i
                      ></a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="nav-link" href="blog-grid.html"
                            >Blog Grid</a
                          >
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="blog-left-sidebar.html"
                            >Blog Left Sidebar</a
                          >
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="blog-right-sidebar.html"
                            >Blog Right Sidebar</a
                          >
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="blog-details.html"
                            >Blog Details</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                  </ul>
                  <div className="others-option">
                    <div className="cart-icon">
                      <a className="" href="cart.html"
                        ><i className="bx bx-cart"></i><span>0</span></a
                      >
                    </div>
                    {/* {users.map((user)=>{
                    <div className="get-quote">
                     <h1>hello</h1>
                        <button class="btn btn-secondary">
                    <Link   to={{pathname:"/profile/"+user.id}}  >profile</Link>
                    </button>
                     
                    </div>
                     })} */}
                  </div>
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
