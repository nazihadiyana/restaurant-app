import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/css/styles.css";

const Contact = () => {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row row-cols-auto">
            {/* <div className="col-6 d-none d-lg-block col-lg-6 d-flex justify-content-center align-items-center">
              <img
                src="https://img.freepik.com/free-vector/tiny-people-testing-quality-assurance-software-isolated-flat-vector-illustration-cartoon-character-fixing-bugs-hardware-device-application-test-it-service-concept_74855-10172.jpg?w=826&t=st=1659183468~exp=1659184068~hmac=072de3a00a95872be19e4b154f333ceba4c665b2af0824d9c0ec96e3c6cacb5c"
                alt="ilustration-register"
                className="w-100 end-100"
              />
            </div> */}
            <div className="my-5 my-lg-0 col-12 col-lg-12 d-flex flex-column justify-content-center align-items-center">
              <div className="mb-2">
                <h2>HOW CAN WE HELP?</h2>
              </div>

              {/* <div className="line-up mb-1">
                <span style={{ background: "#fff", padding: "0 10px" }}>
                  Log In
                </span>
              </div> */}

              <div className="d-flex flex-column text-center">
                <input
                  className="form-control my-1"
                  type="text"
                  name=""
                  id=""
                  placeholder="Name"
                />
                <input
                  className="form-control my-1"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                />
                <textarea className="form-control my-1" name="" id="" cols="30" rows="5" placeholder="Message"></textarea>

                <button className="btn btn-primary my-1 fw-bold">SEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
