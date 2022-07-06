import React from 'react'

function Signup() {
  return (
    <div>
      
  
      <div class="page-title-area bg-9">
            <div class="container">
                <div class="page-title-content">
                    <h2>Sign Up</h2>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li class="active">Sign Up</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="user-area-all-style sign-up-area ptb-100">
            <div class="container">
                <div class="section-title">
                    <h2>Create an account!</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quas cumque iste veniam id
                        dolorem deserunt ratione error voluptas rem ullam possimus placeat, ut, odio</p>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="contact-form-action">
                            <form>
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-12"><button class="default-btn"
                                            type="submit">Google</button></div>
                                    <div class="col-lg-4 col-md-4 col-sm-12"><button class="default-btn"
                                            type="submit">Facebook</button></div>
                                    <div class="col-lg-4 col-md-4 col-sm-12"><button class="default-btn"
                                            type="submit">Twitter</button></div>
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group"><input type="text" class="form-control" name="name"
                                                placeholder="First Name" /></div>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group"><input type="text" class="form-control" name="name"
                                                placeholder="Last Name" /></div>
                                    </div>
                                    <div class="col-md-12 col-sm-12">
                                        <div class="form-group"><input type="text" class="form-control" name="name"
                                                placeholder="Enter your Username" /></div>
                                    </div>
                                    <div class="col-md-12 col-sm-12">
                                        <div class="form-group"><input type="email" class="form-control" name="email"
                                                placeholder="Email Address" /></div>
                                    </div>
                                    <div class="col-md-12 col-sm-12">
                                        <div class="form-group"><input type="text" class="form-control" name="password"
                                                placeholder="Password" /></div>
                                    </div>
                                    <div class="col-md-12 col-sm-12 ">
                                        <div class="form-group"><input type="text" class="form-control" name="password"
                                                placeholder="Confirm Password" /></div>
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-xs-12 form-condition">
                                        <div class="agree-label"><input type="checkbox" id="chb1" /><label for="chb1">I
                                                agree with Ston <a href="privacy-policy.html">Privacy Policy</a></label>
                                        </div>
                                        <div class="agree-label"><input type="checkbox" id="chb2" /><label for="chb2">I
                                                agree with Ston <a href="terms-conditions.html">Terms &amp;
                                                    Conditions</a></label></div>
                                    </div>
                                    <div class="col-12"><button class="default-btn btn-two" type="submit">Sign
                                            Up</button></div>
                                    <div class="col-12">
                                        <p class="account-desc">Already have an account? <a href="sign-in.html">Sign
                                                In</a></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="sign-up-img"></div>
                    </div>
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default Signup
