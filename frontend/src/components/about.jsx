import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/css/styles.css";
import { Carousel, CarouselItem, Button } from "react-bootstrap";

const About = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="position-relative">
          <div className="position-absolute tx-center">
            <div className="bg-dark d-flex flex-column p-3" style={{borderRadius: '10px'}}>
              <span
                style={{ fontSize: "32px", fontWeight: "bold", color: "red" }}
              >
                PICK EAT RESTO is a fresh Mexican restaurant.
              </span>
              <span style={{ fontSize: "32px", fontWeight: "bold" }}>
                We source sustainable.
              </span>
            </div>
          </div>
          <Carousel>
            <CarouselItem
              interval={4000}
              style={{ objectFit: "cover", zIndex: "-1" }}
            >
              <img
                src={require("../components/home/images/about-img.jpg")}
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

export default About;
