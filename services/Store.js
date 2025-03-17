const Store = {
  menu: null,
  cart: [],
};

const proxiedStore = new Proxy(Store, {
  set(target, key, value) {
    target[key] = value;
    const eventName = `app${key}change`;
    window.dispatchEvent(new Event(eventName));
    return true;
  },
});

export default proxiedStore;
