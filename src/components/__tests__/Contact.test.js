import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';

describe("Contact Us Page Test Suite", () => {

    // beforeAll(() => {
    //     console.log("Before All");
    // });

    // beforeEach(() => {
    //     console.log("Before Each");
    // });

    // afterAll(() => {
    //     console.log("After All");
    // });

    // afterEach(() => {
    //     console.log("After Each");
    // });

    test("Should render correctly", () => {
        render(<Contact />);

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();

    });

    test("Should have a button", () => {
        render(<Contact />);

        const button = screen.getByRole("button");

        // expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent("Submit");

    });

    test("Should have 3 input fields", () => {
        render(<Contact />);

        const inputElements = screen.getAllByRole("textbox");

        expect(inputElements.length).toBe(3);

    });

});