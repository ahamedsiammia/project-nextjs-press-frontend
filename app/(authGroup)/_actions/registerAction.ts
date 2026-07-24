

type registerState ={
    success: boolean,
    status: number,
    message: string,
    data : {
        user : {
            id : string,    
        name : string,
        email : string,
        activeStatus : string,
        role : string,
        createdAt : string,
        updatedAt : string,
        profile : {
            id : string,
            profilePhoto : string,
            bio : string | null,
            userId : string
        }
    }
    }
}


export const registerAction =async(prevState: registerState,formdata : FormData)=>{
    const name =  formdata.get("name");
    const email =  formdata.get("email");
    const password =  formdata.get("password");
    const profilePhoto =  formdata.get("profilePhoto");
    
    const payload = {
        name,
        email,
        password,
        profilePhoto
    };

    const res = await fetch(`http://localhost:5000/api/user/register`,{
        method : "POST" ,
        headers : {
            "content-type": "application/json"
        },
        body : JSON.stringify(payload)
    });

    const result = await res.json();

    return result


}