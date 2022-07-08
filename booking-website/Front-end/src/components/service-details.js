import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "../Hooks/useFetch";

export default function ServiceDetails() {
  const { id } = useParams();
  const [data, setData] = useState({});
  console.log(data);
  console.log(id)

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/category/${id}`)
      .then((response) => response.json())
      .then((data) =>console.log(data));
  }, []);
  console.log(data)
  return (
    <div>
      
        <h1>{data.description}</h1>
      
      <div class="page-title-area bg-23">
        <div class="container">
          <div class="page-title-content">
            <h2>Services Details</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li class="active">Services Details</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="services-details-area pt-100 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="services-sidebar">
                <div class="services-img">
                  <img src="img/services/service1.jpg" alt="Image" />
                </div>
                <div class="availability">
                  <h3>
                    <i class="bx bx-time"></i>Availability
                  </h3>
                  <ul>
                    <li>
                      Monday - Friday<span>9.00 - 20.00</span>
                    </li>
                    <li>
                      Saturday<span>10.00 - 16.00</span>
                    </li>
                    <li>
                      Sunday<span>9.30 - 18.00</span>
                    </li>
                    <li>
                      Friday<span>Closed</span>
                    </li>
                  </ul>
                  <a class="default-btn mt-4" href="appointment.html">
                    Request An Appointment
                  </a>
                </div>
                <div class="client-area services-feedback"></div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="services-detailss">
                <div class="services-history">
                  <h2>{data.serviceName}</h2>
                  <span></span>
                  <p>{data.description}</p>
                  <div class="row borders">
                    <div class="col-lg-3 pl-0">
                      <div class="left-title">
                        <h3>Category</h3>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="right-title">
                        <ul>
                          <li>
                            <i class="bx bxs-hand-right"></i>House Cleaning
                          </li>
                          <li>
                            <i class="bx bxs-hand-right"></i>Window Cleaning
                          </li>
                          <li>
                            <i class="bx bxs-hand-right"></i>Apartment Cleaning
                          </li>
                          <li>
                            <i class="bx bxs-hand-right"></i>Industry Cleaning
                          </li>
                          <li>
                            <i class="bx bxs-hand-right"></i>Hospital &amp;
                            Health Care
                          </li>
                          <li>
                            <i class="bx bxs-hand-right"></i>Bathroom Cleaning
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row borders">
                    <div class="col-lg-3 pl-0">
                      <div class="left-title">
                        <h3>Specialty</h3>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="right-title">
                        <ul>
                          <li>
                            <i class="bx bxs-hand-right"></i>5 Room Cleaning
                          </li>
                          <li>
                            <i class="bx bxs-hand-right"></i>2 Bathroom Cleaning
                          </li>
                          <li>
                            <i class="bx bxs-hand-right"></i>Window Cleaning
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row borders">
                    <div class="col-lg-3 pl-0">
                      <div class="left-title">
                        <h3>Experience</h3>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="right-title">
                        <ul>
                          <li>
                            <i class="bx bxs-hand-right"></i>25 years of
                            Experience in Medicine
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row borders">
                    <div class="col-lg-3 pl-0">
                      <div class="left-title">
                        <h3>Address</h3>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="right-title">
                        <ul>
                          <li>
                            <i class="bx bxs-hand-right"></i>123, Western Road,
                            Melbourne Australia
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row borders">
                    <div class="col-lg-3 pl-0">
                      <div class="left-title">
                        <h3>Phone</h3>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="right-title">
                        <ul>
                          <li>
                            <i class="bx bxs-hand-right"></i>+61-821-456
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row borders">
                    <div class="col-lg-3 pl-0">
                      <div class="left-title">
                        <h3>Email</h3>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="right-title">
                        <ul>
                          <li>
                            <i class="bx bxs-hand-right"></i>
                            <a
                              href="cdn-cgi/l/email-protection.html"
                              class="__cf_email__"
                              data-cfemail="89e1ece5e5e6c9fafde6e7a7eae6e4"
                            >
                              [email&#160;protected]
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row borders">
                    <div class="col-lg-3 pl-0">
                      <div class="left-title">
                        <h3>Website</h3>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="right-title">
                        <ul>
                          <li>
                            <i class="bx bxs-hand-right"></i>
                            <a href="service-details.html#">www.ston.com</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------comment-aria---------------------- */}
    </div>
  );
}
