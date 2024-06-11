// import React, { useState, useEffect,useReducer } from 'react';
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Signin from "./components/signin";
// import Signup from './components/signup';
import Mainpage from "./components/mainpage";
import Signup from "./components/signup";
import Error from "./components/error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Main from "./components/Main";
// import { renderIntoDocument } from "react-dom/test-utils";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const intitalState = {
//   status: "signin",
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "dataReady":
//       return {
//         ...state,
//         status: "ready",
//         itemArr: action.payload,
//       };
//     case "Signup":
//       return {
//         ...state,
//         status: "signup",
//       };
//     case "Signin":
//       return {
//         ...state,
//         status: "signin",
//       };

//     case "readFailed":
//       return {
//         ...state,
//         status: "error",
//       };
//     case "main":
//       return {
//         ...state,
//         status: "mainpage",
//       };

//     case "dataFailed":
//       return {
//         ...state,
//         status: "errorPage",
//       };
//     default:
//       return {
//         ...state,
//         status: "trydefault",
//       };
//   }
// }

function App() {


// console.log(localStorage.getItem(username)
// ,localStorage.getItem(password)

  
  // const [{ status }, dispatch] = useReducer(reducer, intitalState);

  // return (
  //   <>

  //       {status === "signin" &&<Signin dispatch={dispatch} />}
  //       {status === "ready" && <Mainpage dispatch={dispatch} />}
  //       {/* {status === "mainpage" && <Mainpage dispatch={dispatch}  />} */}
  //       {status === "signup" && <Signup dispatch={dispatch} />}
  //       {status === "errorPage" && <Error />}

  //   </>
  // );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Mainpage />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
