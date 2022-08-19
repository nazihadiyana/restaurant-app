import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import request from "../../helpers/requests";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalTitle,
} from "react-bootstrap";
import { FormControlAddUpdate, FormControlDelete } from "./form";

const AListMenu = () => {
  const [listMenu, setListMenu] = useState([]);
  const [type, setType] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [formEditable, setFormEditable] = useState([]);

  const handleAdd = () => {
    setType("Add");
    setFormVisible(!formVisible);
  };

  const handleUpdate = (data) => {
    setType("Update");
    setFormVisible(!formVisible);
    setFormEditable(data);
  };

  const handleDelete = (data) => {
    setType("Delete");
    setFormVisible(!formVisible);
    setFormEditable(data);
  };

  const fetchData = async () => {
    await request
      .get("/api/food")
      .then(({ data }) => {
        setListMenu(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // const interval = setInterval(() => {
    //   fetchData();
    // }, 500)
    // return () => clearInterval(interval)
    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid my-5">
        <div className="container">
          <div className="row row-cols-auto">
            <div className="col-12 d-flex justify-content-center">
              <h1>List Menu</h1>
            </div>
            <div className="col-12 d-flex justify-content-center my-2">
              <Button onClick={handleAdd}>Add Menu</Button>
            </div>
            <div className="col-12 d-flex justify-content-center my-2">
              <div className="col-6">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Menu Name</th>
                      <th>Price</th>
                      <th>desc</th>
                      <th>URL</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listMenu.map((item, index) => (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{item.food_name}</td>
                        <td>{item.food_price}</td>
                        <td>{item.food_desc}</td>
                        <td>{item.food_src}</td>
                        <td>
                          <Button onClick={() => handleUpdate(item)}>
                            Update
                          </Button>
                          <Button onClick={() => handleDelete(item)} disabled>
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>

          <Modal show={formVisible} onHide={() => setFormVisible(!formVisible)}>
            <ModalHeader>
              <ModalTitle>{`${type} Menu`}</ModalTitle>
            </ModalHeader>
            <ModalBody>
              {type === "Delete" ? (
                <FormControlDelete
                  type={type}
                  formEditable={formEditable}
                  setFormVisible={setFormVisible}
                  fetchData={fetchData}
                />
              ) : (
                <FormControlAddUpdate
                  type={type}
                  formEditable={formEditable}
                  setFormVisible={setFormVisible}
                  fetchData={fetchData}
                />
              )}
            </ModalBody>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default AListMenu;
