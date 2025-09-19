import Body from "../Body";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import MockData from "../mocks/MockResCardListData.json";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MockData);
        }
    })
})

it("should search res list for burger text input", async () => {

    await act( async() =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const resCard = screen.getAllByTestId("resCard");

    expect(resCard.length).toBe(8);

    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("search-input");

    fireEvent.change(searchInput, {target: {value: "burger"}});

    fireEvent.click(searchBtn);

    const resCardAfterSearch = screen.getAllByTestId("resCard");

    expect(resCardAfterSearch.length).toBe(2);
})

it("should filter top rated restaurants when filter button is clicked", async () => {

    await act( async() =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const resCard = screen.getAllByTestId("resCard");

    expect(resCard.length).toBe(8);

    const topRatedBtn = screen.getByRole("button", {name: "Top Rated"});

    fireEvent.click(topRatedBtn);

    const resCardAfterFilter = screen.getAllByTestId("resCard");

    expect(resCardAfterFilter.length).toBe(3);

    // const 

});