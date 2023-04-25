import { useState } from "react";
import { Navigate } from "react-router-dom";

function Login() {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ redirect, setRedirect ] = useState(false);

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    } else {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />
  }
 
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now !</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

            <form className="card-body"
              onSubmit={login}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Business name</span>
                </label>
                <input type="text" value={username} onChange={ev => setUsername(ev.target.value)} placeholder="Business name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" value={password} onChange={ev => setPassword(ev.target.value)} placeholder="password" className="input input-bordered" />
                {/* <label className="label">
                  <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default Login;