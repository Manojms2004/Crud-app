import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faBookmark, faDollar, faUser } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <div className='flex justify-around pt-5'>
      <div className='h-[180px] w-[250px] border-2 rounded-md border-white bg-[rgb(201,231,251)]'>
        <div className='h-[50%] w-[90%] flex flex-col justify-center items-start p-2'>
          <FontAwesomeIcon icon={faGraduationCap} style={{ color: "#000000", height: "40px" }} />
          <p>Students</p>
        </div>
        <div className='h-[50%] w-[90%] flex justify-end items-center'>
          <p  className='font-bold text-3xl'>63</p>
        </div>
      </div>
      <div className='h-[180px] w-[250px] border-2 rounded-md border-white bg-[#fad7ea]'>
        <div className='h-[50%] w-[90%] flex flex-col justify-center items-start p-2'>
          <FontAwesomeIcon icon={faBookmark} style={{ color: "#000000", height: "40px" }} />
          <p>Course</p>
        </div>
        <div className='h-[50%] w-[90%] flex justify-end items-center'>
          <p  className='font-bold text-3xl'>50</p>
        </div>
      </div>
      <div className='h-[180px] w-[250px] border-2 rounded-md border-white bg-[#f8eed7]'>
        <div className='h-[50%] w-[90%] flex flex-col justify-center items-start p-2'>
          <FontAwesomeIcon icon={faDollar} style={{ color: "#000000", height: "40px" }} />
          <p>Payments</p>
        </div>
        <div className='h-[50%] w-[90%] flex justify-end items-center'>
          <p  className='font-bold text-3xl'>600549</p>
        </div>
      </div>
      <div className='h-[180px] w-[250px] border-2 rounded-md border-white bg-gradient-to-r from-[#FEAF00] to-[#F8D442]'>
        <div className='h-[50%] w-[90%] flex flex-col justify-center items-start p-2'>
          <FontAwesomeIcon icon={faUser} style={{ color: "#000000", height: "40px" }} />
          <p>User</p>
        </div>
        <div className='h-[50%] w-[90%] flex justify-end items-center'>
          <p  className='font-bold text-3xl'>546</p>
        </div>
      </div>
    </div>
  )
}
