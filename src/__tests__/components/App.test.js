import React from "react";
import { shallow } from "../../../config/enzymeConfig";

import App from "../../components/App";

describe("<App />", () => {
  test("renders without crashing", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
