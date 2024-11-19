import { useRecoilState } from "recoil"
import { useState } from "react";
import { pay } from "../atom"
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const SendMoney = () => {
    const navigate=useNavigate()
     const [x,setx]=useRecoilState(pay);
     const z=JSON.parse(localStorage.getItem("login"));
     const token=z.token;
     const [money,setmoney]=useState(0);
     async function pay_1(){
        const ans= await axios.post("http://localhost:3000/account/transfer",{
            "userId" :x.userId,
            "amount":money
        },{ headers: {
            'Authorization': token
          }})
          if(ans.data.status==400){
            alert("Transfer Sucessfull")
            navigate("/dashboard")
          }
          else{
            alert(ans.data.msg);
          }
     }



    return <div className="flex justify-center h-screen bg-gradient-to-r from-fuchsia-100 to-cyan-100">
        <div className="h-full flex flex-col justify-center">
            <div
                className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
            >
                <div className="flex flex-col space-y-1.5 p-6">
                <h2 className="text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div className="p-6">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center">
                    <span className="text-2xl text-white">A</span>
                    </div>
                    <h3 className="text-2xl font-semibold">{x.f_name} {x.l_name}</h3>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="amount"
                    >
                        Amount (in Rs)
                    </label>
                    <input onChange={(e)=>{setmoney(e.target.value)}}
                        type="number"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        id="amount"
                        placeholder="Enter amount"
                    />
                    </div>
                    <button onClick={pay_1} className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-blue-400 text-white">
                        Initiate Transfer
                    </button>
                </div>
                </div>
        </div>
      </div>
    </div>
}


export default SendMoney