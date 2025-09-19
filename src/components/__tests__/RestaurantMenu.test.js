import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import '@testing-library/jest-dom';
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import MockData from "../mocks/MockResMenuData";
import Header from "../Header";
import { Provider } from "react-redux";
import cartReducer from "../../utils/cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import appStore from "../../utils/appStore";
import { useDispatch } from "react-redux";
import { clearItems } from "../../utils/cartSlice";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MockData);
        }
    })
})

beforeEach(() => {
    appStore.dispatch(clearItems());
});

it("should render Header and RestaurantMenu component", async () => {

    await act( async() =>
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header />
                    <RestaurantMenu />
                </BrowserRouter>
            </Provider>
        )
    );

    const accordion = screen.getByText("Korean Series Burger (3)");

    fireEvent.click(accordion);

    const foodItems = screen.getAllByTestId("foodItem");

    expect(foodItems.length).toBe(3);

    const Cartheader = screen.getByText("Cart - (0 items)");

    expect(Cartheader).toBeInTheDocument();

});

it("should add items to cart", async () => {

    await act( async() =>
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header />
                    <RestaurantMenu />
                </BrowserRouter>
            </Provider>
        )
    );

    const accordion = screen.getByText("Korean Series Burger (3)");

    fireEvent.click(accordion);

    const addBtn = screen.getAllByRole("button", {name: "Add +"});

    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);

    const Cartheader = screen.getByText("Cart - (2 items)");

    expect(Cartheader).toBeInTheDocument();

});

it("should remove items from cart", async () => {
 
    await act( async() =>
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header />
                    <RestaurantMenu />
                </BrowserRouter>
            </Provider>
        )
    );

    const accordion = screen.getByText("Korean Series Burger (3)");

    fireEvent.click(accordion);

    const addBtn = screen.getAllByRole("button", {name: "Add +"});
console.log(addBtn.length); // check number of buttons

    const addRemoveBtn = screen.getAllByTestId("addButton");

    console.log(123,addRemoveBtn.length); // check number of buttons
    const ItemList = screen.getAllByTestId("foodItem");
    console.log("itemlist", ItemList.length); // check number of items
    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);

    const removeBtn = screen.getAllByRole("button", {name: "Remove"});

    console.log(removeBtn);
    fireEvent.click(removeBtn[0]);
    const Cartheader = screen.getByText("Cart - (1 items)");

    expect(Cartheader).toBeInTheDocument();
});

it("should not add items to cart", async () => {

    await act( async() =>
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </BrowserRouter>
            </Provider>
        )
    );

    const accordion = screen.getByText("Korean Series Burger (3)");
    fireEvent.click(accordion);

    const addBtn = screen.getAllByRole("button", {name: "Add +"});

    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);

    const foodItems = screen.getAllByTestId("foodItem");
    expect(foodItems.length).toBe(5);

});

it("should empty cart on clear cart button click", async () => {

    await act( async() => {
        return render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </BrowserRouter>
            </Provider>
        )
    });

    const accordion = screen.getByText("Korean Series Burger (3)");

    fireEvent.click(accordion);

    const addBtn = screen.getAllByRole("button", {name: "Add +"});

    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);

    const ClearCartBtn = screen.getByRole("button", {name: "Clear Cart"});

    fireEvent.click(ClearCartBtn);

    const foodItems = screen.getAllByTestId("foodItem");

    expect(foodItems.length).toBe(3);

});