import React,{useEffect,useState} from 'react'
import {Link, link} from 'react-router-dom';
function Reset() {
    let isLoggedIn = JSON.parse(localStorage.getItem("user"));

    const[password,setPass]=useState('');
    const[password2,setPass2]=useState('');

    const passHandeler=(e)=>{
        if(this.value.password === this.value.password2){
            window.alert("password has been reset successfully")
        }else{
            window.alert("reset password faild")
        }
    }
  return (
    
      <>
      <div className="page-title-area bg-1">
        <div className="container">
          <div className="page-title-content">
            <h2>Profile</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="active">Reset password</li>
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
                <Link
                  className="nav-link active"
                  id="account-tab"
                  data-toggle="pill"
                  to={"/profile/"+isLoggedIn.id}
                  role="tab"
                  aria-controls="account"
                  aria-selected="true">
                  <i className="fa fa-home text-center mr-1"></i>
                  Account
                </Link>
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
              
              </div>
            </div>
            
            <div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="account"
                role="tabpanel"
                aria-labelledby="account-tab" >
                <h3 className="mb-4">Account Settings</h3>
               <form onSubmit={passHandeler}>
               {/* <form> */}
                <div className="row">
               
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>new Password</label>
                      <input type="password" className="form-control" name='password'
                       value={password} 
                        onChange={(e)=>setPass(e.target.value)}
                       />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>re-type Password</label>
                      <input
                        type="password"
                        className="form-control" name='password2'
                         value={password2} 
                        onChange={(e)=>setPass2(e.target.value)} 
                        />

                    </div>
                  </div>
                  
                
               
                       
                </div>
                <div>
                  <button className="btn btn-primary" type='submit' > reset password</button>
                  {/* <button className="btn btn-primary" type='submit' >update</button> */}

                  <button className="btn btn-light" >Cancel</button>
                </div>
                </form>
               
               
              </div>
       
             
              </div>
            </div>
          </div>
       
      </section>
  </>
   
  )
}

export default Reset
