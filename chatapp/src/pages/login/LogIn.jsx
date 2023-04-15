import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Please enter your username.")
        .min(6, "Username is too short.")
        .max(28, "Username is too long."),
      password: Yup.string()
        .required("Please enter your password.")
        .min(6, "Password is too short.")
        .max(28, "Password is too long."),
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });
  return (
    <>
      <div className="container m-auto mt-20 rounded-xl">
        <h1 className="text-7xl text-center font-bold p-10 pb-8 text-white">
          Login
        </h1>
        <p className="text-gray-400 text-center text-xl">
          Need an account? <a className="text-purple-500">Create Account</a>
        </p>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center"
        >
          <input
            className="m-5 w-2/3 rounded-md h-14 bg-gray-600 text-2xl pl-3 text-white focus:shadow-purple focus:outline-none"
            placeholder="Username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <input
            className="m-5 w-2/3 rounded-md h-14 bg-gray-600 text-2xl pl-3 text-white focus:shadow-purple focus:outline-none"
            placeholder="Password"
            name="password"
            type='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <button
            type="submit"
            className="m-5 w-1/3 rounded-md h-14 bg-purple-600 text-2xl text-white hover:bg-purple-700"
          >
            Log In
          </button>
        </form>
      </div>
    </>
  );
};

export default LogIn;
