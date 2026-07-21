"use server"
export const loginAction =async(fromData : FormData)=>{
    console.log(fromData);
    const email = fromData.get("email");
    const password = fromData.get("password");

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
}