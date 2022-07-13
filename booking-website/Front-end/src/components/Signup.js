import React, {useState} from 'react'

function Signup() {
    const [userName, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [phone, setPhone]=useState("")
    
    async function sign(e) {
        e.preventDefault()
        let item = {userName,password,email,phone}
        console.warn(item)


        let result = await fetch("http://127.0.0.1:8000/api/users",{
            method:'POST',    
             headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            },
            body:JSON.stringify(item),
            
       
        })
        window.location.href = 'http://localhost:3000/login'
        result = await result.json()
        console.warn("result", result)
        }
  return (
    <div>
      
  
      <div className="page-title-area bg-9">
            <div className="container">
                <div className="page-title-content">
                    <h2>Sign Up</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li className="active">Sign Up</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="user-area-all-style sign-up-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>Create an account!</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quas cumque iste veniam id
                        dolorem deserunt ratione error voluptas rem ullam possimus placeat, ut, odio</p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-form-action">
                            <form>
                                <div className="row">
                                   
                                  
                                    <div className="col-md-12 col-sm-12">
                                        <div  className="form-group"><input required type="text" className="form-control" name="name"
                                                placeholder="Enter your Username" value={userName} onChange={(e)=>setName(e.target.value)} /></div>
                                    </div>
                                    <div  className="col-md-12 col-sm-12">
                                        <div className="form-group"><input required type="email" className="form-control" name="email"
                                                placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)}/></div>
                                    </div>
                                    <div  className="col-md-12 col-sm-12">
                                        <div className="form-group"><input required type="text" className="form-control" name="phone"
                                                placeholder="phone number" value={phone} onChange={(e)=>setPhone(e.target.value)}/></div>
                                    </div>
                                    <div  className="col-md-12 col-sm-12">
                                        <div className="form-group"><input required type="password" className="form-control" name="password"
                                                placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/></div>
                                    </div>
                                    <div  className="col-md-12 col-sm-12 ">
                                        <div className="form-group"><input required type="password" className="form-control" name="password"
                                                placeholder="Confirm Password" /></div>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12 form-condition">
                                        <div className="agree-label"><input required type="checkbox" id="chb1" /><label >I
                                                agree with Ston <a href="privacy-policy.html">Privacy Policy</a></label>
                                        </div>
                                        <div className="agree-label"><input required type="checkbox" id="chb2" /><label >I
                                                agree with Ston <a href="terms-conditions.html">Terms &amp;
                                                    Conditions</a></label></div>
                                    </div>
                                    <div className="col-12">
                                        <button onClick={sign}>signup</button>
                                    </div>
                                    <div className="col-12">
                                        <p className="account-desc">Already have an account? <a href="/login">Sign
                                                In</a></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="sign-up-img"></div>
                    </div>
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default Signup
