import { writable, get } from "svelte/store";
// import { Auth0Client } from "@auth0/auth0-spa-js";

export const createStore = <T>(storeValue: T) => {
  const store = writable(storeValue);
  const { subscribe, set, update } = store;
  return {
    subscribe,
    set: value => set(value),
    get: (val: keyof T) => get(store)[val] ?? get(store),
    update: value => update(store => ({ ...store, ...value }))
  };
};

export const isLoading = createStore(false);

// export const auth0 = new Auth0Client({
//   domain: "dev-26d1iysdpicz4hee.us.auth0.com",
//   clientId: "iiv5wNhMdVy1azKEkjBRljKXbcNTSuz4",
//   authorizationParams: {
//     redirect_uri: "http://localhost:5173/dashboard"
//   }
// });
