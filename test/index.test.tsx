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

//example queryType
describe("QueryType", () => {
  test("it finds a button by its role", () => {
    const { getByRole } = render(<Index />);

    const buttonElement = getByRole("button", { name: "Click me" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("it finds an input by its label text", () => {
    const { getByLabelText } = render(<Index />);

    const inputElement = getByLabelText("Username:");
    expect(inputElement).toBeInTheDocument();
  });

  test("it finds an input by its placeholder text", () => {
    const { getByPlaceholderText } = render(<Index />);

    const inputElement = getByPlaceholderText("Enter your email");
    expect(inputElement).toBeInTheDocument();
  });

  test("it finds an element by its displayed text", () => {
    const { getByText } = render(<Index />);

    const element = getByText("Hello, World!");
    expect(element).toBeInTheDocument();
  });

  test("it finds an input by its displayed value", () => {
    const { getByDisplayValue } = render(<Index />);

    const inputElement = getByDisplayValue("Initial value");
    expect(inputElement).toBeInTheDocument();
  });

  test("it finds an image by its alt text", () => {
    const { getByAltText } = render(<Index />);

    const imageElement = getByAltText("A beautiful landscape");
    expect(imageElement).toBeInTheDocument();
  });

  test("it finds an element by its title", () => {
    const { getByTitle } = render(<Index />);

    const element = getByTitle("Important Note");
    expect(element).toBeInTheDocument();
  });

  test("it finds an element by its data-testid attribute", () => {
    const { getByTestId } = render(<Index />);

    const element = getByTestId("special-element");
    expect(element).toBeInTheDocument();
  });

  //jsdom matcher
  test("it checks if an element has a specific attribute", () => {
    const { getByRole } = render(<Index />);
    const linkElement = getByRole("link");
    expect(linkElement).toHaveAttribute("href", "https://www.example.com");
    expect(linkElement).toHaveClass("active");
  });
});
