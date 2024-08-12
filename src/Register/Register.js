import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const Register = ()=>{

const [formData,setformdata] = useState({
name:"",
mailid:"",
password:"",
phno:"",
address:""
});


const handleChange=(e)=>{
    const{name,value}=e.target;
    setformdata({
...formData,
[name]:value,
    });
};

const Regsubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/reg', formData);
      console.log('User registered:', response.data);
      alert('Registration successful');
    } catch (error) {
      console.error('There was an error registering the user!', error);
      alert('Registration failed');
    }
  };


    return(

        <div>

<form onSubmit={Regsubmit}> 
    <label>User Name</label>
    <input type="text" 
    name="name" value={formData.name} onChange={handleChange} required
    /><br></br>
    <label>Email</label>
    <input type="text" name="mailid" value={formData.mailid} onChange={handleChange} required></input><br></br>
    <label>Password</label>
    <input type="text" name="password" value={formData.password} onChange={handleChange} required></input><br></br>
    <label>Phone Number</label>
    <input type="text" name="phno" value={formData.phno} onChange={handleChange}></input><br></br>
    <label>Address</label>
    <input type="text" name="address" value={formData.address} onChange={handleChange}></input><br></br>
    <button type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>

    )

}
export default Register