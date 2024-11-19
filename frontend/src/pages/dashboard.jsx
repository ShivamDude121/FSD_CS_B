import { useEffect, useMemo, useState } from "react";
import Card from "../componets/balance_card";
import Footer from "../componets/footer";
import Header from "../componets/header";
import SearchBox from "../componets/searchbox";

import {useNavigate} from 'react-router-dom'
import axios from "axios";
import Element from "../componets/stack_ements"


function useDebounce(value,delay){
    const [ans,setans]=useState(value);
    useEffect(()=>{
        let id=setInterval(() => {
            setans(value)
            
        }, delay);

      return ()=>{clearInterval(id)}
    },[value,delay])

    return ans;

}


function Dashboard(){
    const navigate=useNavigate();
    const z=JSON.parse(localStorage.getItem("login"));
    const [bala,setbalane]=useState(0);
    const name=z.name;
    const token=z.token;
    async function bal(){
        
           let ans=await axios.get("http://localhost:3000/account/balance",{ headers: {
                'Authorization': token
              }})
        let z=parseFloat(ans.data.balance.toFixed(3));
     //   parseFloat(floatNum.toFixed(2))
        setbalane(z);


    }
    useEffect(()=>{

       bal();
    },[])

    const [input,setinput]=useState("");
    const deb_ans=useDebounce(input,700);
    const [srch,set_srch]=useState([]);
    
    useEffect(()=>{
        // search();
         axios.post("http://localhost:3000/user/find",{
            "name":deb_ans
        }).then((r)=>{set_srch(r.data.ans)})

        
    },[deb_ans]);

    let ppl=useMemo(()=>{
       if(srch!=undefined){
        return   srch.map( x => <li><Element f_name={x.firstname} l_name={x.lastname} u_name={x.username} userId={x._id}/></li>)
       }
       else return <li></li>
    },[srch])


    
  
    if(z.login==true){
    

    return (<>
    
    <Header/>
    <div className="lg:pl-52 md:px-20 sm:px-10 pt-20">
        <Card name={name} bala={bala}/>
    </div>
    <div className="py-16">
    <SearchBox setinput={setinput}/>
    </div>
    <div className="px-10 pb-20">
    
    <ul role="list" class="divide-y divide-gray-100">
        {ppl}
    </ul> 
    </div>

    <Footer/>

    
    </>
    )
}
else{
    navigate("/signin")

}
}

export default Dashboard;