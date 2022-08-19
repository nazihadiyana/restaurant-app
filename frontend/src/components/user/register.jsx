import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import request from "../../helpers/requests";
import * as yup from "yup";
import { useFormik } from "formik";
import { Input } from "reactstrap";

const Register = () => {
  const [confirmPassword, setConfirmPassword] = useState("");

  const validationRegister = yup.object().shape({
    user_name: yup.string().required(),
    user_email: yup.string().email().required(),
    user_address: yup.string().required(),
    user_password: yup.string().required(),
    user_phone: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      user_address: "",
      user_password: "",
      user_phone: "",
    },
    validationSchema: validationRegister,
    onSubmit: () => handleRegister(),
  });

  async function handleRegister() {
    await request
      .post(`/api/user`, formik.values)
      .then(() => alert("Register Successfully"))
      .catch((err) => alert(err));
    
    window.location.href = "/";
  }

  function checkCP() {
    if (confirmPassword === "") {
      return false;
    } else if (confirmPassword === formik.values.user_password) {
      return false;
    } else {
      return true;
    }
  }

  function lastCheckRegister() {
    if (confirmPassword !== formik.values.user_password) {
      alert("confirm password not match");
    } else {
      formik.handleSubmit();
    }
  }

  return (
    <>
      <div className="container-fluid my-5">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row row-cols-auto">
            <div className="col-6 d-none d-lg-block col-lg-6 d-flex justify-content-center align-items-center">
              <img src={require('../home/images/nachos-img.png')} alt="ilustration-register" className="w-75 end-100" />
            </div>
            <div className="my-5 my-lg-0 col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <div className="line-up mb-1">
                <span style={{ background: "#fff", padding: "0 10px" }}>
                  Register
                </span>
              </div>

              <div className="d-flex flex-column text-center">
                <form onSubmit={lastCheckRegister}>
                  <Input
                    className="form-control my-1"
                    type="text"
                    placeholder="Username"
                    name="user_name"
                    value={formik.values.user_name}
                    onChange={formik.handleChange}
                    invalid={
                      formik.touched.user_name && Boolean(formik.errors.user_name)
                    }
                  />
                  <Input
                    className="form-control my-1"
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    value={formik.values.user_email}
                    onChange={formik.handleChange}
                    invalid={
                      formik.touched.user_email && Boolean(formik.errors.user_email)
                    }
                  />
                  <Input
                    className="form-control my-1"
                    type="password"
                    placeholder="Password"
                    name="user_password"
                    value={formik.values.user_password}
                    onChange={formik.handleChange}
                    invalid={
                      formik.touched.user_password && Boolean(formik.errors.user_password)
                    }
                  />
                  <Input
                    className="form-control my-1"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    invalid={checkCP()}
                  />
                  <Input
                    className="form-control my-1"
                    type="text"
                    placeholder="Address"
                    name="user_address"
                    value={formik.values.user_address}
                    onChange={formik.handleChange}
                    invalid={
                      formik.touched.user_address && Boolean(formik.errors.user_address)
                    }
                  />
                  <Input
                    className="form-control my-1"
                    type="text"
                    placeholder="Phone"
                    name="user_phone"
                    value={formik.values.user_phone}
                    onChange={formik.handleChange}
                    invalid={
                      formik.touched.user_phone && Boolean(formik.errors.user_phone)
                    }
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                </form>
                <button
                  className="btn btn-primary my-1 fw-bold"
                  onClick={lastCheckRegister}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
