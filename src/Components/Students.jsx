import React, { useState, useEffect } from 'react'
import LodingComp from './LodingComp'
import StudentAdd from './StudentAdd'
import { Link } from 'react-router-dom'

export default function Students() {

  const [studentData, setstudentData] = useState([])
  const [Loding, setLoding] = useState(false)

  useEffect(() => {
    fetch("https://localhost:7172/api/Student/GetALlStudent")
      .then((res) => {
        return res.json()
        
      })
      .then((data) => {
        setstudentData(data)
        setLoding(true)
      })
  }, [])


  return (
    <>

      {
        !Loding ? <LodingComp /> : <div className='h-full w-full flex justify-center items-center'> <div className='h-[90%] w-[90%]  bg-[#F2EAE1] rounded-lg flex flex-wrap justify-around overflow-x-scroll'>
          <Link to='/studentAdd' className='absolute left-[400px]'> <div className=' mt-2 p-2 px-8 bg-orange-400 text-white font-bold'>Add</div></Link>


          {
            studentData.map((stuObj) => {
              return <div className='bg-gray-500 rounded-xl h-[250px] w-[280px] mt-16 flex flex-col justify-around items-center'>

                <p className='text-white text-xl font-bold'>{stuObj.name}</p>
                <p className='text-white text-xl font-bold'>{stuObj.age}</p>
                <p className='text-white text-xl font-bold'>{stuObj.email}</p>
                <p className='text-white text-xl font-bold'>{stuObj.phoneNno}</p>
              </div>
            })
          }



        </div>
        </div>

      }


    </>
  )
}
