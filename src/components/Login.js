import React, { useState } from "react";
import Navbar from "./Navbar";
import './Login.css'

function Login() {
    const[fullName, setFullName] =useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    });


    const inputEvent =(event)=>{
        console.log(event.target.value)
        console.log(event.target.name)
        
        // setName(event.target.value);
        const {value, name} =event.target;

        setFullName( (preValue) =>{
            console.log(preValue)

            return{
                 ...preValue,
                 [name]: value,
            };
        });
    };
    const onSubmits =(event)=>{
        event.preventDefault();
        alert('form submitted')
    }

  return(
        <div className="main_div">
        <form onSubmit={onSubmits}>
        <Navbar/>
        <div className="form">
        <h1>{fullName.fname} {fullName.lname} </h1>
        <p>{fullName.email}</p>
        <p>{fullName.phone}</p>
        <br></br>
        <br></br>
        <input
         type="text" 
        placeholder="Enter your Name" 
        name="fname"
        onChange={inputEvent} 
        value={fullName.fname} 
        />
        <br></br>

        <input 
        type="text" 
        placeholder="Enter your Last name" 
        name="lname"
        onChange={inputEvent}
        value={fullName.lname} 
        autoComplete='off'
        />
        <br></br>

        <input 
        type="email" 
        placeholder="Enter your email id" 
        name="email"
        onChange={inputEvent}
        value={fullName.email} 
        autoComplete='off'
        />
        <br></br>

        <input 
        type="number" 
        placeholder="Enter your phone number" 
        name="phone"
        onChange={inputEvent}
        value={fullName.phone} 
        />
        <br></br>
        <button className="btn" type="submit">Click Me</button>
        </div>
        </form>
        </div>
    )
}

export default Login