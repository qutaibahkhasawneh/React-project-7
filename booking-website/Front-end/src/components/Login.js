import React from 'react'

function Login() {
  return (
    <div>
      

   
      <div class="page-title-area bg-9">
            <div class="container">
                <div class="page-title-content">
                    <h2>Sign In</h2>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li class="active">Sign In</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="user-area-all-style log-in-area ptb-100">
            <div class="container">
                <div class="section-title">
                    <h2>Sign In to your account!</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quas cumque iste veniam id
                        dolorem deserunt ratione error voluptas rem ullam possimus placeat, ut, odio</p>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="contact-form-action">
                            <form method="post">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-12"><button class="default-btn"
                                            type="submit">Google</button></div>
                                    <div class="col-lg-4 col-md-4 col-sm-12"><button class="default-btn"
                                            type="submit">Facebook</button></div>
                                    <div class="col-lg-4 col-md-4 col-sm-12"><button class="default-btn"
                                            type="submit">Twitter</button></div>
                                    <div class="col-12">
                                        <div class="form-group"><input type="text" class="form-control" name="name"
                                                placeholder="Username or Email" /></div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group"><input type="password" class="form-control"
                                                name="password" placeholder="Password" /></div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 form-condition">
                                        <div class="agree-label"><input type="checkbox" id="chb1" /><label
                                                for="chb1">Remember Me</label></div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6"><a class="forget" href="recover-password.html">Forgot
                                            my password?</a></div>
                                    <div class="col-12"><button class="default-btn btn-two" type="submit">Sign
                                            In</button></div>
                                    <div class="col-12">
                                        <p class="account-desc">Not a member? <a href="sign-up.html">Sign Up</a></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="log-in-img"></div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>

  )
}

export default Login

