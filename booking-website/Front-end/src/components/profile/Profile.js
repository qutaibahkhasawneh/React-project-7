import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router';
// import swal from "sweetalert";
import useFetch from '../../Hooks/useFetch';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Profile() {

const[users,setUsers]=useState({
  userName:'',email:'',phone:'',password:''
});

const[update,setUpdate]=useState(false)

const {id}=useParams();
console.log(id)
useEffect(()=>{
  const data=async()=>{
       const response=await fetch(`http://127.0.0.1:8000/api/users/${id}`)
       const dbData=await response.json();
       setUsers(dbData);
       console.log(dbData);
      
  }
  data()
},[update])
 
const updateHandeler=(e)=>{
e.preventDefault();
axios.put(`http://127.0.0.1:8000/api/users/${id}`, users)
.then((res)=>setUsers(res.data))
.then(()=>setUpdate(!update))
console.log(users)
if(!update){
 window.alert('Your profile has been uploaded successfuly')

  
}
const[history,getHistory]=useFetch(`http://127.0.0.1:8000/api/Booking/${id}`);
useEffect(()=>{
getHistory()
},[])


// .then((res) => {
//   if (res.data.status === 200){
//     swal({
//       title: "Good job!",
//       text: "booking success!",
//       icon: "success",
//       button: "ok!",
//     });
    

//   }})
}


  return (
    <>
      <div className="page-title-area bg-1">
        <div className="container">
          <div className="page-title-content">
            <h2>Profile</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Profile</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="py-5 my-5">
        <div className="container">
          <h1 className="mb-5">Account Settings</h1>
          <div className="bg-white shadow rounded-lg d-block d-sm-flex">
            <div className="profile-tab-nav border-right">
              <div className="p-4">
                {/* <div className="img-circle text-center mb-3">
                  <img src="img/profile/user2.jpg" alt="Image" className="shadow" />
                </div> */}
                <h4 className="text-center p-4">User Profile</h4>
              </div>
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical">
                <a
                  className="nav-link active"
                  id="account-tab"
                  data-toggle="pill"
                  href="/profile"
                  role="tab"
                  aria-controls="account"
                  aria-selected="true">
                  <i className="fa fa-home text-center mr-1"></i>
                  Account
                </a>
                <a
                  className="nav-link"
                  id="password-tab"
                  data-toggle="pill"
                  href="/reset"
                  role="tab"
                  aria-controls="password"
                  aria-selected="false" >
                  <i className="fa fa-key text-center mr-1"></i>
                  Password
                </a>
                {/* <a
                  className="nav-link"
                  id="security-tab"
                  data-toggle="pill"
                  href="#security"
                  role="tab"
                  aria-controls="security"
                  aria-selected="false" >
                  <i className="fa fa-user text-center mr-1"></i>
                  Security
                </a>
                <a
                  className="nav-link"
                  id="application-tab"
                  data-toggle="pill"
                  href="#application"
                  role="tab"
                  aria-controls="application"
                  aria-selected="false" >
                  <i className="fa fa-tv text-center mr-1"></i>
                  Application
                </a>
                <a
                  className="nav-link"
                  id="notification-tab"
                  data-toggle="pill"
                  href="#notification"
                  role="tab"
                  aria-controls="notification"
                  aria-selected="false" >
                  <i className="fa fa-bell text-center mr-1"></i>
                  Notification
                </a> */}
              </div>
            </div>
            
            <div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="account"
                role="tabpanel"
                aria-labelledby="account-tab" >
                <h3 className="mb-4">Account Settings</h3>
               <form onSubmit={updateHandeler}>
                <div className="row">
               
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>User Name</label>
                      <input type="text" className="form-control" name='userName'
                      value={users.userName} 
                      onChange={(e)=>setUsers({...users,userName:e.target.value})} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control" name='email'
                        value={users.email} 
                        onChange={(e)=>setUsers({...users,email:e.target.value})} />

                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Phone number</label>
                      <input
                        type="text"
                          className="form-control"
                          name='phone'
                        value={users.phone} 
                        onChange={(e)=>setUsers({...users,phone:e.target.value})} />

                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" name='password'
                       value={users.password} 
                      onChange={(e)=>setPassword(e.target.value)} />
                      <Link to={"/reset"} style={{color:"red"}}> reset password</Link>
                     
                </div>
                  </div> 
                  {/* <div className="col-md-6">
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input type="password" className="form-control" name='password'
                       value={users.password} 
                      onChange={(e)=>setUsers({...users,password:e.target.value})} />
                     
                </div>
                  </div>  */}
               
               
                       
                </div>
                <div>
                  <button className="btn btn-primary" type='submit' > Update</button>
                  {/* <button className="btn btn-primary" type='submit' >update</button> */}

                  <button className="btn btn-light">Cancel</button>
                </div>
                </form>
               
               
              </div>
              {/* bookings */}
              {/* <table class="table">
  <thead>
    <tr>
      <th scope="col">{users.id}</th>
      <th scope="col">Bookings</th>
     
    </tr>
  </thead>
  <tbody>
    {history.length>0 && history.map((booking)=>{
    <tr>
      
      <td>{booking.date}</td>
      <td>{booking.time}</td>
      <td>{booking.place}</td>
    </tr>
  })}
  </tbody>
</table> */}


              {/* bookings */}
              <div
                className="tab-pane fade"
                id="password"
                role="tabpanel"
                aria-labelledby="password-tab" >
                <h3 className="mb-4">Password Settings</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Old password</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>New password</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Confirm new password</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary">Update</button>
                  <button className="btn btn-light">Cancel</button>
                </div>
              </div>
             
              <div
                className="tab-pane fade"
                id="notification"
                role="tabpanel"
                aria-labelledby="notification-tab" >
                <h3 className="mb-4">Notification Settings</h3>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="notification1" />
                    <label className="form-check-label" >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum accusantium accusamus, neque cupiditate quis
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="notification2" />
                    <label className="form-check-label">
                      hic nesciunt repellat perferendis voluptatum totam porro
                      eligendi.
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="notification3" />
                    <label className="form-check-label" >
                      commodi fugiat molestiae tempora corporis. Sed dignissimos
                      suscipit
                    </label>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary" type='submit' >Update</button>
                  <button className="btn btn-light">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </>
  );
}

export default Profile;
