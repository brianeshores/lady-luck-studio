import React from "react";
import { useShopify } from "../hooks";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
import styled from "styled-components";

export default (props) => {
  const { products, fetchProduct } = useShopify();

  function handleClick(e, product_id) {
    e.preventDefault();
    const id = product_id;
    fetchProduct(id).then((res) => {
      props.history.push(`/Product/${res.id}`);
    });
  }

  return (
    <ProductList
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="Product-wrapper"
    >
      {products &&
        products.map((product, i) => {
          const image = product.images[0];
          return (
            <div className="Product" key={product.id + i}>
              {image ? (
                <img
                  src={image.src}
                  alt={`${product.title} product shot`}
                  onClick={(e) => handleClick(e, product.id)}
                />
              ) : null}
              <div>
                <h4 className="Product__title">{product.title}</h4>
                <p className="Product__price">${product.variants[0].price}</p>
              </div>
              <button
                className="Product__buy button"
                onClick={(e) => handleClick(e, product.id)}
              >
                View Details
              </button>
            </div>
          );
        })}
    </ProductList>
  );
};

const ProductList = styled(motion.div)`
  margin: 2em;
  text-align: center;
`;
