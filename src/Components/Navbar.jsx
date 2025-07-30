import { React, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {

    const [active, setActive] = useState(null);

    const handleClick = (index) => {
        setActive(index);
    };

    // const iconMap = {
    //     faHome,
    //     //faBook,
    //     // faUser,
    //     // faCreditCard,
    //     // faChartBar
    // };
    const navItems = [
        { name: "Home", path: "/Home", iconName: "faHome" },
        { name: "Course", path: "/Course" },
        { name: "Student" },
        { name: "Payment" },
        { name: "Report" }
    ];

    return (
        <div className=' h-[100vh] w-[100%] flex'>
            <nav className=' bg-[#F2EAE1] h-full w-[20%] flex flex-col justify-around'>
                <div className=' h-[40%] flex flex-col justify-between items-center'>
                    <h1 className='font-bold text-2xl border-l-4 border-[#FEAF00] w-[270px] text-center'>CRUD OPERATIONS</h1>
                    <img className='rounded-full h-[150px] w-[150px] border-black border-2' src="/profile4.jpg" alt=" User" />

                    <h5 className='font-bold  bg-gradient-to-r from-[#FEAF00] to-[#FEAF00] bg-clip-text text-transparent'>Manoj</h5>
                </div>

                <div className=' h-[35%] flex flex-col justify-around items-center'>
                    {/* <Link to="/Home"><div className=' bg-red-500 w-[80px] h-[50px] flex justify-center items-center'><p>Home</p></div></Link>
                    <Link to="/Course"><div className=' bg-red-500 w-[80px] h-[50px] flex justify-center items-center'><p>Course</p></div></Link>
                    <div className=' bg-red-500 w-[80px] h-[50px] flex justify-center items-center'><p>Student</p></div>
                    <div className=' bg-red-500 w-[80px] h-[50px] flex justify-center items-center'><p>Payment</p></div>
                    <div className=' bg-red-500 w-[80px] h-[50px] flex justify-center items-center'><p>Report</p></div> */}
                    
                        {navItems.map((item, index) =>
                            item.path ? (
                                <Link key={index} to={item.path}>
                                    <div
                                        className={`w-[150px] h-[35px] rounded-sm flex justify-center items-center cursor-pointer transition-all ${active === index ? "bg-gradient-to-r from-[#FEAF00] to-[#F8D442]" : "bg-[#F2EAE1]"
                                            }`}
                                        onClick={() => handleClick(index)}
                                    >
                                        {/* <FontAwesomeIcon icon={iconMap[item.iconName]} style={{ color: "#000000", }} /> */}
                                        <p>{item.name}</p>
                                    </div>
                                </Link>
                            ) : (
                                <div
                                    key={index}
                                    className={`w-[150px] h-[35px] rounded-sm flex justify-center items-center cursor-pointer transition-all ${active === index ? "bg-gradient-to-r from-[#FEAF00] to-[#F8D442]" : "bg-[#F2EAE1]"
                                        }`}
                                    onClick={() => handleClick(index)}
                                >
                                    <p>{item.name}</p>
                                </div>
                            )
                        )}

                </div>
               
                <div className="h-[5%] w-full flex justify-center items-center">
                    <p>Layout</p>
                </div>

            </nav>
            <div className=' h-full w-[80%]'>
                <Outlet />
            </div>
        </div>
    )
}
