
import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom"

//  these are individual test cases
test("Should load contact us component", () => {
  render(<Contact />);
  
  const heading = screen.getAllByRole("heading");
  
  // Assertion
  expect(heading).toBeInTheDocument();
});

text("Should load button inside Contact component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  // Assertion
  expect(button).toBeInTheDocument();
});

text("Should load input name inside Contact component", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("name");

  // Assertion
  expect(inputName).toBeInTheDocument();
});

text("Should load 2 input boxes on the Contact component", () => {
  render(<Contact />);

  // Querying
  const inputBoxes = screen.getAllByRole("textbox");

  //console.log(inputBoxes.length);

  // Assertion

  expect(inputBoxes.length).toBe(2);
});

// these are grouped test cases
describe("Contact Us Page Test Case", () => {

  // we can write "it", instead of "test", it works fine
  it("Should load contact us component", () => {
    render(<Contact />);
    
    const heading = screen.getAllByRole("heading");
    
    // Assertion
    expect(heading).toBeInTheDocument();
  });
  
  it("Should load button inside Contact component", () => {
    render(<Contact />);
  
    const button = screen.getByRole("button");
  
    // Assertion
    expect(button).toBeInTheDocument();
  });
  
  it("Should load input name inside Contact component", () => {
    render(<Contact />);
  
    const inputName = screen.getByPlaceholderText("name");
  
    // Assertion
    expect(inputName).toBeInTheDocument();
  });
  
  it("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);
  
    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
  
    //console.log(inputBoxes.length);
  
    // Assertion
  
    expect(inputBoxes.length).toBe(2);
  });
});

describe("Contact Us Page Test Case", () => {
  beforeAll(() => {
    console.log("Before All");
  });

  beforeEach(() => {
    console.log("Before Each");
  });

  afterAll(() => {
    console.log("After All");
  });

  afterEach(() => {
    console.log("After Each");
  });

  it("Should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //console.log(inputBoxes.length);

    // Assertion

    expect(inputBoxes.length).toBe(2);
  });
});