import {React,useEffect,useState}from 'react'
import axios from 'axios'
export default function StudentAdd() {

    const [name, setname] = useState("")
    const [age, setage] = useState(0)
    const [email, setemail] = useState("")
    const [number, setnumber] = useState("")
    const [AllFormData, setAllFormData] = useState({})

    function onSubmitHandler(e)
    {
        e.preventDefault();
        const Formdata = {
            name:name,
            age:age,
            email:email,
            phoneNno:number
        }
        console.log(Formdata)

        axios.post("https://localhost:7172/api/Student/AddStudentData",Formdata)
        .then((res) =>{
            alert("Data Submited")
        })

    }

    
    return (


        <div className=' h-[100vh] w-[100vw] flex justify-center items-center'>
            <div className='h-[550px] w-[450px] rounded-2xl bg-[#F2EAE1] shadow-lg flex flex-col items-center'>
                <div className=''><h1 className='text-4xl p-4'>Student Form</h1></div>
                <form action="" onSubmit={onSubmitHandler} className='h-[80%] w-[80%] flex flex-col justify-around'>
                    
                        <div>
                            <input className='text-xl border-2 border-black rounded-lg p-1 w-full' type="text" placeholder='Enter You Name' onChange={(e)=>{setname(e.target.value)}}/>
                        </div>
                        <div>
                            <input className='text-xl border-2 border-black rounded-lg p-1 w-full' type="Number" placeholder='Enter you Age' onChange={(e)=>{setage(e.target.value)}} />
                        </div>
                        <div>
                            <input className='text-xl border-2 border-black rounded-lg p-1 w-full' type="email" placeholder='Enter your email' onChange={(e)=>{setemail(e.target.value)}} />
                        </div>
                        <div>
                            <input className='text-xl border-2 border-black rounded-lg p-1 w-full' type="text" placeholder='Enter you Number' onChange={(e)=>{setnumber(e.target.value)}} />
                        </div>
                        <div>
                            <button type='submit' className='text-xl shadow-lg rounded-lg p-1 w-full bg-orange-500 text-white'>Submit</button>
                        </div>
                   
                </form>
            </div>
        </div>
    )
}
