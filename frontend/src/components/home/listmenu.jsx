import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import request from "../../helpers/requests";
import { decodeToken } from "react-jwt";
import Image from "react-bootstrap/Image";

const Posts = ({ listFood, loading }) => {
  if (loading)
    return (
      <>
        <h3>Loading...</h3>
      </>
    );

  const isStorage = sessionStorage.getItem("token");

  function returnAdd(item) {
    alert(`Menu Add ${item.food_name}`);
  }

  function returnLogin() {
    window.location.href = "/login";
  }

  return (
    <div className="container p-0">
      <ul className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 p-0">
        {listFood.map((item, index) => (
          <li key={index} className="list-unstyled col mb-2">
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
                  <span>Rp.{item.food_price}</span>
                </div>
                {isStorage ? (
                  <>
                    <div className="d-flex my-2">
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => returnAdd(item)}
                      >
                        Add
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="d-flex my-2">
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => returnLogin()}
                      >
                        Login
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Paging = ({ numberCall, paginate, currentPage }) => {
  const [arrNumberPage, setArrNumberPage] = useState([]);

  useEffect(() => {
    let tempNumberPage = [...numberCall];

    if (numberCall.length > 11) {
      if (currentPage >= 1 && currentPage <= 6) {
        tempNumberPage = [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          "...",
          numberCall.length - 2,
          numberCall.length - 1,
          numberCall.length,
        ];
      } else if (currentPage >= 7 && currentPage <= numberCall.length - 6) {
        let numberOne = numberCall.slice(currentPage - 4, currentPage);
        let numberTwo = numberCall.slice(currentPage, currentPage + 3);
        tempNumberPage = [
          1,
          "... ",
          ...numberOne,
          ...numberTwo,
          " ...",
          numberCall.length,
        ];
      } else if (currentPage >= numberCall.length - 5) {
        let numberThree = numberCall.slice(
          numberCall.length - 7,
          numberCall.length
        );
        tempNumberPage = [1, 2, 3, "...", ...numberThree];
      } else {
        tempNumberPage = [...numberCall];
      }
    }

    setArrNumberPage(tempNumberPage);
  }, [paginate]);

  return (
    <>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <a
              href="#"
              className="page-link"
              onClick={() =>
                paginate(currentPage === 1 ? currentPage : currentPage - 1)
              }
              style={{ fontSize: "10px" }}
            >
              &laquo;
            </a>
          </li>
          {arrNumberPage.map((number) => (
            <li
              key={number}
              className={`page-item ${currentPage === number ? "active" : ""}`}
            >
              <a
                href="#"
                className={`page-link ${isNaN(number) ? "disabled" : ""}`}
                onClick={() => paginate(number)}
                style={{ fontSize: "10px" }}
              >
                {number}
              </a>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === numberCall.length ? "disabled" : ""
            }`}
          >
            <a
              href="#"
              className="page-link"
              onClick={() =>
                paginate(
                  currentPage === numberCall.length
                    ? currentPage
                    : currentPage + 1
                )
              }
              style={{ fontSize: "10px" }}
            >
              &raquo;
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

const ListMenu = () => {
  const isStorage = sessionStorage.getItem("token");
  const dataStore = decodeToken(isStorage);
  const [listFood, setListFood] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPage] = useState(8);

  // async function handleAdd(item) {
  //   const { menuname, price } = item;
  //   const urlpath = window.location.pathname;

  //   await request
  //     .post("/order/add/", {
  //       user_name: dataStore.user_name,
  //       food_name: food_name,
  //       food_price: food_price,
  //       quantity: 1,
  //     })
  //     .then(() => fetchData())
  //     .catch((err) => console.log(err));
  //   if (urlpath !== "/menu") {
  //     // alert(`${menuname} has been added to Order List`);
  //     // window.location.reload();
  //   } else {
  //     alert(`${menuname} has been added to Order List`);
  //   }
  // }

  // const handleAdd = (item) => {
  //   loading.push({ ...item, quantity: 1 });
  //   // let result = [...loading, { ...item, quantity: 1 }];
  //   localStorage.setItem("order", JSON.stringify(loading));
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (JSON.parse(window.localStorage.getItem("order")) === null) {
  //       setLoading([]);
  //     } else {
  //       setLoading(JSON.parse(window.localStorage.getItem("order")));
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [loading]);
  const fetchData = async () => {
    await request
      .get("/api/food")
      .then(({ data }) => {
        setListFood(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // const interval = setInterval(() => {
    //   fetchData();
    // }, 2000);
    // return () => clearInterval(interval);
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

  // currentPage
  const indexLastBerry = currentPage * postPage;
  const indexFirstBerry = indexLastBerry - postPage;
  const currentBerry = listFood.slice(indexFirstBerry, indexLastBerry);

  // paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // count number
  const numberCall = [];
  for (let i = 1; i <= Math.ceil(listFood.length / postPage); i++) {
    numberCall.push(i);
  }

  return (
    <>
      <div className="container-fluid my-5">
        <div className="container">
          <div style={{ height: "auto" }}>
            <Paging
              numberCall={numberCall}
              paginate={paginate}
              currentPage={currentPage}
            />
            <Posts listFood={currentBerry} loading={loading} />
            <Paging
              numberCall={numberCall}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListMenu;
