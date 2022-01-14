import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { fetchSpecificCategory } from "../../services/productServices";
import "./category.scss";

function SpecificCategory(props) {
  const { productId, category } = props;
  const history = useHistory();

  console.log("History", history);

  return (
    <div className="mainDiv">
      <h2> Similar Products</h2>
      <div className="similarProducts">
        {category
          .filter((item) => item.id !== productId)
          .map((products) => (
            <Card
              key={products.id}
              onClick={() => history.push(`/productdetails?id=${products.id}`)}
            >
              <CardImg src={products.image} alt={products.title} />
              <CardBody>
                <CardTitle>
                  {products.title.length > 17
                    ? `${products.title.substring(0, 17)}...`
                    : products.title}
                </CardTitle>
                <CardText>$ {products.price}</CardText>
              </CardBody>
            </Card>
          ))}
      </div>
    </div>
  );
}
export default SpecificCategory;
