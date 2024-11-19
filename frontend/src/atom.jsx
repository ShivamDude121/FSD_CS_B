import { atom } from "recoil";

export let pay=atom({
    key:"to_pay",
    default:{
        f_name:"",
        l_name:"",
        userId:""
    }
})
