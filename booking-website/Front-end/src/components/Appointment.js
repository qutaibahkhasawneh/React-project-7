
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
export function Appointment() {
  const { id } = useParams();
  const [d, setData] = useState({
    date: "",
    time: "",
    city: "",
    userId: "",
    serviceId: "",
    street: "",
  });
  const [selectedOptions, setselectedOptions] = useState({
    name: "",
    active: 0,
  });
  const [date, setDate] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const navigate = useNavigate();
  let isLoggedIn = JSON.parse(localStorage.getItem("user"));
  if (!isLoggedIn) {
    navigate("/login");
  }
  
  const apiUrl = "http://127.0.0.1:8000/api/Booking";
  const booking = (e) => {
    e.preventDefault();

    const data1 = {
      city: d.city,
      street: d.street,
      time: d.time,
      date: d.name,
      userId: isLoggedIn.id,
      serviceId: id,
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
     const disablePastDate = () => {
       const today = new Date();
       const dd = String(today.getDate() ).padStart(2, "0");
       const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
       const yyyy = today.getFullYear();
       return yyyy + "-" + mm + "-" + dd;
     };

    const onKeyPressed=(e)=>{
    e.preventDefault()
  }
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
                {/* <div class="col-lg-6 col-sm-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="userName"
                      name="userName"
                      value={isLoggedIn.userName}
                      disabled
                    />
                    <i class="bx bx-envelope"></i>
                  </div>
                </div> */}

                <div class="col-lg-6 col-sm-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="Name"
                      placeholder="city"
                      onChange={onChange}
                      name="city"
                    />
                    <i class="bx bxs-city"></i>
                  </div>
                </div>

                <div class="col-lg-6 col-sm-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="street"
                      onChange={onChange}
                      name="street"
                      placeholder="street"
                    />
                    <i class="bx bx-street-view"></i>
                  </div>
                </div>
    

                <div class="col-lg-6 col-sm-6">
                  <div class="form-group">
                    <div class="react-datepicker-wrapper">
                      <div class="react-datepicker__input-container">
                        <input
                          type="date"
                          min={disablePastDate()}
                          onChange={onChange}
                          name="time"
                          class="form-control"
                          onKeyDown={onKeyPressed}
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