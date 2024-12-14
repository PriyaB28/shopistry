import React from 'react'
import logo from '../../../../assets/backend/images/brand-logos/logo.png'
import { NavLink } from 'react-router';

function Sidebar() {
    const [menuClass, setMenuClass] = React.useState(null);
    // const [activeClass, setActiveClass] = React.useState('');
    // const [openClass, setOpenClass] = React.useState('');
    // const [display, setDisplay] = React.useState('hidden');
    const handleToggle = (e) => {
        e.preventDefault()
        setMenuClass(e.target.dataset.menuname);
        console.log(e.target.dataset.menuname);
        setMenuClass((prev) => typeof prev === 'string' ? e.target.dataset.menuname : null);
        // setActiveClass((prev) => prev === '' ? 'active' : '');
        // setDisplay((prev) => prev === 'hidden' ? 'block' : 'hidden');
        // setOpenClass((prev) => prev === '' ? 'open' : '');
    }
    const handleToggleValue = (e) => {
        e.preventDefault();
        setMenuClass(null);
    }
    return (
        <aside className="app-sidebar" id="sidebar">

            {/* <!-- Start::main-sidebar-header --> */}
            <div className="main-sidebar-header">
                <a href="index.html" className="header-logo">

                    <img src={logo} alt="logo" className="desktop-dark" />

                </a>
            </div>
            {/* <!-- End::main-sidebar-header --> */}

            {/* <!-- Start::main-sidebar --> */}
            <div className="main-sidebar" id="sidebar-scroll">

                {/* <!-- Start::nav --> */}
                <nav className="main-menu-container nav nav-pills flex-column sub-open">
                    <div className="slide-left" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                        width="24" height="24" viewBox="0 0 24 24">
                        <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                    </svg></div>
                    <ul className="main-menu">
                        {/* <!-- Start::slide__category --> */}
                        <li className="slide__category"><span className="category-name">Main</span></li>
                        {/* <!-- End::slide__category --> */}

                        {/* <!-- Start::slide --> */}
                        {/* <li className="slide has-sub">
                        <a href="#" className="side-menu__item">
                            <i className="bx bx-home side-menu__icon"></i>
                            <span className="side-menu__label">Dashboards<span
                                    className="badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2">12</span></span>
                            <i className="fe fe-chevron-right side-menu__angle"></i>
                        </a>
                        <ul className="slide-menu child1">
                            <li className="slide side-menu__label1">
                                <a href="#">Dashboards</a>
                            </li>
                            <li className="slide">
                                <a href="index.html" className="side-menu__item">CRM</a>
                            </li>
                            <li className="slide">
                                <a href="index2.html" className="side-menu__item">Ecommerce</a>
                            </li>
                            <li className="slide">
                                <a href="index3.html" className="side-menu__item">Crypto</a>
                            </li>
                            <li className="slide">
                                <a href="index4.html" className="side-menu__item">Jobs</a>
                            </li>
                            <li className="slide">
                                <a href="index5.html" className="side-menu__item">NFT</a>
                            </li>
                            <li className="slide">
                                <a href="index6.html" className="side-menu__item">Sales</a>
                            </li>
                            <li className="slide">
                                <a href="index7.html" className="side-menu__item">Analytics</a>
                            </li>
                            <li className="slide">
                                <a href="index8.html" className="side-menu__item">Projects</a>
                            </li>
                            <li className="slide">
                                <a href="index9.html" className="side-menu__item">HRM</a>
                            </li>
                            <li className="slide">
                                <a href="index10.html" className="side-menu__item">Stocks</a>
                            </li>
                            <li className="slide">
                                <a href="index11.html" className="side-menu__item">Courses</a>
                            </li>

                            <li className="slide">
                                <a href="index12.html" className="side-menu__item">Personal</a>
                            </li>
                        </ul>
                    </li> */}
                        {/* <!-- End::slide --> */}
                        {/* <!-- Start::slide__category --> */}
                        {/* <li className="slide__category"><span className="category-name">Pages</span></li> */}
                        {/* <!-- End::slide__category --> */}

                        {/* <!-- Start::slide --> */}
                        <li className={`slide has-sub  ${menuClass === 'products' ? 'active open' : ''}  `} data-menuname="products" onMouseEnter={handleToggle} >
                            <button type="button" className="side-menu__item"   >
                                <i className="bx bx-file-blank side-menu__icon"></i>
                                <span className="side-menu__label">Products</span>
                                <i className="fe fe-chevron-right side-menu__angle"></i>
                            </button>
                            <ul className={`slide-menu child1 ${menuClass === 'products' ? 'block' : 'hidden'} `} >
                                <li className="slide side-menu__label1"><a href="#">Pages</a></li>
                                {/* <li className="slide"><a href="aboutus.html" className="side-menu__item">About Us</a></li> */}
                                {/* <li className="slide has-sub"><a href="#" className="side-menu__item">Blog<i
                                    className="fe fe-chevron-right side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="blog.html" className="side-menu__item">Blog</a></li>
                                        <li className="slide"><a href="blog-details.html" className="side-menu__item">Blog
                                            Details</a>
                                        </li>
                                        <li className="slide"><a href="blog-create.html" className="side-menu__item">Blog
                                            Create</a>
                                        </li>
                                    </ul>
                                </li> */}
                                {/* <li className="slide">
                                    <a href="chat.html" className="side-menu__item">Chat</a>
                                </li> */}
                                {/* <li className="slide"><a href="contacts.html" className="side-menu__item">Contacts</a></li>
                                <li className="slide"><a href="contactus.html" className="side-menu__item">Contact Us</a></li> */}
                                <li className="slide">
                                    <NavLink to="/admin/dashboard" className="side-menu__item">Products List</NavLink>
                                </li>
                                {/* <li className="slide has-sub"><a href="#"
                                    className="side-menu__item">Ecommerce<i
                                        className="fe fe-chevron-right side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="add-products.html" className="side-menu__item">Add Products</a>
                                        </li>
                                        <li className="slide">
                                            <a href="cart.html" className="side-menu__item">Cart</a>
                                        </li>
                                        <li className="slide">
                                            <a href="checkout.html" className="side-menu__item">Checkout</a>
                                        </li>
                                        <li className="slide">
                                            <a href="edit-products.html" className="side-menu__item">Edit Products</a>
                                        </li>
                                        <li className="slide">
                                            <a href="order-details.html" className="side-menu__item">Order Details</a>
                                        </li>
                                        <li className="slide">
                                            <a href="orders.html" className="side-menu__item">Orders</a>
                                        </li>
                                        <li className="slide">
                                            <a href="products.html" className="side-menu__item">Products</a>
                                        </li>
                                        <li className="slide">
                                            <a href="products-details.html" className="side-menu__item">Products Details</a>
                                        </li>
                                        <li className="slide">
                                            <a href="products-list.html" className="side-menu__item">Products List</a>
                                        </li>
                                        <li className="slide">
                                            <a href="wishlist.html" className="side-menu__item">Wishlist</a>
                                        </li>
                                    </ul>
                                </li> */}
                                {/* <li className="slide has-sub"><a href="#" className="side-menu__item">EMail<i
                                    className="fe fe-chevron-right side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="mail.html" className="side-menu__item">Mail App</a></li>
                                        <li className="slide"><a href="mail-settings.html" className="side-menu__item">Mail
                                            Settings</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide"><a href="empty-page.html" className="side-menu__item">Empty</a></li>
                                <li className="slide"><a href="faqs.html" className="side-menu__item">FAQ's</a></li>
                                <li className="slide has-sub">
                                    <a href="#" className="side-menu__item">File Manager
                                        <i className="fe fe-chevron-right side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="filemanager.html" className="side-menu__item">File Manager</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide has-sub"><a href="#"
                                    className="side-menu__item">Invoice<i
                                        className="fe fe-chevron-right side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="invoice-create.html" className="side-menu__item">Create Invoice</a>
                                        </li>

                                        <li className="slide"><a href="invoice-details.html" className="side-menu__item">Invoice
                                            Details</a>
                                        </li>
                                        <li className="slide"><a href="invoice-list.html" className="side-menu__item">Invoice
                                            List</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide"><a href="landing.html" className="side-menu__item">Landing</a></li>
                                <li className="slide">
                                    <a href="landing-jobs.html" className="side-menu__item">Jobs Landing<span
                                        className="text-secondary text-[0.75em] rounded-sm badge !py-[0.25rem] !px-[0.45rem] !bg-secondary/10 ms-2">New</span></a>
                                </li>
                                <li className="slide">
                                    <a href="notifications.html" className="side-menu__item">Notifications</a>
                                </li>
                                <li className="slide"><a href="pricing.html" className="side-menu__item">Pricing</a></li>
                                <li className="slide">
                                    <a href="profile.html" className="side-menu__item">Profile</a>
                                </li>
                                <li className="slide"><a href="reviews.html" className="side-menu__item">Reviews</a></li>
                                <li className="slide"><a href="team.html" className="side-menu__item">Team</a></li>
                                <li className="slide"><a href="terms.html" className="side-menu__item">Terms &amp;
                                    Conditions</a></li>
                                <li className="slide"><a href="timeline.html" className="side-menu__item">Timeline</a></li>
                                <li className="slide"><a href="todo.html" className="side-menu__item">To Do List</a></li> */}
                            </ul>
                        </li>
                        <li className="slide">
                            <NavLink to="/admin/add-student" className="side-menu__item">Student</NavLink>
                        </li>
                        {/* <!-- End::slide --> */}

                        {/* <!-- Start::slide --> */}
                        {/* <li className={`slide has-sub ${menuClass === 'task' ? 'active open' : ''} `}>
                            <a href="#" className="side-menu__item" onClick={()=>setMenuClass('task')} />
                            <a href="#" className="side-menu__item" >
                                <i className="bx bx-task side-menu__icon"></i>
                                <span className="side-menu__label">Task<span
                                    className="text-secondary text-[0.75em] rounded-sm badge !py-[0.25rem] !px-[0.45rem] !bg-secondary/10 ms-2">New</span></span>
                                <i className="fe fe-chevron-right side-menu__angle"></i>
                            </a>
                            <ul className={`slide-menu child1 ${menuClass === 'task' ? 'block' : 'hidden'} `}>
                                <li className="slide side-menu__label1">
                                    <a href="#">Task</a>
                                </li>
                                <li className="slide">
                                    <a href="task-kanban-board.html" className="side-menu__item">Kanban Board</a>
                                </li>
                                <li className="slide">
                                    <a href="task-listview.html" className="side-menu__item">List View</a>
                                </li>
                                <li className="slide">
                                    <a href="task-details.html" className="side-menu__item">Task Details</a>
                                </li>
                            </ul>
                        </li> */}
                        {/* <!-- End::slide --> */}

                        {/* <!-- Start::slide --> */}
                        {/* <li className="slide has-sub">
                            <a href="#" className="side-menu__item">
                                <i className="bx bx-fingerprint side-menu__icon"></i>
                                <span className="side-menu__label">Authentication</span>
                                <i className="fe fe-chevron-right side-menu__angle"></i>
                            </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1"><a href="#">Authentication</a></li>
                                <li className="slide"><a href="comingsoon.html" className="side-menu__item">Coming Soon</a></li>
                                <li className="slide has-sub"><a href="#" className="side-menu__item">Create
                                    Password<i className="fe fe-chevron-right side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="createpassword-basic.html"
                                            className="side-menu__item">Basic</a></li>
                                        <li className="slide"><a href="createpassword-cover.html"
                                            className="side-menu__item">Cover</a></li>
                                    </ul>
                                </li>
                                <li className="slide has-sub"><a href="#"
                                    className="side-menu__item">Lockscreen<i
                                        className="fe fe-chevron-right side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="lockscreen-basic.html"
                                            className="side-menu__item">Basic</a></li>
                                        <li className="slide"><a href="lockscreen-cover.html"
                                            className="side-menu__item">Cover</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide has-sub"><a href="#" className="side-menu__item">Reset
                                    Password<i className="fe fe-chevron-right side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="resetpassword-basic.html"
                                            className="side-menu__item">Basic</a></li>
                                        <li className="slide"><a href="resetpassword-cover.html"
                                            className="side-menu__item">Cover</a></li>
                                    </ul>
                                </li>
                                <li className="slide has-sub"><a href="#" className="side-menu__item">Sign
                                    Up<i className="fe fe-chevron-right side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="signup-basic.html" className="side-menu__item">Basic</a>
                                        </li>
                                        <li className="slide"><a href="signup-cover.html" className="side-menu__item">Cover</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide has-sub"><a href="#" className="side-menu__item">Sign
                                    In<i className="fe fe-chevron-right side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="signin-basic.html" className="side-menu__item">Basic</a>
                                        </li>
                                        <li className="slide"><a href="signin-cover.html" className="side-menu__item">Cover</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide has-sub"><a href="#" className="side-menu__item">Two Step
                                    Verfication<i className="fe fe-chevron-right side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="twostep-verification-basic.html"
                                            className="side-menu__item">Basic</a></li>
                                        <li className="slide"><a href="twostep-verification-cover.html"
                                            className="side-menu__item">Cover</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide"><a href="under-maintenance.html" className="side-menu__item">Under
                                    Maintenance</a></li>
                            </ul>
                        </li> */}
                        {/* <!-- End::slide --> */}

                        {/* <!-- Start::slide --> */}
                        {/* <li className="slide has-sub">
                            <a href="#" className="side-menu__item">
                                <i className="bx bx-error side-menu__icon"></i>
                                <span className="side-menu__label">Error</span>
                                <i className="fe fe-chevron-right side-menu__angle"></i>
                            </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1">
                                    <a href="#">Error</a>
                                </li>
                                <li className="slide">
                                    <a href="error401.html" className="side-menu__item">401 - Error</a>
                                </li>
                                <li className="slide">
                                    <a href="error404.html" className="side-menu__item">404 - Error</a>
                                </li>
                                <li className="slide">
                                    <a href="error500.html" className="side-menu__item">500 - Error</a>
                                </li>
                            </ul>
                        </li> */}
                        {/* <!-- End::slide --> */}

                        {/* <!-- Start::slide__category --> */}
                        {/* <li className="slide__category"><span className="category-name">General</span></li> */}
                        {/* <!-- End::slide__category --> */}

                        {/* <!-- Start::slide --> */}
                        {/* <li className="slide has-sub">
                            <a href="#" className="side-menu__item">
                                <i className="bx bx-box side-menu__icon"></i>
                                <span className="side-menu__label">Ui Elements</span>
                                <i className="fe fe-chevron-right side-menu__angle"></i>
                            </a>
                            <ul className="slide-menu child1 mega-menu">
                                <li className="slide side-menu__label1">
                                    <a href="#">Ui Elements</a>
                                </li>
                                <li className="slide">
                                    <a href="alerts.html" className="side-menu__item">Alerts</a>
                                </li>
                                <li className="slide">
                                    <a href="badges.html" className="side-menu__item">Badges</a>
                                </li>
                                <li className="slide">
                                    <a href="breadcrumbs.html" className="side-menu__item">Breadcrumbs</a>
                                </li>
                                <li className="slide">
                                    <a href="buttons.html" className="side-menu__item">Buttons</a>
                                </li>
                                <li className="slide">
                                    <a href="buttongroups.html" className="side-menu__item">Button Groups</a>
                                </li>
                                <li className="slide">
                                    <a href="cards.html" className="side-menu__item">Cards</a>
                                </li>
                                <li className="slide">
                                    <a href="dropdowns.html" className="side-menu__item">Dropdowns</a>
                                </li>
                                <li className="slide">
                                    <a href="indicators.html" className="side-menu__item">Indicators</a>
                                </li>
                                <li className="slide">
                                    <a href="images-figures.html" className="side-menu__item">Images &amp; Figures</a>
                                </li>
                                <li className="slide">
                                    <a href="listgroups.html" className="side-menu__item">List Groups</a>
                                </li>
                                <li className="slide">
                                    <a href="navs-tabs.html" className="side-menu__item">Navs &amp; Tabs</a>
                                </li>
                                <li className="slide">
                                    <a href="object-fit.html" className="side-menu__item">Object Fit</a>
                                </li>
                                <li className="slide">
                                    <a href="paginations.html" className="side-menu__item">Paginations</a>
                                </li>
                                <li className="slide">
                                    <a href="popovers.html" className="side-menu__item">Popovers</a>
                                </li>
                                <li className="slide">
                                    <a href="progress.html" className="side-menu__item">Progress</a>
                                </li>
                                <li className="slide">
                                    <a href="spinners.html" className="side-menu__item">Spinners</a>
                                </li>
                                <li className="slide">
                                    <a href="toasts.html" className="side-menu__item">Toasts</a>
                                </li>
                                <li className="slide">
                                    <a href="tooltips.html" className="side-menu__item">Tooltips</a>
                                </li>
                            </ul>
                        </li> */}
                        {/* <!-- End::slide --> */}

                        {/* <!-- Start::slide --> */}
                        {/* <li className="slide has-sub">
                            <a href="#" className="side-menu__item">
                                <i className="bx bx-medal side-menu__icon"></i>
                                <span className="side-menu__label">Utilities</span>
                                <i className="fe fe-chevron-right side-menu__angle"></i>
                            </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1">
                                    <a href="#">Utilities</a>
                                </li>
                                <li className="slide">
                                    <a href="avatars.html" className="side-menu__item">Avatars</a>
                                </li>
                                <li className="slide">
                                    <a href="borders.html" className="side-menu__item">Borders</a>
                                </li>
                                <li className="slide">
                                    <a href="colors.html" className="side-menu__item">Colors</a>
                                </li>
                                <li className="slide">
                                    <a href="columns.html" className="side-menu__item">Columns</a>
                                </li>
                                <li className="slide">
                                    <a href="flex.html" className="side-menu__item">Flex</a>
                                </li>
                                <li className="slide">
                                    <a href="grids.html" className="side-menu__item">Grids</a>
                                </li>
                            </ul>
                        </li> */}
                        {/* <!-- End::slide --> */}

                        {/* <!-- Start::slide --> */}
                        {/* <li className="slide has-sub">
                            <a href="#" className="side-menu__item">
                                <i className="bx bx-file  side-menu__icon"></i>
                                <span className="side-menu__label">Forms</span>
                                <i className="fe fe-chevron-right side-menu__angle"></i>
                            </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1">
                                    <a href="#">Forms</a>
                                </li>
                                <li className="slide has-sub">
                                    <a href="#" className="side-menu__item">Form Elements
                                        <i className="fe fe-chevron-right side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="form-inputs.html" className="side-menu__item">Inputs</a>
                                        </li>
                                        <li className="slide">
                                            <a href="form-check-radios.html" className="side-menu__item">Checks &amp;
                                                Radios</a>
                                        </li>
                                        <li className="slide">
                                            <a href="form-input-groups.html" className="side-menu__item">Input Groups</a>
                                        </li>
                                        <li className="slide">
                                            <a href="form-select.html" className="side-menu__item">Form Select</a>
                                        </li>
                                        <li className="slide">
                                            <a href="form-range.html" className="side-menu__item">Range Slider</a>
                                        </li>
                                        <li className="slide">
                                            <a href="form-file-uploads.html" className="side-menu__item">File Uploads</a>
                                        </li>
                                        <li className="slide">
                                            <a href="form-datetime-pickers.html" className="side-menu__item">Date, Time
                                                Pickers</a>
                                        </li>
                                        <li className="slide">
                                            <a href="form-color-pickers.html" className="side-menu__item">Color Pickers</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide">
                                    <a href="form-layouts.html" className="side-menu__item">Form Layouts</a>
                                </li>
                                <li className="slide has-sub">
                                    <a href="#" className="side-menu__item">Form Editors
                                        <i className="fe fe-chevron-right side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="quill-editor.html" className="side-menu__item">Quill Editor</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide">
                                    <a href="form-validations.html" className="side-menu__item">Validations</a>
                                </li>
                                <li className="slide">
                                    <a href="form-select2.html" className="side-menu__item">Select2</a>
                                </li>
                            </ul>
                        </li> */}
                        {/* <!-- End::slide --> */}

                        {/* <!-- Start::slide --> */}
                        {/* <li className="slide has-sub">
                            <a href="#" className="side-menu__item">
                                <i className="bx bx-party side-menu__icon"></i>
                                <span className="side-menu__label">Advanced Ui</span>
                                <i className="fe fe-chevron-right side-menu__angle"></i>
                            </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1"><a href="#">Advanced Ui</a></li>
                                <li className="slide">
                                    <a href="accordions-collapse.html" className="side-menu__item">Accordions &amp;
                                        Collapse</a>
                                </li>
                                <li className="slide"><a href="draggable-cards.html" className="side-menu__item">Draggable
                                    Cards</a></li>
                                <li className="slide">
                                    <a href="modals-closes.html" className="side-menu__item">Modals &amp; Closes</a>
                                </li>
                                <li className="slide">
                                    <a href="navbars.html" className="side-menu__item">Navbars</a>
                                </li>
                                <li className="slide">
                                    <a href="offcanvas.html" className="side-menu__item">Offcanvas</a>
                                </li>
                                <li className="slide"><a href="ratings.html" className="side-menu__item">Ratings</a></li>
                                <li className="slide">
                                    <a href="scrollspy.html" className="side-menu__item">Scrollspy</a>
                                </li>
                                <li className="slide">
                                    <a href="swiperjs.html" className="side-menu__item">Swiper JS</a>
                                </li>


                            </ul>
                        </li> */}
                        {/* <!-- End::slide --> */}

                        {/* <!-- Start::slide --> */}
                        {/* <li className="slide">
                            <a href="widgets.html" className="side-menu__item">
                                <i className="bx bx-gift side-menu__icon"></i>
                                <span className="side-menu__label">Widgets <span
                                    className="text-danger text-[0.75em] rounded-sm badge !py-[0.25rem] !px-[0.45rem] !bg-danger/10 ms-2">Hot</span></span>
                            </a>
                        </li> */}
                        {/* <!-- End::slide --> */}

                        {/* <!-- Start::slide__category --> */}
                        {/* <li className="slide__category"><span className="category-name">Web Apps</span></li> */}
                        {/* <!-- End::slide__category --> */}

                        {/* <!-- Start::slide --> */}
                        {/* <li className="slide has-sub">
                            <a href="#" className="side-menu__item">
                                <i className="bx bx-grid-alt side-menu__icon"></i>
                                <span className="side-menu__label">Apps<span
                                    className="text-secondary text-[0.75em] rounded-sm badge !py-[0.25rem] !px-[0.45rem] !bg-secondary/10 ms-2">New</span></span>
                                <i className="fe fe-chevron-right side-menu__angle"></i>
                            </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1">
                                    <a href="#">Apps</a>
                                </li>
                                <li className="slide">
                                    <a href="full-calendar.html" className="side-menu__item">Full Calendar</a>
                                </li>
                                <li className="slide">
                                    <a href="gallery.html" className="side-menu__item">Gallery</a>
                                </li>
                                <li className="slide has-sub">
                                    <a href="#" className="side-menu__item">Projects
                                        <i className="fe fe-chevron-right side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="projects-list.html" className="side-menu__item">Projects List</a>
                                        </li>
                                        <li className="slide">
                                            <a href="projects-overview.html" className="side-menu__item">Projects
                                                Overview</a>
                                        </li>
                                        <li className="slide">
                                            <a href="projects-create.html" className="side-menu__item">Projects Create</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide has-sub">
                                    <a href="#" className="side-menu__item">Jobs
                                        <i className="fe fe-chevron-right side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="job-details.html" className="side-menu__item">Job Details</a>
                                        </li>
                                        <li className="slide">
                                            <a href="job-company-search.html" className="side-menu__item">Job Search
                                                Company</a>
                                        </li>
                                        <li className="slide">
                                            <a href="job-search.html" className="side-menu__item">Job Search </a>
                                        </li>
                                        <li className="slide">
                                            <a href="job-post.html" className="side-menu__item">Job Post</a>
                                        </li>
                                        <li className="slide">
                                            <a href="job-list.html" className="side-menu__item">Job List</a>
                                        </li>
                                        <li className="slide">
                                            <a href="job-candidate-search.html" className="side-menu__item">Job Candidate
                                                Search</a>
                                        </li>
                                        <li className="slide">
                                            <a href="job-candidate-details.html" className="side-menu__item">Job Candidate
                                                Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide has-sub">
                                    <a href="#" className="side-menu__item">NFT
                                        <i className="fe fe-chevron-right side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="nft-marketplace.html" className="side-menu__item">Market Place</a>
                                        </li>
                                        <li className="slide">
                                            <a href="nft-details.html" className="side-menu__item">NFT Details</a>
                                        </li>
                                        <li className="slide">
                                            <a href="nft-create.html" className="side-menu__item">Create NFT</a>
                                        </li>
                                        <li className="slide">
                                            <a href="nft-wallet-integration.html" className="side-menu__item">Wallet
                                                Integration</a>
                                        </li>
                                        <li className="slide">
                                            <a href="nft-live-auction.html" className="side-menu__item">Live Auction</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide has-sub">
                                    <a href="#" className="side-menu__item">CRM
                                        <i className="fe fe-chevron-right side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="crm-contacts.html" className="side-menu__item">Contacts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="crm-companies.html" className="side-menu__item">Companies</a>
                                        </li>
                                        <li className="slide">
                                            <a href="crm-deals.html" className="side-menu__item">Deals</a>
                                        </li>
                                        <li className="slide">
                                            <a href="crm-leads.html" className="side-menu__item">Leads</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide has-sub">
                                    <a href="#" className="side-menu__item">Crypto
                                        <i className="fe fe-chevron-right side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="crypto-transactions.html" className="side-menu__item">Transactions</a>
                                        </li>
                                        <li className="slide">
                                            <a href="crypto-currency-exchange.html" className="side-menu__item">Currency
                                                Exchange</a>
                                        </li>
                                        <li className="slide">
                                            <a href="crypto-buy-sell.html" className="side-menu__item">Buy &amp; Sell</a>
                                        </li>
                                        <li className="slide">
                                            <a href="crypto-marketcap.html" className="side-menu__item">Marketcap</a>
                                        </li>
                                        <li className="slide">
                                            <a href="crypto-wallet.html" className="side-menu__item">Wallet</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li> */}
                        {/* <!-- End::slide --> */}

                        {/* <!-- Start::slide --> */}
                        {/* <li className="slide has-sub">
                            <a href="#" className="side-menu__item">
                                <i className="bx bx-layer side-menu__icon"></i>
                                <span className="side-menu__label">Nested Menu</span>
                                <i className="fe fe-chevron-right side-menu__angle"></i>
                            </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1">
                                    <a href="#">Nested Menu</a>
                                </li>
                                <li className="slide">
                                    <a href="#" className="side-menu__item">Nested-1</a>
                                </li>
                                <li className="slide has-sub">
                                    <a href="#" className="side-menu__item">Nested-2
                                        <i className="fe fe-chevron-right side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="#" className="side-menu__item">Nested-2-1</a>
                                        </li>
                                        <li className="slide has-sub">
                                            <a href="#" className="side-menu__item">Nested-2-2
                                                <i className="fe fe-chevron-right side-menu__angle"></i></a>
                                            <ul className="slide-menu child3">
                                                <li className="slide">
                                                    <a href="#"
                                                        className="side-menu__item">Nested-2-2-1</a>
                                                </li>
                                                <li className="slide">
                                                    <a href="#"
                                                        className="side-menu__item">Nested-2-2-2</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li> */}
                        {/* <!-- End::slide --> */}

                        {/* <!-- Start::slide__category --> */}
                        {/* <li className="slide__category"><span className="category-name">Tables &amp; Charts</span></li> */}
                        {/* <!-- End::slide__category --> */}

                        {/* <!-- Start::slide --> */}
                        {/* <li className="slide has-sub">
                            <a href="#" className="side-menu__item">
                                <i className="bx bx-table side-menu__icon"></i>
                                <span className="side-menu__label">Tables<span
                                    className="text-success text-[0.75em] badge !py-[0.25rem] !px-[0.45rem] rounded-sm bg-success/10 ms-2">3</span></span>
                                <i className="fe fe-chevron-right side-menu__angle"></i>
                            </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1">
                                    <a href="#">Tables</a>
                                </li>
                                <li className="slide">
                                    <a href="tables.html" className="side-menu__item">Tables</a>
                                </li>
                                <li className="slide">
                                    <a href="grid-tables.html" className="side-menu__item">Grid JS Tables</a>
                                </li>
                                <li className="slide">
                                    <a href="data-tables.html" className="side-menu__item">Data Tables</a>
                                </li>
                            </ul>
                        </li> */}
                        {/* <!-- End::slide --> */}

                        {/* <!-- Start::slide --> */}
                        {/* <li className="slide has-sub">
                            <a href="#" className="side-menu__item">
                                <i className="bx bx-bar-chart-square side-menu__icon"></i>
                                <span className="side-menu__label">Charts</span>
                                <i className="fe fe-chevron-right side-menu__angle"></i>
                            </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1"><a href="#">Charts</a></li>
                                <li className="slide has-sub">
                                    <a href="#" className="side-menu__item">Apex Charts
                                        <i className="fe fe-chevron-right side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="apex-line-charts.html" className="side-menu__item">Line Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-area-charts.html" className="side-menu__item">Area Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-column-charts.html" className="side-menu__item">Column Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-bar-charts.html" className="side-menu__item">Bar Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-mixed-charts.html" className="side-menu__item">Mixed Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-rangearea-charts.html" className="side-menu__item">Range Area
                                                Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-timeline-charts.html" className="side-menu__item">Timeline
                                                Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-candlestick-charts.html" className="side-menu__item">Candlestick
                                                Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-boxplot-charts.html" className="side-menu__item">Boxplot
                                                Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-bubble-charts.html" className="side-menu__item">Bubble Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-scatter-charts.html" className="side-menu__item">Scatter
                                                Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-heatmap-charts.html" className="side-menu__item">Heatmap
                                                Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-treemap-charts.html" className="side-menu__item">Treemap
                                                Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-pie-charts.html" className="side-menu__item">Pie Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-radialbar-charts.html" className="side-menu__item">Radialbar
                                                Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-radar-charts.html" className="side-menu__item">Radar Charts</a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-polararea-charts.html" className="side-menu__item">Polararea
                                                Charts</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide"><a href="chartjs.html" className="side-menu__item">Chart JS</a></li>
                                <li className="slide"><a href="echartjs.html" className="side-menu__item">Echarts</a></li>
                            </ul>
                        </li> */}
                        {/* <!-- End::slide --> */}

                        {/* <!-- Start::slide__category --> */}
                        {/* <li className="slide__category"><span className="category-name">Maps &amp; Icons</span></li> */}
                        {/* <!-- End::slide__category --> */}

                        {/* <!-- Start::slide --> */}
                        {/* <li className="slide has-sub">
                            <a href="#" className="side-menu__item">
                                <i className="bx bx-map side-menu__icon"></i>
                                <span className="side-menu__label">Maps</span>
                                <i className="fe fe-chevron-right side-menu__angle"></i>
                            </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1"><a href="#">Maps</a></li>
                                <li className="slide"><a href="google-maps.html" className="side-menu__item">Google Maps</a>
                                </li>
                                <li className="slide"><a href="leaflet-maps.html" className="side-menu__item">Leaflet Maps</a>
                                </li>
                                <li className="slide"><a href="vector-maps.html" className="side-menu__item">Vector Maps</a>
                                </li>
                            </ul>
                        </li> */}
                        {/* <!-- End::slide --> */}

                        {/* <!-- Start::slide --> */}
                        {/* <li className="slide">
                            <a href="icons.html" className="side-menu__item">
                                <i className="bx bx-store-alt side-menu__icon"></i>
                                <span className="side-menu__label">Icons</span>
                            </a>
                        </li> */}
                        {/* <!-- End::slide --> */}
                    </ul>
                    <div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                        width="24" height="24" viewBox="0 0 24 24">
                        <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                    </svg>
                    </div>
                </nav>
                {/* <!-- End::nav --> */}

            </div>
            {/* <!-- End::main-sidebar --> */}

        </aside>
    )
}

export default Sidebar