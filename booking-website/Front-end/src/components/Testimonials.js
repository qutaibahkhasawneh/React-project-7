import React, { useEffect, useState } from "react";
export function Testimonials() {
  const[data, setData] = useState([]);
  useEffect(() => {
    const getFeedback = async () => {
      const res = await fetch("http://127.0.0.1:8000/api/feedbacks");
      const getdata = await res.json();
      setData(getdata);
      console.log(getdata);
    };
    getFeedback();
  }, []);
  let isLoggedIn = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <div class="page-title-area bg-3">
        <div class="container">
          <div class="page-title-content">
            <h2>Feedback</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li class="active">Testimonials</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="client-area client-page ptb-100">
        <div class="container">
          <div class="section-title">
            <h2>What Our Client’s Say</h2>
            <p>
              We pride ourselves on providing an exceptional service to our
              clients, but you don’t just have to take our word for it. Read
              what our clients have to say about working with us.
            </p>
          </div>
          <div class="row">
            {data.map((getFeedback) => (
              <div class="col-lg-6">
                <div class="single-client">
                  <img
                    src="https://cdn.onlinewebfonts.com/svg/img_415639.png"
                    style={{ width: "70px" }}
                    alt="img"
                  />
                  <p>feedback : {getFeedback.body}</p>
                  <ul>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                    <li>
                      <i class="bx bxs-star"></i>
                    </li>
                  </ul>
                  <h3>{isLoggedIn.userName}</h3>
                  <h6>{getFeedback.title}</h6>
                  <div class="quate">
                    <i class="flaticon-right-quotes-symbol"></i>
                  </div>
                </div>
              </div>
            ))}

            <div class="col-lg-12">
              <div class="page-navigation-area text-center">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link page-links" href="testimonials.html#">
                      <i class="bx bx-chevrons-left"></i>
                    </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="testimonials.html#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="testimonials.html#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="testimonials.html#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="testimonials.html#">
                      <i class="bx bx-chevrons-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
