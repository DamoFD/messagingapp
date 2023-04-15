import React from "react";
import { Link } from 'react-router-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from '../../components/TextField'

const SignUp = () => {
  return (
    <>
      <div className="container m-auto mt-20 rounded-xl">
        <h1 className="text-7xl text-center font-bold p-10 pb-8 text-white">
          Sign Up
        </h1>
        <p className="text-gray-400 text-center text-xl">
          Have an account? <Link to={'/login'}><a className="text-purple-500">Log In</a></Link>
        </p>
        <Formik 
          initialValues= {{
            username: "",
            password: "",
          }}
          validationSchema= {Yup.object({
            username: Yup.string()
              .required("Please enter your username.")
              .min(6, "Username is too short.")
              .max(28, "Username is too long."),
            password: Yup.string()
              .required("Please enter your password.")
              .min(6, "Password is too short.")
              .max(28, "Password is too long."),
          })}
          onSubmit= {(values, actions) => {
            alert(JSON.stringify(values, null, 2));
            actions.resetForm();
          }}
        >
            <Form
            className="flex flex-col items-center"
          >
            <TextField name='username' placeholder='Username' />
            <TextField name='password' placeholder='Password' type='password' />
            <TextField name='confirmPassword' placeholder='Confirm Password' type='password' />
            <button
              type="submit"
              className="m-5 w-1/3 rounded-md h-14 bg-purple-600 text-2xl text-white hover:bg-purple-700"
            >
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default SignUp;