import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

jest.mock('../../utils/useOnlineStatus')

describe("Header Component Test Suite", () => {
    
    it("Shoulder render Header component with a login button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore} >
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginElement = screen.getByRole("button", { name: "Login" });

        expect(loginElement).toBeInTheDocument();
    });

    it("Should render Cart with 0 items", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore} >
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const cartItems = screen.getByText("Cart - (0 items)");

        expect(cartItems).toBeInTheDocument();
    });

    it("Should render Header component with Cart", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore} >
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const cartElement = screen.getByText(/Cart/);

        expect(cartElement).toBeInTheDocument();
    })

    it("Should change Login button to Logout on click", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore} >
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginElement = screen.getByRole("button", { name: "Login" });

        fireEvent.click(loginElement);

        const logoutElement = screen.getByRole("button", { name: "Logout" });

        expect(logoutElement).toBeInTheDocument();
    });
    
    it("Should change Logout button to Login on click", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore} >
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginElement = screen.getByRole("button", { name: "Login" });

        fireEvent.click(loginElement);

        const logoutElement = screen.getByRole("button", { name: "Logout" });

        fireEvent.click(logoutElement);

        const loginElementAgain = screen.getByRole("button", { name: "Login" });

        expect(loginElementAgain).toBeInTheDocument();
    });

    it("shows online when hook returns true", () => {

        useOnlineStatus.mockReturnValue(true); // fake value
        
        render(
            <BrowserRouter>
                <Provider store={appStore} >
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        expect(screen.getByText("🟢 Online")).toBeInTheDocument();
  });

    it("shows offline when hook returns false", () => {

        useOnlineStatus.mockReturnValue(false); // fake value

        render(
            <BrowserRouter>
                <Provider store={appStore} >
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        expect(screen.getByText("🔴 Offline")).toBeInTheDocument()
    });
});