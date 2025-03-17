import Store from "./services/Store.js";
import API from "./services/API.js";
import Router from "./services/Router.js";
import { loadData } from "./services/Menu.js";

import CartItem from "./components/CartItem.js";
import DetailsPage from "./components/DetailsPage.js";
import MenuPage from "./components/MenuPage.js";
import OrderPage from "./components/OrderPage.js";
import ProductItem from "./components/ProductItem.js";

window.app = {};
app.store = Store;
app.router = Router;

// It's better to wait for this event because the elements might not be loaded yet even though
// app.js has the defer attribute
window.addEventListener("DOMContentLoaded", function () {
  loadData();
  app.router.init();
});

window.addEventListener("appcartchange", function (event) {
  const badge = document.getElementById("badge");
  const quantity = app.store.cart.reduce(function (acc, product) {
    return acc + product.quantity;
  }, 0);

  badge.textContent = quantity;
  badge.hidden = quantity == 0;
});
