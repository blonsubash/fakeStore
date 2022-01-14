import React, { useEffect, useState } from "react";
// import { Redirect } from "react-router-dom";
import { getLocalStorage } from "../../utils/storageUtils";
import { fetchAllProductLists } from "../../services/productServices";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import "./dashboard.scss";
import { MainLogo, userLogo } from "../../assets/images";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [productItems, setProductItems] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!getLocalStorage("username")) {
      history.replace("/");
    } else {
      setUsername(getLocalStorage("username"));
    }
  }, [getLocalStorage("username")]);

  useEffect(() => {
    fetchAllProductLists().then((data) => {
      setProductItems(data);
    });
  }, []);
  console.log(productItems);

  return (
    <div className="dashboard">
      <Navbar expand="md" navbar className="navbar">
        <NavbarBrand>
          <img src={MainLogo} />
        </NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="me-auto w-100" navbar>
            <NavItem>
              <NavLink to="#" />
              Add New Product
            </NavItem>
            <NavItem className="welcomeUser">Welcome, {username}</NavItem>
          </Nav>
        </Collapse>
        <img style={{ marginLeft: "0px" }} src={userLogo} />
      </Navbar>
      <div className="productItemDiv">
        {productItems.map((items) => (
          <Card
            className="productItemCard"
            key={items.id}
            onClick={() =>
              history.push(
                `/productdetails?id=${items.id}&category=${items.category}`
              )
            }
          >
            <CardImg src={items.image} alt={items.title} />

            <CardBody>
              <CardTitle>
                {items.title.length > 17
                  ? `${items.title.substring(0, 17)}...`
                  : items.title}
              </CardTitle>
              <CardText> ${items.price}</CardText>
            </CardBody>
          </Card>
        ))}{" "}
      </div>
    </div>
  );
};
export default Dashboard;
