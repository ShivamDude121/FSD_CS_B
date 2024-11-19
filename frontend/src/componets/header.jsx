
import logo from "../assets/logo.png";
import {useNavigate} from 'react-router-dom'
export default function  Header(){
  const navigate=useNavigate();
    function logout(){
      console.log("OK")
      localStorage.clear();
      navigate("/signin");
      

    }
    return(
        <>
        <header className="bg-gradient-to-r from-gray-100 to-cyan-100">
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        {/* <img className="h-8 w-auto" src={logo} alt=""> */}
        <img src={logo}   className="h-16 w-auto" alt="" />
      </a>
    </div>
    <div className="flex lg:hidden">

    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Log Out
</button>
      
    </div>
    <div className="hidden lg:flex lg:gap-x-12">
      

      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Home</a>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Help</a>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Contact Us</a>
    </div>
    <div className="hidden lg:flex  lg:flex-1 lg:justify-end">
    <button  onClick={logout} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Log Out
</button>
      {/* <a href="#" className="text-sm  font-semibold leading-6 text-gray-900">Log Out <span aria-hidden="true">&rarr;</span></a> */}
    </div>
  </nav>
 
</header>
        </>
    )
}