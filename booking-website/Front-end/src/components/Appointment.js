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
       
      

        <div class="go-top">
          <i class="bx bx-chevrons-up"></i>
          <i class="bx bx-chevrons-up"></i>
        </div>
        <div class="Toastify"></div>
      </div>
    
  );
}
