import React, { useEffect, useState } from "react";
import {
  fetchSelectedProduct,
  fetchSpecificCategory,
} from "../../services/productServices";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import "./productdetails.scss";
import SpecificCategory from "../specificcategory";

const ProductDetails = () => {
  let params = new URLSearchParams(document.location.search);
  // let productId = parseInt(params.get("id"));
  // let productCategory = params.get("category");
  const [productItem, setProductItem] = useState({});
  const [category, setCategory] = useState([]);
  const [productId, setProductId] = useState(parseInt(params.get("id")));

  useEffect(() => {
    setProductId(parseInt(params.get("id")));
  }, [params.get("id")]);
  console.log("Param ID", params.get("id"));

  useEffect(() => {
    fetchSelectedProduct(productId).then((data) => {
      setProductItem(data);
      console.log("Data", data);

      fetchSpecificCategory(data?.category).then((data) => {
        setCategory(data);
      });
    });
    console.log("Produc ID use Effect", productId);
  }, [productId]);

  console.log("porduct id outside", productId);
  if (productItem.title) {
    return (
      <div className="productDetails">
        <Card className="productDetailsCard">
          <Card className="productImage">
            <CardImg src={productItem.image} alt={productItem.title} />
          </Card>
          <Card className="productDescription">
            <CardBody>
              <CardTitle>{productItem.title}</CardTitle>
              <CardText>{productItem.description}</CardText>
              <CardText>$ {productItem.price}</CardText>
            </CardBody>
          </Card>
        </Card>
        {category.length > 0 && (
          <SpecificCategory productId={productId} category={category} />
        )}
      </div>
    );
  } else {
    return <span> Loading ... </span>;
  }
};
export default ProductDetails;
