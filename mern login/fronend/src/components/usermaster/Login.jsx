import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";



/** Main function */
const Login = () => {
    /** State manage */
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    /** State manage end */
    const navigate = useNavigate();
    /** login click function */
    function checkLogin(){
        const data = {email,password}
        fetch("http://localhost:8080/login",{
            method:'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        }).then((result)=>{
            result.json().then((response)=>{
                if(response.status==200){
                  console.log('okk');  
                  navigate('/dashboard')
                }
                else{
                  navigate('/')
                  alert(response.message)
                }  
            })
        })
        console.log(data)
    }
    /** login click function end */

    /** captcha onChange */
  function onChange(value) {
    console.log("Captcha value:", value);
  }
   /** captcha onChange end */

  return (
     /** design code */
    <>
      <div className="container-fluid">
        <div className="row back p-4">
          <div className="col-sm-4"></div>
          <div class="col-sm-4 bg-light text-black  border rounded-5">
            <div class="text-center pt-3 ps-2">
              <img src="./image/logo.PNG" height="130px" alt="..." />
            </div>

            <div class="d-flex align-items-center px-1 ms-xl-4 mt-5  pt-xl-0 ">
              <form style={{ width: "26rem" }}>
                <h3
                  class="fw-normal fs-4 mb-3 text-center"
                  style={{ letterSpacing: "1px" }}
                >
                  Log{" "}
                  <i className="fw-bold" style={{ color: "#ed721d" }}>
                    In
                  </i>
                </h3>

                <div class="form-outline mb-3">
                  <label class="form-label" for="form2Example18">
                    E-Mail / User Name
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Email or Username"
                    id="form2Example18"
                    class="form-control form-control-lg fs-6"
                  />
                </div>

                <div class="form-outline mb-2">
                  <label class="form-label" for="form2Example28">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    id="form2Example28"
                    class="form-control form-control-lg fs-6"
                    placeholder="Password"
                  />
                </div>
                <div class="form-check d-flex justify-content-start mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                  />
                  <label class="form-check-label" for="form1Example3">
                    &nbsp; Remember Me
                  </label>
                </div>
                 { /** captcha code */}
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onChange}
                  className="mb-3"
                />
                 { /** captcha code end*/}
                <div class="pt-1 mb-4">
                  <button
                    class="btn btn-warning w-100 fs-5 border-0 text-light"
                    style={{ background: "#ed721d" }}
                    type="button"
                    onClick={checkLogin}
                  >
                    Login
                  </button>
                </div>
                <p class="small mb-3 pb-lg-2">
                  <a class="text-muted" href="#!">
                    Forgot password?
                  </a>
                </p>
                <p className="text-center">
                  Don't have an account?{" "}
                  <a href="#!" class="link-warning">
                    Register here
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </>
    /** design code end */
  );
};
/** Main function closing */


/** export page */
export default Login;
