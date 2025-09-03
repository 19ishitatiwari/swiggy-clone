import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import GroceryMart from './components/GroceryMart';

const GroceryMart = lazy(() => import('./components/GroceryMart'));

const AppLayout = () => (
    <div className='app-layout'>
        <Header />
        <Outlet />
    </div>
)

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
            }
        ]
    },
])
// Render to the root
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);