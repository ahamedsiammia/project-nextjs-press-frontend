"use server"

import { cookies } from "next/headers"

export const getMe =async()=>{
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    if(!accessToken){
       return {
        success : false,
        message : "User Not Logged In!"
       }
    };

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/user/me`,{
        headers : {
            // authorization : accessToken as unknown as string
            // authorization : `${accessToken}`
            // authorization : `Barer ${accessToken}`

            Cookie : `accessToken=${accessToken}`
        },

        cache : "force-cache",
        next:{
            revalidate: 60 *60 * 24 , // 1 day
            tags : ["my-profile"]
        }
    });

    const result = res.json();

    console.log(result);
    return result
}