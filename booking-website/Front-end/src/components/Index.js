import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


function Index() {
    let isLoggedIn = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState({
    title: "",
    body: "",
    active: 'non-active',
  });
  const apiUrl = "http://127.0.0.1:8000/api/feedback";
  const feedback = (e) => {
    e.preventDefault();

    const data1 = {
      title: data.title,
      body: data.body,
      userId: isLoggedIn.id,
      active: 'non-active',
    };
    axios.post(apiUrl, data1).then((result) => {
      console.log(result.data.d);
      if (result.data.Status == "Invalid")
        swal({
          text: "feedback fail!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        });
      else
        swal({
          title: "feedback success!",
          text: "You need to accept it!",
          icon: "success",
          button: "ok!",
          color: "red",
        });
    });
  }
    const onChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    }

    const [category, setCategory] = useState([]);
    useEffect(() => {
      const getcategory = async () => {
        const res = await fetch('http://127.0.0.1:8000/api/categories');
        const getdata = await res.json();
        setCategory(getdata.categories);
        console.log(getdata);
      }
      getcategory();
    }, []);
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
                      <p>Enjoy a better, healthier, and safer life with us</p>
                      <div className="banner-btn">
                        <a className="default-btn" href="/contact">
                          Contact Us
                        </a>
                        <a className="default-btn active" href="/about">
                          About Us
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="response-time-area pb-100">
          <div className="container">
            <div className="response-wrap">
              <h3>
                Fast Response Time - Local &amp; Professional-Open 24/7{" "}
                <span style={{ marginLeft: "0px" }}>
                  {" "}
                  Call Now at +962778093278
                </span>
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
                      <i class="flaticon-checked"></i>Preventing illnesses and
                      diseases in the family
                    </li>
                    <li>
                      <i class="flaticon-checked"></i>Taking care of our mental
                      health
                    </li>
                    <li>
                      <i class="flaticon-checked"></i>Increasing our self-esteem
                      and confidence
                    </li>
                    <li>
                      <i class="flaticon-checked"></i>Improving our Social
                      Status
                    </li>
                  </ul>
                  <p class="block-content">
                    “You will never solve poverty without solving water and
                    sanitation.”
                    <br /> ~ Matt Damon
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
            <span class="top-title">
              <h2>Our Services</h2>
            </span>

            {/* start categories */}

            <div class="row">
              {category.map((getcategory) => (
                <div class="col-lg-4 col-sm-6">
                  <div class="single-services" style={{ minHeight: 400 }}>
                    <a href="service-details.html">
                      <img
                        src={getcategory.image}
                        alt=""
                        style={{ width: 350, height: 200 }}
                      />
                    </a>
                    <div class="services-content">
                      <h3>{getcategory.categoryName}</h3>
                      <p>{getcategory.description}</p>
                      <Link class="read-more" to={"service/" + getcategory.id}>
                        See details <i class="bx bx-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
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
        <br />
        <br />
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
            <div class=" white-title">
              <h2>Feedback about our services</h2>
            </div>
            <div class="appointment-here-form">
              <form>
                <div class="row" style={{ display: 'flex',justifyContent:'center'}}>
                  <div class="col-lg-7 col-sm-6">
                    <div class="form-group"  >
                      <input
                        type="text"
                        class="form-control"
                        id="your_name"
                        placeholder="title"
                        name="title"
                        onChange={onChange}
                      />
                     
                    </div>
                  </div>

                  <div class="col-lg-7 col-sm-6">
                    <div class="form-group">
                      <textarea
                        type="text"
                        class="form-control"
                        id="body"
                        placeholder="Enter Your feedback"
                        onChange={onChange}
                        name="body"
                      />
                      <i class="bx bx-mobile-alt"></i>
                    </div>
                  </div>

                  <div class="col-12">
                    <button onClick={feedback} type="submit" class="default-btn">
                      send
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
                  <a href="blog-details.html">
                    <img src="img/blog/blog2.jpg" alt="Image" />
                  </a>
                  <div class="blog-content">
                    <ul>
                      <li>
                        <a href="index.html#">Admin</a>
                      </li>
                      <li>17 / 05 / 2020</li>
                    </ul>
                    <a href="blog-details.html">
                      <h3>Corona Virus Infection Prevention</h3>
                    </a>
                    <a class="read-more" href="blog-details.html">
                      Read More <i class="bx bx-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single-blog">
                  <a href="blog-details.html">
                    <img src="img/blog/blog3.jpg" alt="Image" />
                  </a>
                  <div class="blog-content">
                    <ul>
                      <li>
                        <a href="index.html#">Admin</a>
                      </li>
                      <li>18 / 05 / 2020</li>
                    </ul>
                    <a href="blog-details.html">
                      <h3>Superior Clean Through Our Trained</h3>
                    </a>

                    <a class="read-more" href="blog-details.html">
                      Read More <i class="bx bx-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                <div class="single-blog">
                  <a href="blog-details.html">
                    <img src="img/blog/blog1.jpg" alt="Image" />
                  </a>
                  <div class="blog-content">
                    <ul>
                      <li>
                        <a href="index.html#">Admin</a>
                      </li>
                      <li>19 / 05 / 2020</li>
                    </ul>
                    <a href="blog-details.html">
                      <h3>How To Clean And Spread Disinfect</h3>
                    </a>
                    <a class="read-more" href="blog-details.html">
                      Read More <i class="bx bx-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Index
