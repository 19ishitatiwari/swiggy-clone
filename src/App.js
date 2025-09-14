import React, { lazy, Suspense, use, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import GroceryMart from './components/GroceryMart';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';

const GroceryMart = lazy(() => import('./components/GroceryMart'));

const AppLayout = () => {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        setUserName("Ishita Tiwari");
    }, []);
    
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{
                loggedInUser: userName,
                setUserName: setUserName
            }}> 
                <div className='app-layout'>
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading...</h1>}> <GroceryMart /> </Suspense>,
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />,
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    },
])
// Render to the root
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);