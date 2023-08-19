import { fireEvent, render } from "@testing-library/react";
import Index from "../pages/index";
import React, { Dispatch, SetStateAction } from "react";
// import { addFunc } from "@/utils/test";

describe("should test pages/index", () => {
  it("should render count 2 number true", () => {
    const { getByRole, getByLabelText, getByTestId } = render(<Index />);
    const inputAElement = getByLabelText("AName");
    const inputBElement = getByLabelText("BName");
    fireEvent.change(inputAElement, { target: { value: "5" } });
    fireEvent.change(inputBElement, { target: { value: "4" } });
    fireEvent.click(getByRole("button", { name: "Add 2 number" }));
    expect(getByTestId("total")).toHaveTextContent("result:9");
  });
});

/**
 * Mock addFunc
 */

// jest.mock("../utils/test.ts", () => ({
//   addFunc: jest.fn()
// }));

// it("should render total 2 number is 10", () => {
//   (addFunc as jest.Mock).mockReturnValue(10);
//   const { getByRole, getByLabelText, getByTestId } = render(<Index />);
//   const inputAElement = getByLabelText("AName");
//   const inputBElement = getByLabelText("BName");
//   fireEvent.change(inputAElement, { target: { value: "5" } });
//   fireEvent.change(inputBElement, { target: { value: "4" } });
//   fireEvent.click(getByRole("button", { name: "Add 2 number" }));
//   expect(addFunc).toBeCalledWith(5, 4);
//   expect(getByTestId("total")).toHaveTextContent("result:10");
// });

it("should render count state true", () => {
  const { getByRole, getByTestId } = render(<Index />);
  fireEvent.click(getByRole("button", { name: "Increase" }));
  expect(getByTestId("count")).toHaveTextContent("count: 1");
});

it("should render count state true when mock useState", () => {
  jest
    .spyOn(React, "useState")
    .mockImplementationOnce(() => [0, jest.fn()])
    .mockImplementationOnce(() => [0, jest.fn()])
    .mockImplementationOnce(() => [0, jest.fn()])
    .mockImplementationOnce(() => [2, jest.fn]);
  const { getByTestId } = render(<Index />);
  expect(getByTestId("count")).toHaveTextContent("count: 2");
});
