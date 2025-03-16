const Router = {
  init: function () {
    document.querySelectorAll("a.navlink").forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        let route = link.getAttribute("href");
        Router.go(route);
      });
    });
    // Event handler for URL changes
    window.addEventListener("popstate", function (event) {
      Router.go(event.state.route, false);
    });

    // Check the initial URL
    Router.go(location.pathname);
  },
  go: function (route, addToHistory = true) {
    if (addToHistory) {
      history.pushState({ route }, null, route);
    }

    let pageElement = null;

    switch (route) {
      case "/":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Menu";
        break;
      case "/order":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Your Order";
        break;
      default:
        if (route.startsWith("/product/")) {
          pageElement = document.createElement("h1");
          pageElement.textContent = "Details";
          const paramId = route.substring(route.lastIndexOf("/") + 1);
          pageElement.dataset.id = paramId;
        }
    }

    if (pageElement) {
      const mainElement = document.querySelector("main");
      mainElement.innerHTML = "";
      mainElement.appendChild(pageElement);
      window.screenX = 0;
      window.screenY = 0;
    }
  },
};

export default Router;
