import { getProductById } from "./Menu.js";

export async function addToCart(id) {
  const product = await getProductById(id);
  const result = app.store.cart.filter(function (item) {
    return item.product.id == id;
  });

  if (result.length == 1) {
    app.store.cart = app.store.cart.map(function (item) {
      if (item.product.id == id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
  } else {
    app.store.cart = [...app.store.cart, { product, quantity: 1 }];
  }
}

export function removeFromCart(id) {
  app.store.cart = app.store.cart.filter(function (item) {
    return item.product.id != id;
  });
}
