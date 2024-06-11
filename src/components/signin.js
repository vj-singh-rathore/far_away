// import { type } from "@testing-library/user-event/dist/type"

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin({ dispatch }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  useEffect(function () {
    let uname = localStorage.getItem("username");
    let userPk = localStorage.getItem("userPk");

    console.log('signin useEffect');
    console.log(uname);
    console.log(userPk);
    if (uname !== null) {
      navigate("/");
    } else {
      navigate("/signin");
    }
  }, []);
  function postData() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    fetch("http://127.0.0.1:8000/mainwork/UserSignInView/",{

      
        method: "POST",
        headers: headers,
        body: JSON.stringify({ username: username, password: password }),
      }
    )
      .then((data) => data.json())
      // .then((data) =>  dispatch({type : "dataReady"}))
      .then((data) => {
        let userPk = data.userPk

        console.log("data.success");
        console.log(data.success);
        // localStorage.setItem("password", password)
        if (data.success) {
            localStorage.setItem("userPk", userPk)

            localStorage.setItem("username", username);
          // localStorage.setItem("password", password)

          navigate("/");
        } else {
          navigate("/signin");
        }
      })
      .catch((err) => console.log(err));
  }
  // let un = localStorage.getItem("username")
  // let pswd = localStorage.getItem("password")
  return (
    <>
      <main class="form-signin w-25  m-auto">
        
          <img
            class="mb-4"
            src="loginlogo.png"
            alt=""
            width="72"
            height="57"
          />
          {/* <a href="signin"><button>Sign In Now!!!</button></a> */}
          {/* <a href="register_page"><button>Register here</button></a> */}

          <h1 class="h3 mb-3 fw-normal">Sign In</h1>

          <hr />

          <div class="form-floating">
            <input
              type="text"
              class="form-control my-2"
              id="floatingInput"
              placeholder="username"
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label for="floatingInput">USERNAME</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control my-2"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="floatingPassword">PASSWORD</label>
          </div>

          <button
            class="btn btn-primary w-100 py-2 my-2"
            type="submit"
            value="Sign In"
            onClick={postData}
          >
            Sign In{" "}
          </button>
          <button class='my-3' onClick={() => navigate("/signup")}> Register here</button>


          <p class="mt-5 mb-3 text-body-secondary">© 2024</p>

      </main>

      {/* <div className="SignupForm"> */}

      {/* Username: <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} /><br /><br/> */}
      {/* Password : <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} /><br/> <br/> */}
      {/* <input type="submit" value="Sign in" onClick={() => dispatch({type: "main"}) }/> */}
      {/* <input type="submit" value="Sign up" onClick={() => dispatch({type: "Signup"}) }/> */}
      {/* <button onClick={postData} > Sign In</button>         */}

      {/* <Link to = '/mainpage'  >     <button onClick={postData} > Sign In</button></Link> */}
      {/* <button onClick={()=> dispatch({type: "Signup"})} >Sign Up</button> */}
      {/* <Link to = '/signup'  >  <button >Sign Up</button></Link> */}
      {/* </div> */}
    </>
  );
}

export default Signin;
