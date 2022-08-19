import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import { Button, Form, FormGroup } from "react-bootstrap";
import request from "../../helpers/requests";

const FormControlAddUpdate = ({
  type,
  setFormVisible,
  formEditable,
  fetchData,
}) => {
  const [menuName, setMenuName] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === "Add") {
      await request
        .post("/menus", {
          menuname: menuName,
          price: price,
          imgurl: imgUrl,
        })
        .then(() => fetchData())
        .catch((err) => console.log(err));
    } else {
      await request
        .put(
          `/menus/${formEditable.id}`,
          {
            menuname: menuName,
            price: price,
            imgurl: imgUrl,
          },
          {
            params: formEditable.id,
          }
        )
        .then(() => fetchData())
        .catch((err) => console.log(err));
    }
    setFormVisible(false);
  };

  useEffect(() => {
    if (type === "Update") {
      setMenuName(formEditable.food_name);
      setPrice(formEditable.food_price);
      setDesc(formEditable.food_desc);
      setImgUrl(formEditable.food_src);
    }
  }, [type, formEditable]);

  return (
    <>
      <Form>
        <FormGroup>
          <div className="input-group py-2">
            <div className="input-group-text w-25 justify-content-end">
              Menu Name :
            </div>
            <input
              value={menuName}
              placeholder="Menu Name"
              onChange={(e) => setMenuName(e.target.value)}
            />
          </div>
          <div className="input-group py-2">
            <div className="input-group-text w-25 justify-content-end">
              Price :
            </div>
            <input
              value={price}
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          </div>
          <div className="input-group py-2">
            <div className="input-group-text w-25 justify-content-end">
              Description :
            </div>
            <input
              value={desc}
              placeholder="Description"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="input-group py-2">
            <div className="input-group-text w-25 justify-content-end">
              URL :
            </div>
            <input
              value={imgUrl}
              placeholder="Image URL"
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </div>
        </FormGroup>
        <div className="d-flex justify-content-center">
          <Button color="primary" className="me-1" onClick={handleSubmit}>
            {type}
          </Button>
          <Button className="ms-1" onClick={() => setFormVisible(false)}>
            Cancel
          </Button>
        </div>
      </Form>
    </>
  );
};

const FormControlDelete = ({
  type,
  setFormVisible,
  formEditable,
  fetchData,
}) => {
  const [menus, setMenus] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    await request
      .delete(
        `/api/food/delete/${formEditable.food_name}`,
        formEditable.food_name,
        {
          params: formEditable.food_name,
        }
      )
      .then(() => fetchData())
      .catch((err) => console.log(err));
    setFormVisible(false);
  };

  useEffect(() => {
    if (type === "Delete") {
      setMenus(formEditable.food_name);
    }
  }, [type, formEditable]);

  return (
    <>
      <Form>
        <div className="p-2">
          Delete <strong style={{ color: "black" }}>" {menus} "</strong> ?
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Button color="danger" onClick={handleDelete}>
            {type}
          </Button>
          &nbsp;&nbsp;
          <Button onClick={() => setFormVisible(false)}>Cancel</Button>
        </div>
      </Form>
    </>
  );
};

export { FormControlAddUpdate, FormControlDelete };
