import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../../components/TextField";
import { AccountContext } from "../../components/AccountContext";

const LogIn = () => {
  const { setUser } = useContext(AccountContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  return (
    <>
      <div className="container m-auto mt-20 rounded-xl">
        <h1 className="text-7xl text-center font-bold p-10 pb-8 text-white">
          Login
        </h1>
        <p>{error}</p>
        <p className="text-gray-400 text-center text-xl">
          Need an account?{" "}
          <Link to={"/signup"}>
            <a className="text-purple-500">Create Account</a>
          </Link>
        </p>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={Yup.object({
            username: Yup.string()
              .required("Please enter your username.")
              .min(6, "Username is too short.")
              .max(28, "Username is too long."),
            password: Yup.string()
              .required("Please enter your password.")
              .min(6, "Password is too short.")
              .max(28, "Password is too long."),
          })}
          onSubmit={(values, actions) => {
            const vals = { ...values };
            actions.resetForm();
            fetch("http://localhost:4000/auth/login", {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(vals),
            })
              .catch((err) => {
                return;
              })
              .then((res) => {
                if (!res || !res.ok || res.status >= 400) {
                  return;
                }
                return res.json();
              })
              .then((data) => {
                if (!data) return;
                setUser({ ...data });
                if (data.status) {
                  setError(data.status);
                } else if (data.loggedIn) {
                  navigate("/home");
                }
              });
          }}
        >
          <Form className="flex flex-col items-center">
            <TextField name="username" placeholder="Username" />
            <TextField name="password" placeholder="Password" type="password" />
            <button
              type="submit"
              className="m-5 w-1/3 rounded-md h-14 bg-purple-600 text-2xl text-white hover:bg-purple-700"
            >
              Log In
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default LogIn;
