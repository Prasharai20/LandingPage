import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const reqBody = {
      name: name,
      email: email,
      password: password,
      confirm_password: conPassword,
    };

    axios
      .post("https://api-eduvila.onrender.com/register", reqBody)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <TextField
          type="text"
          label="Name"
          placeholder="Enter Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          type="email"
          label="Email"
          placeholder="Enter Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <TextField
          size="small"
          type="password"
          label="Password"
          placeholder="Enter Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <TextField
          size="small"
          type="password"
          label="Confirm Password"
          placeholder="Enter Password"
          value={conPassword}
          onChange={(event) => setConPassword(event.target.value)}
        />

        <Button type="submit" variant="contained">
          Submit
        </Button>
        <Link to="/login">Already registered</Link>
      </form>
    </div>
  );
};

export default SignUp;
