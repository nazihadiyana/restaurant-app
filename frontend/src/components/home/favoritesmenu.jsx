import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import request from "../../helpers/requests";
import Image from "react-bootstrap/Image";

const FavoriteMenu = () => {
  const [foodList, setFoodList] = useState([]);
  const MAX_RANDOM = 4;

  const fetchData = async () => {
    await request
      .get("/api/food")
      .then(({ data }) => {
        let result = [];
        for (let i = 0; i < MAX_RANDOM; i++) {
          result.push(data[Math.floor(Math.random() * data.length)]);
        }
        setFoodList(result);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="container my-lg-0">
          <div className="row row-cols-auto my-lg-5 px-5 justify-content-center justify-content-lg-start align-items-start">
            <div className="col-12">
              <h2 className="text-nowrap">Favorites Menu</h2>
            </div>
            <div className="col-12 my-4 my-lg-0">
              <div className="row row-cols-auto text-center">
                {foodList.map((item, index) => (
                  <div key={index} className="col-6 col-lg-3 my-2">
                    <div className="card h-100">
                      <div
                        className="card-body d-flex flex-column justify-content-end"
                        style={{ width: "100%", height: "100%" }}
                      >
                        <div className="d-flex justify-content-center">
                          <Image
                            srcSet={require(`./images/${item.food_src}`)}
                            alt={item.food_name}
                            className="card-img-top"
                            style={{ maxWidth: "180px" }}
                          />
                        </div>
                        <div className="my-2">
                          <h5>{item.food_name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteMenu;
