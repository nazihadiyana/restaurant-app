import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import { BiRocket } from "react-icons/bi";
import { IoLeafOutline } from "react-icons/io5";
import { Carousel, CarouselItem, Button } from "react-bootstrap";

const Header = () => {
  const layar = {
    height: "400px",
    backgroundColor: "red",
  };
  return (
    <>
      <div className="container-fluid p-0">
        <div className="position-relative">
          <div className="position-absolute tx-center">
            <span style={{fontSize: "4rem"}} className="m-0 text-center">We Made Delicious Food</span>
            <button
              className="btn btn-danger my-1 fw-bold w-25 my-3"
              onClick={() => (window.location.href = "/menu")}
            >
              Menu
            </button>
          </div>
          <Carousel>
            <CarouselItem
              interval={4000}
              style={{ objectFit: "cover", zIndex: "-1" }}
            >
              <img
                src={require("./images/blog-1.jpg")}
                alt="about"
                className="w-100"
              />
            </CarouselItem>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Header;
