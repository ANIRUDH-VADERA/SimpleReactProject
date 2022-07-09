import React,{useState}  from 'react'
import "./FirstPage.css"
import Button from "../../Components/Button/Button.js"
import Input from "../../Components/Input/Input.js"
import firstPageImage from "../../images/firstPageImage.png"
import Links from "../../Components/Links/Links.js"
import footerImageUp from "../../images/footerImageUp.png"
import footerImageDown from "../../images/footerImageDown.png"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from "axios";

const url = "http://localhost:5000/posts";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function FirstPage() {
  
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");

    const { vertical, horizontal} = {vertical: "top" , horizontal: "right"};

    var [isHover,setIsHover] = useState(false);
    var [name,setName]  = useState("");
    var [email,setEmail]  = useState("");

    const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

        setOpen1(false);
    };

    const handleClose2 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
            setOpen2(false);
    };

    const handleClose3 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
            setOpen3(false);
    };

    const handleClose4 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
            setOpen4(false);
    };


    const emailValidation = () => {
        const regex1 = /^[A-Za-z0-9._%+-]+@gmail.com$/;
        const regex2 = /^[A-Za-z0-9._%+-]+@rediffmail.com$/;
        const regex3 = /^[A-Za-z0-9._%+-]+@yahoo.com$/;
        if (regex1.test(email) || regex2.test(email) || regex3.test(email) ) {
          return true;
        }
        return false;
    };

    const handleClick = (event) =>{ 
        event.preventDefault();
        if (name === "" || email === "") {
            setOpen3(true);
        } else if (!emailValidation(email)) {
            setOpen2(true);
        }
        else{
            axios.post(url, {
                username : name,
                email : email
            })
            .then(function (response) {
                if(response.status === 200){
                    setOpen1(true);
                }
            })
            .catch((error)=>{
                setErrorMessage("Duplicate User");
                setOpen4(true);
            })
            setName("");
            setEmail("");
        }
    }

    const handleChange1 = (event)=>{
        setName(event.target.value);
    };  

    const handleChange2 = (event)=>{
        setEmail(event.target.value);
    };

    return (
        <>
        <Snackbar className="snackBar" open={open1} autoHideDuration={2000} onClose={handleClose1} anchorOrigin={{ vertical, horizontal }}>
        <Alert onClose={handleClose1} severity="success" sx={{ width: '100%' }}>
          Data Successfully Registered!
        </Alert>
      </Snackbar>
      <Snackbar className="snackBar" open={open4} autoHideDuration={2000} onClose={handleClose4} anchorOrigin={{ vertical, horizontal }}>
        <Alert onClose={handleClose4} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
      <Snackbar className="snackBar" open={open2} autoHideDuration={2000} onClose={handleClose2} anchorOrigin={{ vertical, horizontal }}>
        <Alert onClose={handleClose2} severity="error" sx={{ width: '100%' }}>
          Please Enter a Valid Email!
        </Alert>
      </Snackbar>
      <Snackbar className="snackBar" open={open3} autoHideDuration={2000} onClose={handleClose3} anchorOrigin={{ vertical, horizontal }}>
        <Alert onClose={handleClose3} severity="error" sx={{ width: '100%' }}>
            Please Fill All The Fields!
        </Alert>
      </Snackbar>
    <div className="firstPage">        
      <div className="up">
            <div className="left">
                <h1>
                    Vehicle Maintenance From The Comfort of Your Home
                </h1>
                <p>
                    Open Auto Soothes the hassle of maintaining your vehicle and helps you deal with unexpected repairs worry-free.
                </p>
                <div className="form">
                    <form>
                        <Input 
                            val = {name}
                            setNull = {setName}
                            change = {handleChange1}
                            name = "username"
                            placeholder = "Enter Your Name"
                        />
                        <Input 
                            val = {email}
                            setNull = {setEmail}
                            change = {handleChange2}
                            name = "email"
                            placeholder = "Enter Your Email"
                        />
                        <button
                            onClick = {handleClick}
                            type = "submit"
                        >Submit</button>
                    </form>
                </div>
            </div>
            <div className="right">
                <img src={firstPageImage} alt="" />
            </div>
        </div>
        <div className="down">
            <a href="#SecondPage">
                <div onMouseEnter={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}}>
                    {isHover ? <img src={footerImageDown} alt=""></img> :<img src={footerImageUp} alt=""></img> }
                </div>
            </a>
            <div className="links">
                <Links />
            </div>
        </div>
    </div>
    </>
  )
}

export default FirstPage