import { useRef, useState, useEffect, useContext ,useNavigate } from 'react';
import AuthContext from '../context/AuthProvider';
import { Navigate } from "react-router-dom";
import axios from 'axios';


const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    const [dataBase, setDataBase] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [loggeduser, setLoggeduser] = useState({});
    useEffect(() => {
        //focus on user input after render to avoid autofocus on login page when user is already logged in 
        //we will reference with the user ref
        userRef.current.focus();
    }, [])
    // if the user changes  the password state or the email state the error message will change to empty
    useEffect(() => {
        setErrMsg('');
    }, [email, password])
    useEffect(() => {
        <Navigate to="/" />

    }, [success])

    
    const handleSubmit = (e) => {
         e.preventDefault();
        const user ={
            email:email,
            password:password
        }
        
        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/users/log',
            headers: { Accept : 'application/json' },
            data: user
        }).then((res)=>{
            setLoggeduser(res.data);
            console.log(res);
            if(loggeduser.status == '200' ){
                localStorage.setItem('user',JSON.stringify(loggeduser.logged_user));
                window.location.href = 'http://localhost:3001'
                setSuccess(true);
            }
        })

    
        }

  return (

    <>
    {success ? <>
        <section>
           
            <br />
            <p>
             
            
            
            </p>
        </section>
    </>
     : 
     <section className="">
    <div>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>


   
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
                                                placeholder="Username or Email"  ref={userRef} value={email} onChange={e => setEmail(e.target.value)}/></div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group"><input type="password" class="form-control"
                                                name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /></div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 form-condition">
                                        <div class="agree-label"><input type="checkbox" id="chb1" /><label
                                                for="chb1">Remember Me</label></div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6"><a class="forget" href="recover-password.html">Forgot
                                            my password?</a></div>
                                    <div class="col-12"><button class="default-btn btn-two" type="submit" onClick={handleSubmit}>Sign
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
    </section>
 }
 </>

);
}

export default Login

