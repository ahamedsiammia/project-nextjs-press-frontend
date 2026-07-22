"use server"
type loginState ={
  success: boolean,
  status: number,
  message: string,
  data : object
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

    console.log(process.env.BACKEND_API_URL);

    const res = await fetch(`http://localhost:5000/api/user/login`,{
        method : "POST",
        headers : {
            "content-type": "application/json"
        },
        body : JSON.stringify(payload)
    });

    const result = await res.json();

    console.log(result);
    return result
}    
 