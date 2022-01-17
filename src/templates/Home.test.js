import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";
import Home from "./Home";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("TodoList", () => {
  it("clears input", () => {
    const wrapper = mount(<Home />);
    wrapper.find("button").simulate("click");
    expect(wrapper.find("#selected-w")).toHaveLength(0);
  });
});

test("render p element", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText("Story Title")).toBeInTheDocument();
});
