import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup({dispatch}) {
    const[username, setUsername]=useState('')
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')

    let navigate = useNavigate()
    useEffect(function(){
        let uname=localStorage.getItem("username")

        console.log('signuuuuup effect')
        console.log(uname)
       if (uname !== null ){
            navigate('/')
        }else{
            navigate('/signup')
        }
    },[])


    function fetchData(){

        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        console.log('fetch data')
        console.log(username)
        console.log(email,password)
        fetch("https://vjbanna21.pythonanywhere.com/mainwork/UserSignUpView/",
           
        
        { method :'POST',
            headers:headers,
             body : JSON.stringify({ username:username , email:email , password:password })

           }
        )
        .then((data) => data.json())
        // .then((data) =>  dispatch({type : "Signin"}))
        .then((data) =>  {
            if (data.success){
                console.log('data.userPk signup')
                console.log(data.userPk)

                navigate('/signin')
            }else{
                navigate('/error')
            }
        })

        .catch ((err) => console.log(err))  
    
        
        
    }


    return (
        <> 
         <main class="form-signin w-25  m-auto">

        
      
          <img class="mb-4" src="/signuphere.png" alt="" width="100" height="100"/>
      
          <h1 class="h3 mb-3 fw-normal">Register here</h1>
    <hr />
      
      
      
            <div class="form-floating">
              <input type="text" class="form-control my-2" id="floatingInput" placeholder="username" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
              <label for="floatingInput">USERNAME</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control my-2" id="floatingPassword" placeholder="Password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
              <label for="floatingPassword">Password</label>
            </div>
        

            <div class="form-floating">
              <input type="email" class="form-control my-2" id="floatingEmail" placeholder="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
              <label for="floatingPassword">email</label>
            </div>
      
            <button class="btn btn-primary w-100 py-2" type="submit" value="Sign up" onClick={fetchData}>Sign Up </button>
           <button class="my-3"> <a href="/signin"> Sign In Here</a></button>
          

      
            <p class="mt-5 mb-3 text-body-secondary">© 2024</p>
        
        </main>
            {/* <h1>Signup Page</h1> */}
            {/* <hr /> */}
            {/* <br /> */}
            {/* <div className="form"> */}
                
                    {/* Username: <input type="text" name="username" value={username}  onChange= {e =>setUsername(e.target.value)}  /><br /><br /> */}
                    {/* Email : <input type="email" name="email"  value={email} onChange= {e =>setEmail(e.target.value)}/><br /><br /> */}
                    {/* Password : <input type="password" name="password" value={password} onChange= {e =>setPassword(e.target.value)} /><br /><br /> */}
                    {/* Confirm Password : <input type="password" name="confirmPassword" /><br /><br /> */}
                    {/* <button onClick={fetchData}>Sign Up</button> */}
             {/* <Link to = '/signin'  >     <button onClick={fetchData} > Sign Up</button></Link> */}

                
        
        </>
    )
}

export default Signup
