import React from "react";
// import "../../../assets/frontend/css/tailwind.min.css";
import logo from '../../../assets/frontend/images/logo.png'
import c16 from '../../../assets/frontend/images/client/16.jpg'
import '../../../assets/frontend/libs/feather-icons/feather.min.js'
import '../../../assets/frontend/js/app'
import { ShoppingCart, Heart } from 'react-flaticons'
import '../../../assets/frontend/js/plugins.init'
import '../../../assets/frontend/js/app'
import { useState } from "react";
import { NavLink } from "react-router";

function Header() {
    const [userDropdown, setUserDropDown] = useState('hidden')
    const handleUserDropdown = (e) => {
        e.stopPropagation()
        console.log(userDropdown);

        (userDropdown == 'hidden') ? setUserDropDown('block') : setUserDropDown('hidden')
    }

    return (
        <>
            <div className="tagline bg-slate-900">
                <div className="container relative">
                    <div className="grid grid-cols-1">
                        <div className="text-center">
                            <h6 className="text-white font-medium">Refer a friend & get $50 in credits each 🎉</h6>
                        </div>
                    </div>
                </div>
                {/* <!--end container--> */}
            </div>
            <nav id="topnav" className="defaultscroll is-sticky tagline-height">
                <div className="container relative flex justify-between">
                    {/* <!-- Logo container--> */}
                    <a className="logo" href="index.html">
                        <div>
                            <img
                                src={logo}
                                className="h-[22px] hidden dark:inline-block"
                                alt=""
                            />
                        </div>
                    </a>
                    {/* <!-- End Logo container--> */}

                    {/* <!-- Start Mobile Toggle --> */}
                    <div className="menu-extras">
                        <div className="menu-item">
                            {/* <a className="navbar-toggle" id="isToggle" onclick="toggleMenu()"> */}
                            <a className="navbar-toggle" id="isToggle">
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* <!-- End Mobile Toggle --> */}

                    {/* <!--Login button Start--> */}
                    <ul className="buy-button list-none mb-0 order-last">
                        <li className="dropdown inline-block relative pe-1">
                            <button
                                data-dropdown-toggle="dropdown"
                                className="dropdown-toggle align-middle inline-flex"
                                type="button"
                            >
                                <i data-feather="search" className="size-5"></i>
                            </button>
                            {/* <!-- Dropdown menu --> */}
                            {/* <div className="dropdown-menu absolute overflow-hidden end-0 m-0 mt-5 z-10 md:w-52 w-48 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 hidden" onclick="event.stopPropagation();"> */}
                            <div className="dropdown-menu absolute overflow-hidden end-0 m-0 mt-5 z-10 md:w-52 w-48 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 hidden">
                                <div className="relative">
                                    <i
                                        data-feather="search"
                                        className="absolute size-4 top-[9px] end-3"
                                    ></i>
                                    <input
                                        type="text"
                                        className="h-9 px-3 pe-10 w-full border-0 focus:ring-0 outline-none bg-white dark:bg-slate-900 shadow dark:shadow-gray-800"
                                        name="s"
                                        id="searchItem"
                                        placeholder="Search..."
                                    />
                                </div>
                            </div>
                        </li>

                        <li className="dropdown inline-block relative ps-0.5">
                            <button
                                data-dropdown-toggle="dropdown"
                                className="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-orange-500 border border-orange-500 text-white"
                                type="button"
                            >
                                {/* <i data-feather="shopping-cart" className="h-4 w-4"></i> */}
                                <ShoppingCart />
                            </button>
                            {/* <!-- Dropdown menu --> */}
                            {/* <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-64 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 hidden" onclick="event.stopPropagation();"> */}
                            <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-64 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 hidden">
                                <ul className="py-3 text-start" aria-labelledby="dropdownDefault">
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center justify-between py-1.5 px-4"
                                        >
                                            <span className="flex items-center">
                                                <img
                                                    src="assets/images/shop/trendy-shirt.jpg"
                                                    className="rounded shadow dark:shadow-gray-800 w-9"
                                                    alt=""
                                                />
                                                <span className="ms-3">
                                                    <span className="block font-semibold">T-shirt (M)</span>
                                                    <span className="block text-sm text-slate-400">
                                                        $320 X 2
                                                    </span>
                                                </span>
                                            </span>

                                            <span className="font-semibold">$640</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center justify-between py-1.5 px-4"
                                        >
                                            <span className="flex items-center">
                                                <img
                                                    src="assets/images/shop/luxurious-bag2.jpg"
                                                    className="rounded shadow dark:shadow-gray-800 w-9"
                                                    alt=""
                                                />
                                                <span className="ms-3">
                                                    <span className="block font-semibold">Bag</span>
                                                    <span className="block text-sm text-slate-400">
                                                        $50 X 5
                                                    </span>
                                                </span>
                                            </span>

                                            <span className="font-semibold">$250</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center justify-between py-1.5 px-4"
                                        >
                                            <span className="flex items-center">
                                                <img
                                                    src="assets/images/shop/apple-smart-watch.jpg"
                                                    className="rounded shadow dark:shadow-gray-800 w-9"
                                                    alt=""
                                                />
                                                <span className="ms-3">
                                                    <span className="block font-semibold">Watch (Men)</span>
                                                    <span className="block text-sm text-slate-400">
                                                        $800 X 1
                                                    </span>
                                                </span>
                                            </span>

                                            <span className="font-semibold">$800</span>
                                        </a>
                                    </li>

                                    <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>

                                    <li className="flex items-center justify-between py-1.5 px-4">
                                        <h6 className="font-semibold mb-0">Total($):</h6>
                                        <h6 className="font-semibold mb-0">$1690</h6>
                                    </li>

                                    <li className="py-1.5 px-4">
                                        <span className="text-center block">
                                            <a
                                                href="#"
                                                className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-orange-500 border border-orange-500 text-white"
                                            >
                                                View Cart
                                            </a>
                                            <a
                                                href="#"
                                                className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-orange-500 border border-orange-500 text-white"
                                            >
                                                Checkout
                                            </a>
                                        </span>
                                        <p className="text-sm text-slate-400 mt-1">*T&C Apply</p>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="inline-block ps-0.5">
                            <a
                                href="#"
                                className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-orange-500 text-white"
                            >
                                {/* <i data-feather="heart" className="h-4 w-4"></i> */}
                                <Heart />
                            </a>
                        </li>

                        <li className="dropdown inline-block relative ps-0.5">
                            <button
                                data-dropdown-toggle="dropdown"
                                className="dropdown-toggle items-center"
                                type="button" onClick={handleUserDropdown}
                            >
                                <span className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-orange-500 bg-orange-500 text-white">
                                    <img
                                        src={c16}
                                        className="rounded-full"
                                        alt=""
                                    />
                                </span>
                            </button>
                            {/* <!-- Dropdown menu --> */}
                            {/* <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 hidden" onclick="event.stopPropagation();"> */}
                            <div className={`dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 ${userDropdown}`} >
                                {/* <ul className="py-2 text-start">
                                    <li>
                                        <p className="text-slate-400 pt-2 px-4">Welcome Jesus!</p>
                                    </li>
                                    <li>
                                        <p className="flex items-center font-medium py-2 px-4">
                                            <i data-feather="dollar-sign" className="h-4 w-4 me-2"></i>{" "}
                                            Balance:{" "}
                                            <span className="text-orange-500 ms-2">$ 245.10</span>
                                        </p>
                                    </li>
                                    <li>
                                        <a
                                            href="user-account.html"
                                            className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"
                                        >
                                            <i data-feather="user" className="h-4 w-4 me-2"></i>Account
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="helpcenter.html"
                                            className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"
                                        >
                                            <i data-feather="help-circle" className="h-4 w-4 me-2"></i>
                                            Helpcenter
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="user-setting.html"
                                            className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"
                                        >
                                            <i data-feather="settings" className="h-4 w-4 me-2"></i>
                                            Settings
                                        </a>
                                    </li>
                                    <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                    <li>
                                        <a
                                            href="login.html"
                                            className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"
                                        >
                                            <i data-feather="log-out" className="h-4 w-4 me-2"></i>
                                            Logout
                                        </a>
                                    </li>
                                </ul> */}
                                <ul className="py-2 text-start">
                                   
                                   
                                    <li>
                                        <NavLink to="/login"
                                            href="user-account.html"
                                            className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"
                                        >
                                            <i data-feather="user" className="h-4 w-4 me-2"></i>Login
                                        </NavLink>
                                    </li>
                                    <li>
                                        <a
                                            href="helpcenter.html"
                                            className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"
                                        >
                                            <i data-feather="help-circle" className="h-4 w-4 me-2"></i>
                                            Helpcenter
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="user-setting.html"
                                            className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"
                                        >
                                            <i data-feather="settings" className="h-4 w-4 me-2"></i>
                                            Settings
                                        </a>
                                    </li>
                                    <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                    <li>
                                        <a
                                            href="login.html"
                                            className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"
                                        >
                                            <i data-feather="log-out" className="h-4 w-4 me-2"></i>
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* <!--end dropdown--> */}
                    </ul>
                    {/* <!--Login button End--> */}

                    <div id="navigation ">
                        {/* <!-- Navigation Menu--> */}
                        <ul className="navigation-menu">
                            <li className="has-submenu parent-menu-item">
                                <a href="#">Hero</a>
                                <span className="menu-arrow"></span>
                                <ul className="submenu">
                                    <li>
                                        <a href="index.html" className="sub-menu-item">
                                            Fashion One
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index-fashion-two.html" className="sub-menu-item">
                                            Fashion Two
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index-fashion-three.html" className="sub-menu-item">
                                            Fashion Three
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index-fashion-four.html" className="sub-menu-item">
                                            Fashion Four
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="has-submenu parent-parent-menu-item">
                                <a href="#">Products</a>
                                <span className="menu-arrow"></span>

                                <ul className="submenu megamenu">
                                    <li>
                                        <ul>
                                            <li className="megamenu-head">Product Features</li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Bundle - Upsell
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Hot Stock
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Sticky Add To Cart
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Notify Me (Out Of Stock)
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Ask An Expert
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Variant Image Grouped
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Wishlist
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Trust Badge
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Delivery Information
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <ul>
                                            <li className="megamenu-head">Product Features</li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Sold In Last
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Color Comparison
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Product Swatches
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Product Select Options
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Pre-Order
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Product 3D, AR Models
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Terms And Conditions Checkbox
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Variant Metafield Description
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Variant Metafield Property
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <ul>
                                            <li className="megamenu-head">Product Features</li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Product Video
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Size Chart
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Dynamic Checkout
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Product Countdown
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Custom Content
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Custom Options
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Product Combo
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Product Complementary
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Auto Discount
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <ul>
                                            <li className="megamenu-head">Product Features</li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Custom Product Tabs
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Vertical Product Tab
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Horizontal Product Tab
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Social Share
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Related Products
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Recently Viewed Products
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Custom Label
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" className="sub-menu-item">
                                                    Local Pick Up
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <ul>
                                            <li className="megamenu-head">
                                                <img src="assets/images/cta.png" alt="" />
                                            </li>

                                            <li className="text-center">
                                                <a
                                                    href="#!"
                                                    className="py-2 px-5 inline-block font-medium tracking-wide align-middle duration-500 text-base text-center bg-orange-500/10 text-orange-500 rounded-md me-2 mt-2"
                                                >
                                                    <i className="mdi mdi-cart-outline"></i> Shop Now
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className="has-submenu parent-parent-menu-item">
                                <a href="#"> Shop </a>
                                <span className="menu-arrow"></span>
                                <ul className="submenu">
                                    <li className="has-submenu parent-menu-item">
                                        <a href="#"> Shop Grid </a>
                                        <span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li>
                                                <a href="shop-grid.html" className="sub-menu-item">
                                                    Shop Grid
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="shop-grid-left-sidebar.html"
                                                    className="sub-menu-item"
                                                >
                                                    Grid Left Sidebar
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="shop-grid-right-sidebar.html"
                                                    className="sub-menu-item"
                                                >
                                                    Grid Right Sidebar
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="has-submenu parent-menu-item">
                                        <a href="#"> Shop List </a>
                                        <span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li>
                                                <a href="shop-list.html" className="sub-menu-item">
                                                    Shop List
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="shop-list-left-sidebar.html"
                                                    className="sub-menu-item"
                                                >
                                                    List Left Sidebar
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="shop-list-right-sidebar.html"
                                                    className="sub-menu-item"
                                                >
                                                    List Right Sidebar
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="has-submenu parent-menu-item">
                                        <a href="#"> Shop Detail </a>
                                        <span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li>
                                                <a
                                                    href="product-detail-one.html"
                                                    className="sub-menu-item"
                                                >
                                                    Product Detail One
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="product-detail-two.html"
                                                    className="sub-menu-item"
                                                >
                                                    Product Detail Two
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="product-detail-three.html"
                                                    className="sub-menu-item"
                                                >
                                                    Product Detail Three
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="shop-cart.html" className="sub-menu-item">
                                            Shop Cart
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-checkout.html" className="sub-menu-item">
                                            Checkout
                                        </a>
                                    </li>
                                    <li>
                                        <a href="our-store.html" className="sub-menu-item">
                                            Our Store
                                        </a>
                                    </li>
                                    <li>
                                        <a href="brands.html" className="sub-menu-item">
                                            Brands
                                        </a>
                                    </li>
                                    <li>
                                        <a href="compare-product.html" className="sub-menu-item">
                                            Compare Product
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="recently-viewed-product.html"
                                            className="sub-menu-item"
                                        >
                                            Recently Viewed Products
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="has-submenu parent-parent-menu-item">
                                <a href="#">Pages</a>
                                <span className="menu-arrow"></span>
                                <ul className="submenu">
                                    <li>
                                        <a href="aboutus.html" className="sub-menu-item">
                                            About Us
                                        </a>
                                    </li>

                                    <li className="has-submenu parent-menu-item">
                                        <a href="#"> My Account</a>
                                        <span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li>
                                                <a href="user-account.html" className="sub-menu-item">
                                                    User Account
                                                </a>
                                            </li>
                                            <li>
                                                <a href="user-billing.html" className="sub-menu-item">
                                                    Billing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="user-payment.html" className="sub-menu-item">
                                                    Payment
                                                </a>
                                            </li>
                                            <li>
                                                <a href="user-invoice.html" className="sub-menu-item">
                                                    Invoice
                                                </a>
                                            </li>
                                            <li>
                                                <a href="user-social.html" className="sub-menu-item">
                                                    Social
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="user-notification.html"
                                                    className="sub-menu-item"
                                                >
                                                    Notification
                                                </a>
                                            </li>
                                            <li>
                                                <a href="user-setting.html" className="sub-menu-item">
                                                    Setting
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="has-submenu parent-menu-item">
                                        <a href="#"> Email Template </a>
                                        <span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li>
                                                <a
                                                    href="email-confirmation.html"
                                                    className="sub-menu-item"
                                                >
                                                    {" "}
                                                    Confirmation
                                                </a>
                                            </li>
                                            <li>
                                                <a href="email-cart.html" className="sub-menu-item">
                                                    {" "}
                                                    Cart
                                                </a>
                                            </li>
                                            <li>
                                                <a href="email-offers.html" className="sub-menu-item">
                                                    {" "}
                                                    Offers
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="email-order-success.html"
                                                    className="sub-menu-item"
                                                >
                                                    {" "}
                                                    Order Success
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="email-gift-voucher.html"
                                                    className="sub-menu-item"
                                                >
                                                    {" "}
                                                    Gift Voucher
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="email-reset-password.html"
                                                    className="sub-menu-item"
                                                >
                                                    {" "}
                                                    Reset Password
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="email-item-review.html"
                                                    className="sub-menu-item"
                                                >
                                                    {" "}
                                                    Item Review
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="has-submenu parent-menu-item">
                                        <a href="#"> Blog </a>
                                        <span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li>
                                                <a href="blogs.html" className="sub-menu-item">
                                                    {" "}
                                                    Blogs
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-detail.html" className="sub-menu-item">
                                                    {" "}
                                                    Blog Detail
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <a href="career.html" className="sub-menu-item">
                                            Career{" "}
                                        </a>
                                    </li>

                                    <li className="has-submenu parent-menu-item">
                                        <a href="#"> Helpcenter </a>
                                        <span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li>
                                                <a href="helpcenter.html" className="sub-menu-item">
                                                    Overview
                                                </a>
                                            </li>
                                            <li>
                                                <a href="helpcenter-faqs.html" className="sub-menu-item">
                                                    FAQs
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="helpcenter-guides.html"
                                                    className="sub-menu-item"
                                                >
                                                    Guides
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="helpcenter-support.html"
                                                    className="sub-menu-item"
                                                >
                                                    Support
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="has-submenu parent-menu-item">
                                        <a href="#"> Auth Pages </a>
                                        <span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li>
                                                <a href="login.html" className="sub-menu-item">
                                                    {" "}
                                                    Login
                                                </a>
                                            </li>
                                            <li>
                                                <a href="signup.html" className="sub-menu-item">
                                                    {" "}
                                                    Signup
                                                </a>
                                            </li>
                                            <li>
                                                <a href="forgot-password.html" className="sub-menu-item">
                                                    {" "}
                                                    Forgot Password
                                                </a>
                                            </li>
                                            <li>
                                                <a href="lock-screen.html" className="sub-menu-item">
                                                    {" "}
                                                    Lock Screen
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="has-submenu parent-menu-item">
                                        <a href="#"> Utility </a>
                                        <span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li>
                                                <a href="terms.html" className="sub-menu-item">
                                                    Terms of Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="privacy.html" className="sub-menu-item">
                                                    Privacy Policy
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="has-submenu parent-menu-item">
                                        <a href="#"> Special </a>
                                        <span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li>
                                                <a href="comingsoon.html" className="sub-menu-item">
                                                    {" "}
                                                    Coming Soon
                                                </a>
                                            </li>
                                            <li>
                                                <a href="maintenance.html" className="sub-menu-item">
                                                    {" "}
                                                    Maintenance
                                                </a>
                                            </li>
                                            <li>
                                                <a href="error.html" className="sub-menu-item">
                                                    {" "}
                                                    404!
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="has-submenu parent-menu-item">
                                        <a href="#"> Multi Level Menu</a>
                                        <span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li>
                                                <a href="#" className="sub-menu-item">
                                                    Level 1.0
                                                </a>
                                            </li>
                                            <li className="has-submenu child-menu-item">
                                                <a href="#"> Level 2.0 </a>
                                                <span className="submenu-arrow"></span>
                                                <ul className="submenu">
                                                    <li>
                                                        <a href="#" className="sub-menu-item">
                                                            Level 2.1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="sub-menu-item">
                                                            Level 2.2
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="sale.html" className="sub-menu-item">
                                    Sale
                                </a>
                            </li>

                            <li>
                                <a href="contact.html" className="sub-menu-item">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        {/* <!--end navigation menu--> */}
                    </div>
                    {/* <!--end navigation--> */}
                </div>
                {/* <!--end container--> */}
            </nav>
        </>
    );
}

export default Header;