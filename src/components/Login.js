import React, { useState } from "react";
import Navbar from "./Navbar";
// import validation from "./validation";
import './Login.css'

function Login() {
    const[fullName, setFullName] =useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    });

    // const[getGlobal, setGlobal] = useState(false);

    const[disable, setDisable] = useState({
        fname: true,
        lname: true,
        email: true,
        phone: true
    });

    const inputEvent =(event)=>{
        console.log(event.target.value)
        console.log(event.target.name)
        
        // setName(event.target.value);
        const {value, name} =event.target;

        setFullName( (preValue) =>{
            console.log(preValue)
        setDisable(event.target.value === '')
            return{
                 ...preValue,
                 [name]: value,
            };
        });
    };

    // useEffect(()=>{
    //     formValidationCheck();
    // },[])

    // const formValidationCheck=()=>{
    //     setFormValidation({
    //         fname:validation(fullName.fname),
    //         lname:validation(fullName.lname),
    //         email:validation(fullName.email),
    //         phone:validation(fullName.phone)
    //     })
    // }


    const onSubmits =(event)=>{
        event.preventDefault();
        alert('form submitted');
        // setGlobal(true);
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
        <input type="text" placeholder="Enter your Name"  name="fname"onChange={inputEvent} value={fullName.fname}  />
        {/* {getGlobal && getFormValidation.fname} */}
        <br></br>

        <input type="text" placeholder="Enter your Last name" name="lname"onChange={inputEvent}value={fullName.lname}  />
        {/* {getGlobal && getFormValidation.lname} */}
        <br></br>

        <input  type="email" placeholder="Enter your email id" name="email"onChange={inputEvent}value={fullName.email} />
        {/* {getGlobal && getFormValidation.email} */}
        <br></br>

        <input type="number"  placeholder="Enter your phone number"  name="phone" onChange={inputEvent} value={fullName.phone} />
        {/* {getGlobal && getFormValidation.phone} */}
        <br></br>
        <button className="btn" type="submit" disabled={disable}>Click Me</button>
        </div>
        </form>
        </div>
    )
}

export default Login