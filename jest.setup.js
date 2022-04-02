// Polyfill "window.fetch" used in the React component.
import "whatwg-fetch";

import { server } from "./mocks/server";
import { handlers, init } from "./mocks/handlers/handlers";
import { cleanup } from "@testing-library/react";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  cleanup();
  server.resetHandlers();
  init();
});

afterAll(() => {
  server.close();
});

HTMLCanvasElement.prototype.getContext = () => {
  // return whatever getContext has to return
};
