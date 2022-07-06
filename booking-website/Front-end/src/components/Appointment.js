import React, { useState } from "react";

export function Appointment() {
  // const initialTutorialState = {
  //   id: null,
  //   name: "",
  //   services: ""
    
  // };
  // const [booking, setBooking] = useState(initialTutorialState);
  // const [submitted, setSubmitted] = useState(false);
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setBooking({ ...tutorial, [name]: value });
  // };
  // const saveTutorial = () => {
  //   var data = {
  //     name: booking.name,
  //     services: booking.services,
  //   };

  // };
  return (
    <div>
      <div id="__next">
        <header class="header-area fixed-top">
          <div class="top-header-area">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6 col-sm-6">
                  <ul class="header-content-left">
                    <li>
                      <a href="cdn-cgi/l/email-protection.html#e78f828b8b88a794938889c984888a">
                        <i class="bx bx-envelope"></i>Email:
                        <span
                          class="__cf_email__"
                          data-cfemail="f59d9099999ab586819a9bdb969a98"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="tel:+61-821-456">
                        <i class="bx bx-phone-call"></i>Call Us: +61-821-456
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 col-sm-6">
                  <ul class="header-content-right">
                    <li>Opening Hour: 9:00 am - 9:00 pm</li>
                    <li>
                      <a href="sign-in.html">Sign In</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="navbar" class="navbar-area">
            <div class="main-nav">
              <nav class="navbar navbar-expand-lg">
                <div class="container">
                  <a class="navbar-brand" href="index.html">
                    <img src="img/logo.png" alt="logo" />
                  </a>
                  <button
                    class="navbar-toggler navbar-toggler-right collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="icon-bar top-bar"></span>
                    <span class="icon-bar middle-bar"></span>
                    <span class="icon-bar bottom-bar"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav m-auto">
                      <li class="nav-item">
                        <a class="nav-link" href="appointment.html#">
                          Home <i class="bx bx-chevron-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li class="nav-item">
                            <a class="nav-link" href="index.html">
                              Home One
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="index2.html">
                              Home Two
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="index3.html">
                              Home Three
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="about-us.html">
                          About
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="appointment.html#">
                          Pages <i class="bx bx-chevron-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li class="nav-item">
                            <a class="nav-link" href="team.html">
                              Team
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="pricing.html">
                              Pricing
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="testimonials.html">
                              Testimonials
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="appointment.html#">
                              Projects <i class="bx bx-chevron-down"></i>
                            </a>
                            <ul class="dropdown-menu">
                              <li class="nav-item">
                                <a class="nav-link" href="projects.html">
                                  Projects
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="project-details.html">
                                  Project Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link active" href="appointment.html">
                              Appointment
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="appointment.html#">
                              User <i class="bx bx-chevron-down"></i>
                            </a>
                            <ul class="dropdown-menu">
                              <li class="nav-item">
                                <a class="nav-link" href="sign-up.html">
                                  Sign Up
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="sign-in.html">
                                  Sign In
                                </a>
                              </li>
                              <li class="nav-item">
                                <a
                                  class="nav-link"
                                  href="recover-password.html"
                                >
                                  Recover Password
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="faq.html">
                              FAQ
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="coming-soon.html">
                              Coming Soon
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="terms-conditions.html">
                              Terms &amp; Conditions
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="privacy-policy.html">
                              Privacy Policy
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="404.html">
                              404 Error Page
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="appointment.html#">
                          Services <i class="bx bx-chevron-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li class="nav-item">
                            <a class="nav-link" href="services-style-one.html">
                              Services Style One
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="services-style-two.html">
                              Services Style Two
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="service-details.html">
                              Services Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="appointment.html#">
                          Shop <i class="bx bx-chevron-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li class="nav-item">
                            <a class="nav-link" href="shop.html">
                              Shop
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="cart.html">
                              Cart
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="checkout.html">
                              Checkout
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="product/5f0cc6063ab06e21b560184b.html"
                            >
                              Product Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="appointment.html#">
                          Blog <i class="bx bx-chevron-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li class="nav-item">
                            <a class="nav-link" href="blog-grid.html">
                              Blog Grid
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="blog-left-sidebar.html">
                              Blog Left Sidebar
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="blog-right-sidebar.html">
                              Blog Right Sidebar
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="blog-details.html">
                              Blog Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="contact.html">
                          Contact
                        </a>
                      </li>
                    </ul>
                    <div class="others-option">
                      <div class="cart-icon">
                        <a class="" href="cart.html">
                          <i class="bx bx-cart"></i>
                          <span>0</span>
                        </a>
                      </div>
                      <div class="get-quote">
                        <a class="default-btn" href="appointment.html#">
                          Get A Quote
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="mobile-cart-icon">
                    <div class="cart-icon">
                      <a class="" href="cart.html">
                        <i class="bx bx-cart"></i>
                        <span>0</span>
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <div class="page-title-area bg-5">
          <div class="container">
            <div class="page-title-content">
              <h2>Appointment</h2>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li class="active">Appointment</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="appointment-area appointment-area-three appointment-page ptb-100">
          <div class="container">
            <div class="appointment-here-form">
              <div class="section-title">
                <span>Call To Action</span>
                <h2>Make An Appointment</h2>
              </div>
              <form>
                <div class="row">
                  <div class="col-lg-6 col-sm-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="Name"
                        placeholder="Enter Your Name"
                      />
                      <i class="bx bx-user"></i>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="Email"
                        placeholder="Enter Your Email"
                      />
                      <i class="bx bx-envelope"></i>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="Phone"
                        placeholder="Enter Your Phone"
                      />
                      <i class="bx bx-mobile-alt"></i>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6">
                    <div class="form-group">
                      <select class="form-control" id="SelectService">
                        <option>Select Service</option>
                        <option>House Cleaning</option>
                        <option>Apartment Cleaning</option>
                        <option>Industry Cleaning</option>
                        <option>Hospital &amp; Health Care</option>
                        <option>Bathroom Cleaning</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6">
                    <div class="form-group">
                      <div class="react-datepicker-wrapper">
                        <div class="react-datepicker__input-container">
                          <input
                            type="text"
                            value="08/12/2020"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6">
                    <div class="form-group">
                      <select class="form-control" id="SelectTime">
                        <option>Select Time</option>
                        <option>09.00 AM To 10.00 AM</option>
                        <option>10.00 AM To 11.00 AM</option>
                        <option>11.00 AM To 12.00 PM</option>
                        <option>12.00 PM To 01.00 PM</option>
                        <option>01.00 PM To 03.00 PM</option>
                        <option>04.00 PM To 06.00 PM</option>
                        <option>07.00 PM To 10.00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="default-btn">
                      Send Request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <footer class="footer-top-area f-bg pt-100 pb-70 jarallax">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="single-widget">
                  <div class="foot-logo">
                    <a href="index.html">
                      <img src="img/logo.png" alt="Image" />
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor, sit amet earum consectetur adipisicing
                    elit. Cupiditate rerum quidem fugiat sapiente! Iusto quae
                    perspiciatis, repudiandae ipsam minus et ex, aliquid dolor
                    molestias.
                  </p>
                  <div class="social-area">
                    <ul>
                      <li>
                        <a href="#" target="_blank">
                          <i class="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i class="bx bxl-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i class="bx bxl-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i class="bx bxl-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i class="bx bxl-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-widget">
                  <h3>Our Services</h3>
                  <ul>
                    <li>
                      <a href="appointment.html#">
                        <i class="bx bx-chevrons-right"></i>Main Service
                      </a>
                    </li>
                    <li>
                      <a href="appointment.html#">
                        <i class="bx bx-chevrons-right"></i>Window Cleaning
                      </a>
                    </li>
                    <li>
                      <a href="appointment.html#">
                        <i class="bx bx-chevrons-right"></i>Domestic Cleaning
                      </a>
                    </li>
                    <li>
                      <a href="appointment.html#">
                        <i class="bx bx-chevrons-right"></i>Disinfection
                      </a>
                    </li>
                    <li>
                      <a href="appointment.html#">
                        <i class="bx bx-chevrons-right"></i>Office Cleaning
                      </a>
                    </li>
                    <li>
                      <a href="appointment.html#">
                        <i class="bx bx-chevrons-right"></i>House Cleaning
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-widget">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <a href="about-us.html">
                        <i class="bx bx-chevrons-right"></i>About
                      </a>
                    </li>
                    <li>
                      <a href="services-style-one.html">
                        <i class="bx bx-chevrons-right"></i>Services
                      </a>
                    </li>
                    <li>
                      <a href="pricing.html">
                        <i class="bx bx-chevrons-right"></i>Prices
                      </a>
                    </li>
                    <li>
                      <a href="testimonials.html">
                        <i class="bx bx-chevrons-right"></i>Testimonials
                      </a>
                    </li>
                    <li>
                      <a href="blog-grid.html">
                        <i class="bx bx-chevrons-right"></i>Blog
                      </a>
                    </li>
                    <li>
                      <a href="projects.html">
                        <i class="bx bx-chevrons-right"></i>Projects
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-widget contact">
                  <h3>Get In Touch</h3>
                  <ul>
                    <li>
                      <i class="bx bx-phone-call"></i>
                      <span>Hotline:</span>Phone:
                      <a href="tel:+61-821-456">+61-821-456</a>
                    </li>
                    <li>
                      <i class="bx bx-envelope"></i>
                      <span>Email:</span>
                      <a href="cdn-cgi/l/email-protection.html#88e0ede4e4e7c8fbfdfaedfcf1a6ebe7e5">
                        <span
                          class="__cf_email__"
                          data-cfemail="4d25282121220d3e392223632e2220"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </li>
                    <li>
                      <i class="bx bx-location-plus"></i>
                      <span>Address:</span>123, Western Road, Melbourne
                      Australia
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div class="footer-bottom-area">
          <div class="container">
            <div class="copy-right">
              <p>
                <a href="https://envytheme.com/" target="blank">
                  EnvyTheme
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="go-top">
          <i class="bx bx-chevrons-up"></i>
          <i class="bx bx-chevrons-up"></i>
        </div>
        <div class="Toastify"></div>
      </div>
    </div>
  );
}
