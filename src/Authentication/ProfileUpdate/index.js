import { useFormik } from "formik";
import React from "react";
import CustomButton from "../../Shared/CustomButton";
import { TextField } from "@mui/material";
import axios from "axios";

const ProfileUpdate = () => {
  const initialValues = {
    name: "",
    email: "",
    dob: "",
    city: "",
    state: "",
    country: "",
    gender: "",
    phone: "",
  };
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: initialValues,
    onSubmit: () => {
      const reqbody = {
        id: localStorage.getItem("user_id"),
        name: values.name,
        email: values.email,
        dob: values.dob,
        city: values.city,
        state: values.state,
        country: values.country,
        gender: values.gender,
        phone: values.phone,
      };

      axios
        .put(`https://api-eduvila.onrender.com/profile`, reqbody)
        .then((res) => {
          console.log(res);
        });
    },
  });
  return (
    <form onSubmit={handleSubmit} className="p-5 grid grid-cols-2 gap-5 ">
      <TextField
        type="text"
        placeholder="Name"
        id="name"
        name="name"
        label="Name"
        onChange={handleChange}
        value={values.name}
      />
      <TextField
        type="text"
        placeholder="Email"
        id="email"
        name="email"
        label="Email"
        onChange={handleChange}
        value={values.email}
      />
      <TextField
        type="date"
        placeholder="dob"
        id="dob"
        name="dob"
        label="dob"
        onChange={handleChange}
        value={values.dob}
      />
      <TextField
        type="text"
        placeholder="city"
        id="city"
        name="city"
        label="city"
        onChange={handleChange}
        value={values.city}
      />
      <TextField
        type="text"
        placeholder="state"
        id="state"
        name="state"
        label="state"
        onChange={handleChange}
        value={values.state}
      />
      <TextField
        type="text"
        placeholder="country"
        id="country"
        name="country"
        label="country"
        onChange={handleChange}
        value={values.country}
      />
      <TextField
        type="text"
        placeholder="gender"
        id="gender"
        name="gender"
        label="gender"
        onChange={handleChange}
        value={values.gender}
      />
      <TextField
        type="number"
        placeholder="phone"
        id="phone"
        name="phone"
        label="phone"
        onChange={handleChange}
        value={values.phone}
      />

      <CustomButton type="submit" className="!bg-red-500">
        Update
      </CustomButton>
    </form>
  );
};

export default ProfileUpdate;
