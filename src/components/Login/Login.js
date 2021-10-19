import React, { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useHistory, useLocation } from "react-router-dom";
const Login = () => {
    const {signInWithEmailPassword, signInUsingGoogle, setIsLoading} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/'

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailPassword(email, password);
    }

    const handleSignInWithGoogle = (e) => {
        signInUsingGoogle()
        .then(result=>{
            history.push(redirect_url);
        }).catch((error) => {
            console.log(error.message);  
          }).finally(()=>setIsLoading(false))
    }
  return (
    <>
      <div class="vh-100" style={{ backgroundColor: "#508bfc" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                class="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div class="card-body p-5 text-center">
                  <h3 class="mb-5">Sign in</h3>
                    <form onSubmit={handleLogin}>
                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      class="form-control form-control-lg"
                      placeholder="Enter your email"
                      onBlur={handleEmailChange}
                      required
                      
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      class="form-control form-control-lg"
                      placeholder="Enter your password"
                      onBlur={handlePasswordChange}
                      required
                    />
                  </div>
                  <div class="d-grid">
                    <button
                      class="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>
                    <p class="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <Link to="/register" class="link-danger">
                        Register
                      </Link>
                    </p>
                  </div>

                  <hr class="my-4" />
                  <div class="d-grid">
                    <button
                      class="btn btn-lg btn-block btn-primary"
                      style={{ backgroundColor: "#dd4b39" }}
                      onClick={handleSignInWithGoogle}
                    >
                      <BsGoogle /> Sign in with google
                    </button>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
