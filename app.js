import Store from "./services/Store.js";
import API from "./services/API.js";
import Router from "./services/Router.js";
import { loadData } from "./services/Menu.js";

window.app = {};
app.store = Store;
app.router = Router;

// It's better to wait for this event because the elements might not be loaded yet even though
// app.js has the defer attribute
window.addEventListener("DOMContentLoaded", function () {
  loadData();
  app.router.init();
});
