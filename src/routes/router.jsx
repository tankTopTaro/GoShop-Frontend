import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from '../layouts/AuthLayout'
import GuestLayout from '../layouts/GuestLayout'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
import { Home } from "../views/shop/Home";
import NotFound from "../views/NotFound";
import Shop from "../views/shop/Shop";
import Contact from "../views/shop/Contact";
import Cart from "../views/shop/Cart";
import Wishlist from "../views/shop/Wishlist";
import ProductDetail from "../views/shop/products/ProductDetail";
import SearchResult from "../views/shop/products/SearchResult";
import CategoryResult from "../views/shop/products/CategoryResult";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/home' />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/products/:pid',
                element: <ProductDetail />
            },
            {
                path: '/products/search/:query',
                element: <SearchResult />
            },
            {
                path: 'products/category/:category',
                element: <CategoryResult />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/wishlist',
                element: <Wishlist />
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/home' />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/products/:pid',
                element: <ProductDetail />
            },
            {
                path: '/products/search/:query',
                element: <SearchResult />
            },
            {
                path: '/products/category/:category',
                element: <CategoryResult />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;
