import React, { useState, useEffect } from "react";
import {  useParams} from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

export function Appointment() {
    const { id } = useParams();
  const [d, setData] = useState({
    date: "",
    time: "",
    phone: "",
    place: "",
    room: "",
  });
  const [selectedOptions, setselectedOptions] = useState({
    name: "",
    active: 0,
  });
  const [date, setDate] = useState([]);
  const [selectedId, setSelectedId] = useState(0);

  // let isLoggedIn = JSON.parse(localStorage.getItem("user"));
  // if (!isLoggedIn) {
  //   navigate("/login");
  // }
  const apiUrl = "http://127.0.0.1:8000/api/Booking";
  const booking = (e) => {
    e.preventDefault();

    const data1 = {
      place: d.place,
      room: d.room,
      d: d.date,
      time: d.time,
      phone: d.phone,
      date: d.name,
    };
    axios.post(apiUrl, data1).then((result) => {
      console.log(result.data.d);
      if (result.data.Status == "Invalid")
        swal({
          text: "booking fail!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        });
      else
        swal({
          title: "Good job!",
          text: "booking success!",
          icon: "success",
          button: "ok!",
        });
    });
    const data2 = {
      name: selectedOptions.name,
      active: selectedOptions.active,
    };
    axios.post(`http://127.0.0.1:8000/api/selectDate/${selectedId}`, data2);
  };

  useEffect(() => {
    const getDates = async () => {
      const res = await fetch("http://127.0.0.1:8000/api/date");
      const getdata = await res.json();
      setDate(getdata.d);
      console.log(getdata);
    };
    getDates();
  }, []);

  const onChange = (e) => {
    setData({ ...d, [e.target.name]: e.target.value });
      setselectedOptions({
        ...selectedOptions,
        [e.target.name]: e.target.value,
      });
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute("id");

    setSelectedId(option, { ...d, [e.target.name]: e.target.value });
  };

  const handleSelectId = (id) => {
    setSelectedId(id);
    console.log(id);
  };
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
                      placeholder="Enter Your place"
                      onChange={onChange}
                      name="place"
                    />
                    <i class="bx bxs-edit-location"></i>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="Email"
                      placeholder="Enter Your Number Room"
                      onChange={onChange}
                      name="room"
                    />
                    <i class="bx bx-building-house"></i>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="Email"
                      placeholder="Enter Your free Time"
                      onChange={onChange}
                      name="time"
                    />
                    <i class="bx bxs-time"></i>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="Phone"
                      placeholder="Enter Your Phone"
                      onChange={onChange}
                      name="phone"
                    />
                    <i class="bx bx-mobile-alt"></i>
                  </div>
                </div>
              
                <div class="col-lg-6 col-sm-6">
                  <div class="form-group">
                    <div class="react-datepicker-wrapper">
                      <div class="react-datepicker__input-container">
                        <input
                          type="date"
                          onChange={onChange}
                          name="date"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6">
                  <div class="form-group">
                    <select
                      class="form-control"
                      id="SelectTime"
                      name="name"
                      onChange={onChange}
                    >
                      <option>Select Time</option>
                      {date.map((element) => {
                        if (element.active === 0) return;
                        return (
                          <option value={element.name} id={element.id}>
                            {element.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" onClick={booking} class="default-btn">
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
