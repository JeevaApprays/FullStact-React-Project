import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
const Login=()=>{

const [loginData,uselogindata] = useState({
    email:'',
    password:''
})

const handlechange = (e) =>{
    const {name,value} = e.target;
uselogindata({
...loginData,
  [name]:value,
})
}

const changemaded = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', loginData);
      console.log('User logged in:', response.data);
     // localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      console.error('There was an error logging in!', error);
      alert('Login failed');
    }
  };

const navi =useNavigate;
const register=()=>{
    navi("/Register")
}
    return (
<div>
<form onSubmit={changemaded}>
<lable>Email</lable>
<input type="text" name="email"  value={loginData.email} onChange={handlechange} required/><br></br>
<lable>Password</lable>
<input type="text" name="password" value={loginData.password} onChange={handlechange} required/><br></br>
<input type="submit" value="login" />
<input type="submit" value="register" onClick={register}/>
</form>
</div>


    )
}
export default Login