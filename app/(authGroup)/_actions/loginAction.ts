"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type loginState ={
  success: boolean,
  status: number,
  message: string,
  data : {
    accessToken : string,
    refreshToken : string
  }
}
export const loginAction =async(prevState:loginState,fromData : FormData)=>{
    console.log(fromData);
    const email = fromData.get("email");
    const password = fromData.get("password");
    console.log("prevState that", prevState);
    const payload = {
        email,
        password
    };


    const res = await fetch(`http://localhost:5000/api/user/login`,{
        method : "POST",
        headers : {
            "content-type": "application/json"
        },
        body : JSON.stringify(payload)
    });

    const result  = await res.json();

    if(result.success){
        const cookieStor = await cookies();
        const accessToken = result.data.accessToken
        cookieStor.set("accessToken",accessToken,{
            httpOnly : true,
            maxAge : 60 *60 * 24,
            sameSite :"lax"
        })
        cookieStor.set("refreshToken",result.data.refreshToken,{
            httpOnly : true,
            maxAge : 60 * 60 * 24 *  7,
            sameSite : "lax"
        })

        // redirect("/dashboard")
    }
    console.log(result);
    return result
}    
 