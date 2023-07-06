import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: initialValues,
    onSubmit: () => {
      const reqBody = {
        email: values.email,
        password: values.password,
      };
      axios
        .post("https://api-eduvila.onrender.com/login", reqBody)
        .then((response) => {
          console.log(response.data[0].token);
          if (response.data[0].token) {
            localStorage.setItem("token", response.data[0].token);
            localStorage.setItem("user_id", response.data[0].id);
            navigate("/");
            // window.location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div className="flex flex-col">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5"
      >
        <TextField
          type="email"
          name="email"
          id="email"
          label="Email"
          placeholder="Enter Email"
          value={values.email}
          onChange={handleChange}
        />
        <TextField
          type="password"
          label="Password"
          id="password"
          name="password"
          placeholder="Enter Password"
          value={values.password}
          onChange={handleChange}
        />

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
