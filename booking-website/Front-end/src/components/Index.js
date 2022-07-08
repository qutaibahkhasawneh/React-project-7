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
                <span>About Us</span>
                <h2>COVID - 19 Virus Disinfection &amp; Sanitation</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida.
                </p>
                <ul>
                  <li>
                    <i class="flaticon-checked"></i>Clean and disinfect
                    frequently touched surfaces
                  </li>
                  <li>
                    <i class="flaticon-checked"></i>Avoid touching your eyes,
                    nose, and mouth
                  </li>
                  <li>
                    <i class="flaticon-checked"></i>Clean your hands with a hand
                    sanitizer
                  </li>
                  <li>
                    <i class="flaticon-checked"></i>Cover coughs and sneezes
                  </li>
                </ul>
                <p class="block-content">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  deserunt hic natus eum adipisci optio maxime itaque et.
                </p>
                <a class="default-btn" href="about-us.html">Learn More</a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-img">
                <img src="img/about-img.jpg" alt="Image" />
                <div class="about-child">
                  <img src="img/about-child.jpg" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="services-area pb-70">
        <div class="container">
          <div class="section-title">
            <span class="top-title">Services</span>
            <h2>Commercial Disinfection Services</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              vero reprehenderit vel accusantium, facilis architecto consectetur
              nobis tempore ullam suscipit tenetur mollitia corporis veritatis.
            </p>
          </div>

            {/* start categories */}

            <div class="row">
            {
            category.length>0 &&  category.map((getcategory)=>{
                
                <div class="col-lg-4 col-sm-6">
                  <div class="single-services" style={{minHeight:400}}>
                    <Link to={{pathname:'service/'+getcategory.id}}
                      ><img src={getcategory.image} alt="Image" style={{width:350 , height:200}}/></Link>
                    <div class="services-content">
                      <h3>{getcategory.categoryName}</h3>
                      <p>
                        {getcategory.description}
                      </p>
                      <Link class="read-more" to={'service/'+getcategory.id}
                        >See details <i class="bx bx-plus"></i></Link>
                        <span class="flaticon-couch"></span>
                    </div>
                  </div>
                    </div>
              
            }
          )}
          </div>
         
          {/* end of categories */}
        </div>
      </div>
      <div class="prevent-area pb-70">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="prevent-content">
                <span>Prevent</span>
                <h2>Protect Yourself from Virus</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida.
                </p>
                <ul>
                  <li>
                    <h3>Wash your Hands</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio tempore minima cumque praesentium blanditiis nobis,
                      dolore esse cupiditate
                    </p>
                  </li>
                  <li>
                    <h3>Use Hand sanitizer</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio tempore minima cumque praesentium blanditiis nobis,
                      dolore esse cupiditate
                    </p>
                  </li>
                  <li>
                    <h3>Additional key times to clean hands</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio tempore minima cumque praesentium blanditiis nobis,
                      dolore esse cupiditate
                    </p>
                  </li>
                  <li>
                    <h3>Avoid touching</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio tempore minima cumque praesentium blanditiis nobis,
                      dolore esse cupiditate
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="prevent-img">
                <img src="img/prevent-img.jpg" alt="Image" />
                <div class="prevent-child">
                  <img src="img/prevent-child.jpg" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="process-area bg-color pt-100 pb-70">
        <div class="container">
          <div class="section-title">
            <span>Process</span>
            <h2>How It Works</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              tenetur vero deserunt! Magni, laborum. Molestias, quidem mollitia,
              quae minus vero vel reprehenderit, aliquid alias delectus autem.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-6">
              <div class="single-process">
                <img src="img/process/process1.png" alt="Image" />
                <h3>Account &amp; Check-In</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <a class="read-more" href="index.html#"
                  >Get In Touch <i class="bx bx-plus"></i></a
                ><span>01</span>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="single-process">
                <img src="img/process/process2.png" alt="Image" />
                <h3>Choose Category</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <a class="read-more" href="index.html#"
                  >Get In Touch <i class="bx bx-plus"></i></a
                ><span>02</span>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div class="single-process">
                <img src="img/process/process3.png" alt="Image" />
                <h3>Get Clean Property</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <a class="read-more" href="index.html#"
                  >Get In Touch <i class="bx bx-plus"></i></a
                ><span>03</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="project-area pt-100 pb-70">
        <div class="container-fluid p-0">
          <div class="section-title">
            <span>Projects</span>
            <h2>Our Recent Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              tenetur vero deserunt! Magni, laborum. Molestias, quidem mollitia,
              quae minus vero vel reprehenderit, aliquid alias delectus autem.
            </p>
          </div>
        </div>
      </section>
      <div class="pb-70">
        <div class="products-area">
          <div class="container">
            <div class="section-title">
              <span>Products</span>
              <h2>Our Popular Products</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                tenetur vero deserunt! Magni, laborum. Molestias, quidem
                mollitia, quae minus vero vel reprehenderit, aliquid alias
                delectus autem.
              </p>
            </div>
            <div class="row">
              <div class="col-lg-4 col-sm-6">
                <div class="single-product">
                  <div class="product-img">
                    <img src="img/products/product1.jpg" alt="Image" /><button
                      type="submit"
                      class="default-btn"
                    >
                      Add To Cart
                    </button>
                  </div>
                  <div class="product-content">
                    <h3>
                      <a href="product/5f05ab914875b805d9f87b09.html"
                        >COVID-19 Protect Mask</a
                      >
                    </h3>
                    <ul>
                      <li>$18</li>
                      <li>
                        <del>20</del>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="single-product">
                  <div class="product-img">
                    <img src="img/products/product2.jpg" alt="Image" /><button
                      type="submit"
                      class="default-btn"
                    >
                      Add To Cart
                    </button>
                  </div>
                  <div class="product-content">
                    <h3>
                      <a href="product/5f0cc6063ab06e21b560184b.html"
                        >Surgical Hand Gloves</a
                      >
                    </h3>
                    <ul>
                      <li>23</li>
                      <li>
                        <del>$25</del>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="single-product">
                  <div class="product-img">
                    <img src="img/products/product3.jpg" alt="Image" /><button
                      type="submit"
                      class="default-btn"
                    >
                      Add To Cart
                    </button>
                  </div>
                  <div class="product-content">
                    <h3>
                      <a href="product/5f0df3a63ab06e21b560184c.html"
                        >Cleaning Agent Solve</a
                      >
                    </h3>
                    <ul>
                      <li>28</li>
                      <li>
                        <del>30</del>
                      </li>
                    </ul>
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus
            </p>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single-blog">
                <a href="blog-details.html"
                  ><img src="img/blog/blog1.jpg" alt="Image"
                /></a>
                <div class="blog-content">
                  <ul>
                    <li><a href="index.html#">Admin</a></li>
                    <li>17 / 05 / 2020</li>
                  </ul>
                  <a href="blog-details.html"
                    ><h3>Corona Virus Infection Prevention</h3></a
                  >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt amet.
                  </p>
                  <a class="read-more" href="blog-details.html"
                    >Read More <i class="bx bx-plus"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-blog">
                <a href="blog-details.html"
                  ><img src="img/blog/blog2.jpg" alt="Image"
                /></a>
                <div class="blog-content">
                  <ul>
                    <li><a href="index.html#">Admin</a></li>
                    <li>18 / 05 / 2020</li>
                  </ul>
                  <a href="blog-details.html"
                    ><h3>Superior Clean Through Our Trained</h3></a
                  >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt amet.
                  </p>
                  <a class="read-more" href="blog-details.html"
                    >Read More <i class="bx bx-plus"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div class="single-blog">
                <a href="blog-details.html"
                  ><img src="img/blog/blog3.jpg" alt="Image"
                /></a>
                <div class="blog-content">
                  <ul>
                    <li><a href="index.html#">Admin</a></li>
                    <li>19 / 05 / 2020</li>
                  </ul>
                  <a href="blog-details.html"
                    ><h3>How To Clean And Spread Disinfect</h3></a
                  >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt amet.
                  </p>
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
