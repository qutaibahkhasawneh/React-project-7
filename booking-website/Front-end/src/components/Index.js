import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';


function Index() {

  const[category,setCategory]=useState([]);
  useEffect(()=>{
    const getcategory= async()=>{
      const res =await fetch('http://127.0.0.1:8000/api/categories');
      const getdata= await res.json();
      setCategory(getdata.categories);
      console.log(getdata);                 
    }
    getcategory();
  },[]);
  return (
    <div>
      {/* <!-- hero index2 --> */}
      <div className="main-banner-area jarallax">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-9">
                  
                  <div className="banner-text">
                    <h1>We Provide best cleaning Services</h1>
                    <p>
                    Enjoy a better, healthier, and safer life with us</p>
                    <div className="banner-btn">
                      <a className="default-btn" href="/contact">Contact Us</a
                      ><a className="default-btn active" href="/about"
                        >About Us</a
                      >
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
               
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
              at +962778093278
            </h3>
            <div className="shape">
              <img src="img/shape/shape1.png" alt="" />
            </div>
          </div>
        </div>
      </div>


      {/* <!-- end hero --> */}
      <div class="about-area pb-100">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="about-content">
                <h2>Importance Of Sanitation</h2>
                <ul>
                  <li>
                    <i class="flaticon-checked"></i>Preventing illnesses and diseases in the family
                  </li>
                  <li>
                    <i class="flaticon-checked"></i>Taking care of our mental health
                  </li>
                  <li>
                    <i class="flaticon-checked"></i>Increasing our self-esteem and confidence
                  </li>
                  <li>
                    <i class="flaticon-checked"></i>Improving our Social Status
                  </li>
                </ul>
                <p class="block-content">
                “You will never solve poverty without solving water and sanitation.”<br/> ~ Matt Damon
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-img">
                <img src="img/about-img-two.jpg" alt="Image" />
                {/* <div class="about-child">
                  <img src="img/about-child.jpg" alt="Image" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="services-area pb-70">
        <div class="container">
         
            <span class="top-title"><h2>Our Services</h2></span>
          

            {/* start categories */}

            <div class="row">
            {
            category.length>0 &&  category.map((getcategory)=>{
                
                <div class="col-lg-4 col-sm-6">
                  <div class="single-services" style={{minHeight:400}}>
                    <a href="service-details.html"><img src={getcategory.image} alt="" style={{width:350 , height:200}}/></a>
                    <div class="services-content">
                      <h3>{getcategory.categoryName}</h3>
                      <p>
                        {getcategory.description}
                      </p>
                      <Link class="read-more" to={'service/'+getcategory.id}
                        >See details <i class="bx bx-plus"></i></Link>
                    </div>
                  </div>
                    </div>
              
            }
          )}
          </div>
         
          {/* end of categories */}
        </div>
      </div>
     
      <div class="process-area bg-color pt-100 pb-70">
        <div class="container">
          <div class="section-title">
            <span>Process</span>
            <h2>How It Works</h2>
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-6">
              <div class="single-process">
                <img src="img/process/process1.png" alt="Image" />
                <h3>Account &amp; Check-In</h3>
              <span>01</span>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="single-process">
                <img src="img/process/process2.png" alt="Image" />
                <h3>Choose servive</h3>
            <span>02</span>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div class="single-process">
                <img src="img/process/process3.png" alt="Image" />
                <h3>Get Clean Property</h3>
               <span>03</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  <br/><br/>
      <div class="pb-70">
        <div class="products-area">
          <div class="container">
            <div class="section-title">
              <h2>Our Work</h2>
            </div>
            <div class="row">
              <div class="col-lg-4 col-sm-6">
                <div class="single-product">
                  <div class="product-img">
                    <img src="img\services\service3.jpg" alt="Image" />
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="single-product">
                  <div class="product-img">
                    <img src="img\services\service2.jpg" alt="" />
                  </div>
                 
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="single-product">
                  <div class="product-img">
                    <img src="img\services\service1.jpg" alt="Image" />
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="appointment-area jarallax ptb-100">
        <div class="container">
          <div class="section-title white-title">
            <span>Call To Action</span>
            <h2>Make An Appointment</h2>
          </div>
          <div class="appointment-here-form">
            <form>
              <div class="row">
                <div class="col-lg-4 col-sm-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="your_name"
                      placeholder="Enter Your Name"
                    /><i class="bx bx-user"></i>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      placeholder="Enter Your Email"
                    /><i class="bx bx-envelope"></i>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="phone"
                      placeholder="Enter Your Phone"
                    /><i class="bx bx-mobile-alt"></i>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-6">
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
                <div class="col-lg-4 col-sm-6">
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
                <div class="col-lg-4 col-sm-6">
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
                    Confirm Appointment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="blog-area pt-100 pb-70">
        <div class="container">
          <div class="section-title">
            <span class="top-title">News</span>
            <h2>Our Latest News</h2>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single-blog">
                <a href="blog-details.html"
                  ><img src="img/blog/blog2.jpg" alt="Image"/></a>
                <div class="blog-content">
                  <ul>
                    <li><a href="index.html#">Admin</a></li>
                    <li>17 / 05 / 2020</li>
                  </ul>
                  <a href="blog-details.html"
                    ><h3>Corona Virus Infection Prevention</h3></a
                  >
                  <a class="read-more" href="blog-details.html"
                    >Read More <i class="bx bx-plus"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-blog">
                <a href="blog-details.html"
                  ><img src="img/blog/blog3.jpg" alt="Image"
                /></a>
                <div class="blog-content">
                  <ul>
                    <li><a href="index.html#">Admin</a></li>
                    <li>18 / 05 / 2020</li>
                  </ul>
                  <a href="blog-details.html"
                    ><h3>Superior Clean Through Our Trained</h3></a
                  >

                  <a class="read-more" href="blog-details.html"
                    >Read More <i class="bx bx-plus"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div class="single-blog">
                <a href="blog-details.html"
                  ><img src="img/blog/blog1.jpg" alt="Image"
                /></a>
                <div class="blog-content">
                  <ul>
                    <li><a href="index.html#">Admin</a></li>
                    <li>19 / 05 / 2020</li>
                  </ul>
                  <a href="blog-details.html"
                    ><h3>How To Clean And Spread Disinfect</h3></a
                  >
                  <a class="read-more" href="blog-details.html"
                    >Read More <i class="bx bx-plus"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     

    </div>
  )
}

export default Index
