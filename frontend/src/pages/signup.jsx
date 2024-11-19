import { useState } from 'react'
import logo from '../assets/logo.png'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'



function Signup(){
  

  const [f_name,setf_name]=useState("");
  const [l_name,setl_name]=useState("");
  const [phone,setphone]=useState("");
  const [u_name,setu_name]=useState("");
  const [pass,setpass]=useState("");
  const navigate=useNavigate();
  
  async function sign(){
   
    const res= await axios.post("http://localhost:3000/user/signup",{
      firstname:f_name,
      lastname:l_name,
      number:phone,
      username:u_name,
      password:pass
    })

    if(res.data.status==400){
      localStorage.setItem('login',JSON.stringify({
        login:true,
        token:res.data.token,
        name:u_name
      }));
      
      navigate('/dashboard');
    }
    else{
      alert(res.data.msg);
    }
    
  }
  
  
    return (
        <>
 

 






        
        
        
  <div className="flex min-h-full flex-col justify-center px-6 pb-20 -pt-20 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img src={logo} className="mx-auto h-21  mt-6 w-auto" alt="" />
    {/* <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2> */}
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <div className="space-y-6" >
      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
        <div className="mt-2">
            <input type="text" onChange={(e)=>{setf_name(e.target.value); }} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
           </div>
      </div>

      <div>
        <div  className="flex items-center justify-between">
          <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
          
        </div>
        <div className="mt-2">
            <input type="text"  onChange={(e)=>{setl_name(e.target.value)}}className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
         </div>
      </div>

      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
        <div className="mt-2">
            <input type="text" onChange={(e)=>{setphone(e.target.value)}} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
           </div>
      </div>

      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
        <div className="mt-2">
            <input type="text" onChange={(e)=>{setu_name(e.target.value)}}className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
           </div>
      </div>

      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Password </label>
        <div className="mt-2">
            <input type="password" onChange={(e)=>{setpass(e.target.value)}}className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
           </div>
      </div>




      <div>
        <button onClick={sign}  className="flex w-full justify-center rounded-md bg-gradient-to-tr from-purple-500 to-sky-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </div>
    <p className="mt-10 text-center text-sm text-gray-500">
            Alredy a member?{' '}
            <a  onClick={()=>{navigate("/signin")}} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Click Here For SignIn
            </a>
          </p>


 </div>
</div>
    

        
        </>
    )
}

export default Signup