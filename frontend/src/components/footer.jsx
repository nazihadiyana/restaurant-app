import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsBoxArrowUpRight,
} from "react-icons/bs";
import "../components/css/styles.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="container bg-light">
          <footer className="py-5 px-1">
            <div className="row row-cols-auto">
              <div className="col-12 col-lg-4 mb-4">
                <div>
                  <h3>PICK EAT RESTO</h3>
                </div>
                <div>
                  <p>Mexican Food</p>
                </div>
                <ul className="list-group list-group-horizontal bg-light">
                  <li className="list-group-item borderless bg-light">
                    <a href="/" className="text-black">
                      <BsFacebook />
                    </a>
                  </li>
                  <li className="list-group-item borderless bg-light">
                    <a href="/" className="text-black">
                      <BsInstagram />
                    </a>
                  </li>
                  <li className="list-group-item borderless bg-light">
                    <a href="/" className="text-black">
                      <BsTwitter />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-4 mb-4 px-lg-4">
                <div>
                  <h3>Open Hour</h3>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <span>Mon - Sat</span>
                    <span style={{ fontWeight: "bold" }}>
                      11:00 AM - 10:00 PM
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Sunday</span>
                    <span style={{ fontWeight: "bold" }}>
                      9:00 AM - 10:00 PM
                    </span>
                  </div>
                  <div>
                    <br />
                    <span>Location:</span>
                    <br />
                    <span>Sabang - Merauke</span>
                    <br />
                    <span>
                      Indonesia{" "}
                      <a
                        href="https://www.google.com/maps/place/Indonesia/@-2.3202937,99.4542584,4z/data=!3m1!4b1!4m5!3m4!1s0x2c4c07d7496404b7:0xe37b4de71badf485!8m2!3d-0.789275!4d113.921327"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BsBoxArrowUpRight size="0.8em" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 mb-4">
                <div>
                  <h3>Newsletter</h3>
                </div>
                <div className="mb-1">
                  <span>Subscribe for Our Updates!</span>
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Enter your email address"
                  />
                  <button className="btn btn-outline-secondary">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <span>(c) 2022 PICK EAT RESTO, Inc. All rights reserved.</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
