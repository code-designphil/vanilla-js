const Router = {
  init: function () {
    document.querySelectorAll("a.navlink").forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        let route = link.getAttribute("href");
        Router.go(route);
      });
    });
    // Check the initial URL
    Router.go(location.pathname);
  },
  go: function (route, addToHistory = true) {
    if (addToHistory) {
      history.pushState({ route }, null, route);
    }
  },
};

export default Router;
