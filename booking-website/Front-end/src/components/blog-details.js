import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";

export default function BlogDetails() {

  // const { id } = useParams()
  const [comm, setComm] = useState([]);
  const navigate = useNavigate();
  // console.log(comm)
  // console.log(id)

  const fetchData = async()=>{
    const resp = await fetch(`http://127.0.0.1:8000/api/apicomment`)
       const respdata = await resp.json()
       setComm(respdata)
   }
   useEffect(() => {
     fetchData()
   }, []);
   console.log(comm)

   let isLoggedIn = JSON.parse(localStorage.getItem("user"));
   if (!isLoggedIn) {
    navigate("/login");
  }

  const [comment, setComment] = useState("");
  const commentHandler = async (e) => {
    e.preventDefault();
    const response= await fetch(`http://127.0.0.1:8000/api/addcomm`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment:comment , userid:isLoggedIn.id }),
    
    });
    if (response.ok){
      window.alert("comment added successfully")
    }
    
  };
  console.log(comment)
 const getComment= comm.map((comment)=>{
   return( <ol class="comment-list">
    <li class="comment">
      <div class="comment-body">
        <footer class="comment-meta">
          <div class="comment-author vcard">
            <img
              src="img/blog-details/comment-img-1.png"
              class="avatar"
              alt="image"
            />
            <b class="fn">{comment.userName}</b>
            <span class="says">says:</span>
          </div>
        </footer>
        <div class="comment-content">
          <p>
           {comment.comment}
          </p>
        </div>
      </div>

      <li class="comment">
        <div class="comment-body">
          <footer class="comment-meta">
            <div class="comment-author vcard"></div>
          </footer>
        </div>
      </li>
    </li>
  </ol>
 )})


  return (
    <div>
      <div class="page-title-area bg-16">
        <div class="container">
          <div class="page-title-content">
            <h2>Comment Section</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li class="active">Comment</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="blog-details-area ptb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12">
              <div class="blog-details-desc">
                <div class="article-content">
                  <div class="entry-meta"></div>

                  <blockquote class="flaticon-quote"></blockquote>

                  <div class="row mb-3">
                    <div class="col-lg-4 col-sm-6 mt-3"></div>

                    <h3>Leave a comment</h3>
                  </div>
                  <div class="post-navigation">
                    <div class="navigation-links">
                      <div class="nav-previous"></div>
                      <div class="nav-next"></div>
                    </div>
                  </div>
                  <div class="comments-area">
                    <h3 class="comments-title"> Comments:</h3>
                    {/* <ol class="comment-list">
                      <li class="comment">
                        <div class="comment-body">
                          <footer class="comment-meta">
                            <div class="comment-author vcard">
                              <img
                                src="img/blog-details/comment-img-1.png"
                                class="avatar"
                                alt="image"
                              />
                              <b class="fn"></b>
                              <span class="says">says:</span>
                            </div>
                          </footer>
                          <div class="comment-content">
                            <p>
                              Lorem Ipsum has been the industry’s standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley of type and scrambled it to make a
                              type.
                            </p>
                          </div>
                        </div>

                        <li class="comment">
                          <div class="comment-body">
                            <footer class="comment-meta">
                              <div class="comment-author vcard"></div>
                            </footer>
                          </div>
                        </li>
                      </li>
                    </ol> */}

                    {getComment}
                    <div class="comment-respond">
                      <form class="comment-form">
                        <p class="comment-form-comment">
                          <label>Comment</label>
                          <textarea
                            name="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            id="comment"
                            cols="45"
                            rows="5"
                            required=""
                          ></textarea>
                        </p>
                        <p class="form-submit">
                          <input
                            type="submit"
                            name="submit"
                            onClick={commentHandler}

                            // id="submit"
                            // class="submit"
                            // value="Post A Comment"
                          />
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      //{" "}
    </div>
    //   </div>
    // </div>
  );
}
