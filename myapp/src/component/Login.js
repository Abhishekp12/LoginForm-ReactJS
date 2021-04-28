import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",  
    phone: "",
    website: ""
  });

  const { name,  email, password } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
console.log(e.target.value );
  };

  const onSubmit = async e => {
    e.preventDefault();
   
  };

 
  return (
  
    <div className="container py-4 my-4  border border-primary bg-light text-dark ">
  <h2>Login Form</h2>

  <form   onSubmit={e => onSubmit(e) }  className="was-validated  ">
    <div className="form-group">
      <input type="text"   id="uname" placeholder="Enter username" name="name"
              value={name}
              onChange={ onInputChange}required />
      <div className="valid-feedback">Correct.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
     <div className="form-group">
      <input type="email"  id="email" placeholder="Enter email" name="email" 
              value={email}
              onChange={e => onInputChange(e)} required />
      <div className="valid-feedback">Correct.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
    <div className="form-group">
      <input type="password"  id="pwd" placeholder="Enter password" name="password"
              value={password}
              onChange={e => onInputChange(e)}required  /> 
      <div className="valid-feedback">Correct.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
    
     
 
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>



</div>

  
  );
};

export default Login;
