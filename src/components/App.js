import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Products from "./Products";
import Cart from "./Cart";
import Home from "./Home";
import ProductView from "./ProductView";
import { useShopify } from "../hooks";
import Nav from "./Nav.js";

export default (props) => {
  const {
    createShop,
    createCheckout,
    fetchProducts,
    fetchCollection,
    shopDetails,
  } = useShopify();

  useEffect(() => {
    createShop();
    fetchProducts();
    createCheckout();
    fetchCollection();
  }, []);

  return (
    <Router>
      <div id="App">
        <header className="App__header">
          <div className="App__title"></div>
        </header>
        <Nav></Nav>
        <Route exact path="/" render={() => <Redirect to="/Home" />} />
        <Route path="/Home" component={Home} />
        <Route path="/Products" component={Products} />
        <Route path="/Product/:productId" component={ProductView} />
        <Route path="/" component={Cart} />
      </div>
    </Router>
  );
};
