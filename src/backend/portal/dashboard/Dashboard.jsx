import React from 'react'
import images from './DashboardImages'

function Dashboard() {
    return (
        <div className="content">
        <div className="main-content">


            {/* <!-- Page Header --> */}
            <div className="block justify-between page-header md:flex">
                <div>
                    <h3
                        className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-[1.125rem] font-semibold">
                        Products List</h3>
                </div>
                <ol className="flex items-center whitespace-nowrap min-w-0">
                    <li className="text-[0.813rem] ps-[0.5rem]">
                        <a className="flex items-center text-primary hover:text-primary dark:text-primary truncate"
                            href="#">
                            Products
                            <i
                                className="ti ti-chevrons-right flex-shrink-0 text-[#8c9097] dark:text-white/50 px-[0.5rem] overflow-visible rtl:rotate-180"></i>
                        </a>
                    </li>
                    <li className="text-[0.813rem] text-defaulttextcolor font-semibold hover:text-primary dark:text-[#8c9097] dark:text-white/50 "
                        aria-current="page">
                        Products List
                    </li>
                </ol>
            </div>
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Products List
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="table-responsive mb-4">
                                <table className="table whitespace-nowrap table-bordered min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="!text-start">
                                                <input className="form-check-input check-all" type="checkbox"
                                                    id="all-products" value="" aria-label="..." />
                                            </th>
                                            <th scope="col" className="text-start">Product</th>
                                            <th scope="col" className="text-start">Category</th>
                                            <th scope="col" className="text-start">Price</th>
                                            <th scope="col" className="text-start">Stock</th>
                                            <th scope="col" className="text-start">Gender</th>
                                            <th scope="col" className="text-start">Seller</th>
                                            <th scope="col" className="text-start">Published</th>
                                            <th scope="col" className="text-start">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="product-list">
                                            <td className="product-checkbox"><input className="form-check-input"
                                                    type="checkbox" id="product1" value="" aria-label="..." /></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={images.img1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold">
                                                        DapZem &amp; Co Blue Hoodie
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-light text-default">Clothing</span>
                                            </td>
                                            <td>$1,299</td>
                                            <td>283</td>
                                            <td>Male</td>
                                            <td>Apilla.co.in</td>
                                            <td>24,Nov 2022 - 04:42PM</td>
                                            <td>
                                                <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                    <a aria-label="anchor" href="edit-products.html"
                                                        className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                            className="ri-pencil-line"></i></a>
                                                    <a aria-label="anchor" href="#"
                                                        className="ti-btn ti-btn-wave product-btn !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
                                                            className="ri-delete-bin-line"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="product-list">
                                            <td className="product-checkbox"><input className="form-check-input"
                                                    type="checkbox" id="product2" value="" aria-label="..."/></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={images.img2} alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold">
                                                        Leather jacket for men
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-light text-default">Clothing</span>
                                            </td>
                                            <td>$799</td>
                                            <td>98</td>
                                            <td>Male</td>
                                            <td>Donzo Company</td>
                                            <td>18,Nov 2022 - 06:53AM</td>
                                            <td>
                                                <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                    <a aria-label="anchor" href="edit-products.html"
                                                        className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                            className="ri-pencil-line"></i></a>
                                                    <a aria-label="anchor" href="#"
                                                        className="ti-btn ti-btn-wave product-btn !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
                                                            className="ri-delete-bin-line"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="product-list">
                                            <td className="product-checkbox"><input className="form-check-input"
                                                    type="checkbox" id="product3" value="" aria-label="..."/></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={images.img15} alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold">
                                                        Orange Smart Watch
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-light text-default">Watches</span>
                                            </td>
                                            <td>$349</td>
                                            <td>1,293</td>
                                            <td>Male,Female</td>
                                            <td>SlowTrack Company</td>
                                            <td>21,Oct 2022 - 11:36AM</td>
                                            <td>
                                                <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                    <a aria-label="anchor" href="edit-products.html"
                                                        className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                            className="ri-pencil-line"></i></a>
                                                    <a aria-label="anchor" href="#"
                                                        className="ti-btn ti-btn-wave product-btn !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
                                                            className="ri-delete-bin-line"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="product-list">
                                            <td className="product-checkbox"><input className="form-check-input"
                                                    type="checkbox" id="product4" value="" aria-label="..."/></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={images.img3} alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold">
                                                        Winter Coat For Women
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-light text-default">Clothing</span>
                                            </td>
                                            <td>$189</td>
                                            <td>322</td>
                                            <td>Female</td>
                                            <td>WoodHill.co.in</td>
                                            <td>16,Oct 2022 - 12:45AM</td>
                                            <td>
                                                <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                    <a aria-label="anchor" href="edit-products.html"
                                                        className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                            className="ri-pencil-line"></i></a>
                                                    <a aria-label="anchor" href="#"
                                                        className="ti-btn ti-btn-wave product-btn  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
                                                            className="ri-delete-bin-line"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="product-list">
                                            <td className="product-checkbox"><input className="form-check-input"
                                                    type="checkbox" id="product5" value="" aria-label="..."/></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={images.img4} alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold">
                                                        Vintage White Full Sleeve Tee-Shirt
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-light text-default">Clothing</span>
                                            </td>
                                            <td>$2,499</td>
                                            <td>194</td>
                                            <td>Male,Female</td>
                                            <td>Watches.co.in</td>
                                            <td>12,Aug 2022 - 11:21AM</td>
                                            <td>
                                                <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                    <a aria-label="anchor" href="edit-products.html"
                                                        className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                            className="ri-pencil-line"></i></a>
                                                    <a aria-label="anchor" href="#"
                                                        className="ti-btn ti-btn-wave product-btn !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
                                                            className="ri-delete-bin-line"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="product-list">
                                            <td className="product-checkbox"><input className="form-check-input"
                                                    type="checkbox" id="product6" value="" aria-label="..."/></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={images.img13} alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold">
                                                        Orange Watch series (44mm)
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-light text-default">Watches</span>
                                            </td>
                                            <td>$899</td>
                                            <td>267</td>
                                            <td>Male,Female</td>
                                            <td>Watches.co.in</td>
                                            <td>05,Sep 2022 - 10:14AM</td>
                                            <td>
                                                <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                    <a aria-label="anchor" href="edit-products.html"
                                                        className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                            className="ri-pencil-line"></i></a>
                                                    <a aria-label="anchor" href="#"
                                                        className="ti-btn ti-btn-wave product-btn !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
                                                            className="ri-delete-bin-line"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="product-list">
                                            <td className="product-checkbox"><input className="form-check-input"
                                                    type="checkbox" id="product7" value="" aria-label="..."/></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={images.img12} alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold">
                                                        Sweater For Women
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-light text-default">Clothing</span>
                                            </td>
                                            <td>$499</td>
                                            <td>143</td>
                                            <td>Female</td>
                                            <td>Louie Philippe</td>
                                            <td>18,Nov 2022 - 14:35PM</td>
                                            <td>
                                                <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                    <a aria-label="anchor" href="edit-products.html"
                                                        className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                            className="ri-pencil-line"></i></a>
                                                    <a aria-label="anchor" href="#"
                                                        className="ti-btn ti-btn-wave product-btn !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
                                                            className="ri-delete-bin-line"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="product-list">
                                            <td className="product-checkbox"><input className="form-check-input"
                                                    type="checkbox" id="product8" value="" aria-label="..."/></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={images.img16} alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold">
                                                        Ikonic Smart Watch(40mm)
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-light text-default">Watches</span>
                                            </td>
                                            <td>$999</td>
                                            <td>365</td>
                                            <td>Female</td>
                                            <td>Kohino.zaps.com</td>
                                            <td>27,Nov 2022 - 05:12AM</td>
                                            <td>
                                                <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                    <a aria-label="anchor" href="edit-products.html"
                                                        className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                            className="ri-pencil-line"></i></a>
                                                    <a aria-label="anchor" href="#"
                                                        className="ti-btn ti-btn-wave product-btn !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
                                                            className="ri-delete-bin-line"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="product-list">
                                            <td className="product-checkbox"><input className="form-check-input"
                                                    type="checkbox" id="product9" value="" aria-label="..."/></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={images.img23} alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold">
                                                        Apple Watch Series 5
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-light text-default">Watches</span>
                                            </td>
                                            <td>$1,499</td>
                                            <td>257</td>
                                            <td>Male,Female</td>
                                            <td>Apple Corporation</td>
                                            <td>29,Nov 2022 - 16:32PM</td>
                                            <td>
                                                <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                    <a aria-label="anchor" href="edit-products.html"
                                                        className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                            className="ri-pencil-line"></i></a>
                                                    <a aria-label="anchor" href="#"
                                                        className="ti-btn ti-btn-wave product-btn  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
                                                            className="ri-delete-bin-line"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="sm:flex items-center justify-between flex-wrap">
                                <nav aria-label="Page navigation" className="">
                                    <ul className="ti-pagination mb-0 flex flex-row rounded-sm text-[1rem] !ps-0">
                                        <li className="page-item disabled">
                                            <a className="page-link !py-[0.375rem] !px-[0.75rem]"
                                                href="#">
                                                Previous
                                            </a>
                                        </li>
                                        <li className="page-item active"><a
                                                className="page-link !py-[0.375rem] !px-[0.75rem]"
                                                href="#">1</a></li>
                                        <li className="page-item"><a className="page-link !py-[0.375rem] !px-[0.75rem]"
                                                href="#">2</a></li>
                                        <li className="page-item sm:block hidden "><a
                                                className="page-link !py-[0.375rem] !px-[0.75rem]"
                                                href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link !text-primary !py-[0.375rem] !px-[0.75rem]"
                                                href="#">
                                                next
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <button type="button" className="ti-btn bg-danger text-white !font-medium m-1">Delete
                                    All</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--End::row-1 --> */}


        </div>
    </div>
    )
}

export default Dashboard