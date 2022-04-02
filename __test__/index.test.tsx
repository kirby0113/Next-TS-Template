import { render } from "@testing-library/react";
import Home from "../pages/index";

describe("導入テスト", () => {
  it("表示される？", () => {
    const { debug } = render(<Home />);
    debug();
  });
});
