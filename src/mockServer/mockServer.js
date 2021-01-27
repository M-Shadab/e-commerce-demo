import MockAdapter from "axios-mock-adapter";
import { db } from "./db";

export function mockUpClient(client) {
  const mock = new MockAdapter(client);
  const baseURL = `${client.defaults.baseURL}`;

  // URL Path
  mock.onGet(`${baseURL}/search`, { params: { query: "" } }).reply(() => {
    const data = { product: "smartphone", data: db["smartphone"] };
    return [200, data];
  });

  mock.onGet(`${baseURL}/search`).reply((config) => {
    const { query, id, product } = config.params;
    let data = [];
    if (query) {
      data = { product: "shoes", data: db["shoes"] };
    } else {
      const productType = db[product];
      const index = productType.findIndex((item) => item.asin === id);
      data = productType[index];
    }
    return [200, data];
  });
}
