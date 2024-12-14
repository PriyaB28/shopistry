import React from 'react'
import './student.css'
import { EyeCrossed, Eye } from 'react-flaticons'

function AddStudent() {
    const [showPassword, setShowPassword] = React.useState('password');
    const initialValues = {
        fname: "",
        lname: "",
        phone: 0,
        email: "",
        address: "",
        password: "",
        gender: ""
    };
    const [inputValue, setInputValue] = React.useState(initialValues);
    const handleShowPassword = () => {
        showPassword === 'password' ? setShowPassword('text') : setShowPassword('password')
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    }
    const handleAddStudent = (e) => {
        e.preventDefault();
        console.log(inputValue);

        if (inputValue.fname === "" || inputValue.lname === "" || inputValue.phone === "" || inputValue.email === "" || inputValue.address === "" || inputValue.password === "" || inputValue.gender === "") {
            alert('Please fill all the fields');
        }

        const re = new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$");
        const isOk = re.test(inputValue.password);
        if (!isOk) {
            alert('Password should contain at least one number and one special character');
        }

        localStorage.setItem('student', JSON.stringify(inputValue));
    }
    return (
        // <!-- MAIN-CONTENT -->
        <div className="content">
            <div className="main-content">
                {/* <!-- Page Header --> */}
                <div className="block justify-between page-header md:flex">
                    <div>
                        <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-[1.125rem] font-semibold"> Add Student</h3>
                    </div>
                    <ol className="flex items-center whitespace-nowrap min-w-0">
                        <li className="text-[0.813rem] ps-[0.5rem]">
                            <a className="flex items-center text-primary hover:text-primary dark:text-primary truncate" href="#">
                                Student
                                <i className="ti ti-chevrons-right flex-shrink-0 text-[#8c9097] dark:text-white/50 px-[0.5rem] overflow-visible rtl:rotate-180"></i>
                            </a>
                        </li>
                        <li className="text-[0.813rem] text-defaulttextcolor font-semibold hover:text-primary dark:text-[#8c9097] dark:text-white/50 " aria-current="page">
                            Add
                        </li>
                    </ol>
                </div>
                {/* <!-- Page Header Close --> */}

                {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-12  col-span-12">
                        <div className="box">
                            <div className="box-body add-products !p-0">
                                <form onSubmit={handleAddStudent}>
                                    <div className="p-6">
                                        <div className="grid !grid-cols-12 md:gap-x-[3rem] gap-0">
                                            <div className=" !md:col-span-6 col-span-6">
                                                <div className="grid grid-cols-12 gap-4">
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <label className="form-label">First Name</label>
                                                        <input type="text" className="form-control w-full !rounded-md" id="student-name-add" value={inputValue.fname} name="fname" placeholder="Name" onChange={handleInputChange} />

                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <label className="form-label">Email</label>
                                                        <input type="email" className="form-control w-full !rounded-md" id="student-email-add" placeholder="email" value={inputValue.email} name='email' onChange={handleInputChange} />

                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <label className="form-label">Mobile Number</label>
                                                        <input type="number" className="form-control w-full !rounded-md" id="student-number-add" placeholder="number" value={inputValue.phone} name='phone' onChange={handleInputChange} />

                                                    </div>





                                                    <div className="xl:col-span-12 col-span-12">
                                                        <label className="form-label">Address</label>
                                                        <textarea className="form-control w-full !rounded-md" id="product-description-add" rows="2" name='address' value={inputValue.address} onChange={handleInputChange}></textarea>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className=" !md:col-span-6 col-span-6">
                                                <div className="grid grid-cols-12 gap-4">
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <label className="form-label">Last Name</label>
                                                        <input type="text" className="form-control w-full !rounded-md" id="product-actual-price" placeholder="Last Name" value={inputValue.lname} name='lname' onChange={handleInputChange} />
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label className="form-label">Gender</label>
                                                        <select className="form-control w-full !rounded-md" data-trigger name="gender" id="product-gender-add" value={inputValue.gender} onChange={handleInputChange} >
                                                            <option value="">Select</option>
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                            <option value="Others">Others</option>
                                                        </select>
                                                    </div>



                                                    <div className="xl:col-span-12 col-span-12">
                                                        <label className="form-label text-default">Password</label>
                                                        <div className="input-group">
                                                            <input type={showPassword} className="form-control form-control-lg !rounded-s-md !border-e-0" id="create-password" placeholder="password" value={inputValue.password} name='password' onChange={handleInputChange} />
                                                            <button aria-label="button" type="button" className="ti-btn ti-btn-light !mb-0 !rounded-s-none dark:border-white/10 !border-s-0" onClick={handleShowPassword}>
                                                                {/* <i className="align-middle ri-eye-off-line"></i> */}
                                                                {showPassword == 'password' ? <EyeCrossed /> : <Eye />}


                                                            </button>
                                                        </div>
                                                    </div>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-6 py-4 border-t border-dashed dark:border-defaultborder/10 sm:flex justify-end">
                                        {/* <button type="submit" className="ti-btn ti-btn-primary !font-medium m-1">Add Product<i className="bi bi-plus-lg ms-2"></i></button> */}
                                        <button type="submit" className="ti-btn ti-btn-success !font-medium m-1">Save Student<i className="bi bi-download ms-2"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}


            </div>
        </div>
    )
}

export default AddStudent